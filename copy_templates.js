import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFolder(projectName, template_choices) {
    try {
        let relativePath = `${path.sep + "templates" + path.sep + template_choices.toLowerCase()}`;
        let sourcePath = __dirname;
        let source = sourcePath + relativePath;
        let basePath = process.cwd();
        let destinationPath = `${projectName + path.sep + "src"}`;
        let destination = basePath + path.sep + destinationPath + relativePath;

        await fs.copy(source, destination);

        let files_array = ["index.js", "index.html"];
        let app_file_content = {
            form:
                'import Form from "./templates/form/Form.js";\n' +
                'function App() {\n' +
                'return <Form/>\n;' +
                '}\n' +
                'export default App;\n',
            aggrid:
                'import { Default } from "./templates/aggrid/AgGrid.js";\n' +
                'function App() {\n' +
                'return <Default/>;\n' +
                '}\n' +
                'export default App;\n',
            appheader:
                'import AppHeader from "./templates/appheader/AppHeader.js";\n' +
                'function App() {\n' +
                'return <AppHeader/>;\n' +
                '}\n' +
                'export default App;\n',
            login:
                'import Login from "./templates/login/Login.js";\n' +
                'function App() {\n' +
                'return <Login/>;\n' +
                '}\n' +
                'export default App;\n',
            carousel: // Added content for Carousel
                'import Carousel from "./templates/carousel/Carousel.js";\n' +
                'function App() {\n' +
                'return <Carousel/>;\n' +
                '}\n' +
                'export default App;\n'
        };

        let appJsPath = basePath + path.sep + destinationPath + path.sep + "App.js";
        let content = app_file_content[template_choices.toLowerCase()];
        fs.writeFile(appJsPath, content, 'utf-8', (err) => {
            if (err) {
                console.error(`Error writing to App.js: ${err.message}`);
                return;
            }
            console.log(`Content has been successfully written to ${appJsPath}`);
        });

        files_array.map(async (filePath) => {
            let fileSource = sourcePath + path.sep + filePath;
            let fileDestination = basePath + path.sep + destinationPath + path.sep + filePath;
            await fs.copy(fileSource, fileDestination, { overwrite: true });
        });
    } catch (err) {
        console.error(`Error copying folder: ${err}`);
    }
}

export default copyFolder;

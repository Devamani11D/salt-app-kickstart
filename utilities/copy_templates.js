import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import copy_appHeader from "./copy_appheader.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyFolder(projectName, template_choices) {
  let basePath,source,sourcePath,destination,destinationPath;
  try {
    // Copying templates
    for (const template of template_choices) {
      let relativePath = `${
        path.sep + "templates" + path.sep + template.toLowerCase()
      }`;
      sourcePath = path.join(__dirname, '..');;
      // console.log(sourcePath);
      source = sourcePath + relativePath;
      basePath= process.cwd();
      // console.log(basePath);
      destinationPath = `${projectName + path.sep}`;
      destination = basePath + path.sep + destinationPath +"src"+ relativePath;
      await fs.copy(source, destination);
    }

    let files_array = ["src/index.js", "public/index.html"];
    let app_js=
    `import React from "react";
    import {BrowserRouter as Router,Routes,Route,Link,Navigate,useNavigate} from "react-router-dom";
    import AppHeader from "./templates/appheader/AppHeader.js";
    `
    for(const template of template_choices){
      let add_import=`\nimport ${template} from "./templates/${template.toLowerCase()}/${template}.js";`;
      app_js+=add_import;
      // console.log(add_import);
    };
    // console.log(app_js);
    app_js+=`\nfunction App(){
      return( 
      
      <Router>
      <AppHeader/>
      <div style={{ paddingTop: "90px" }}>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/appheader" element={<AppHeader/>} />
      `

      for(const template of template_choices){
        let add_route=`\n<Route path="/${template.toLowerCase()}" element={<${template}/>}/>`;
        app_js+=add_route;
        // console.log(add_import);
      };
      
      app_js+=
      `\n<Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      </div>
      </Router>
      
    );
      }; 
      export default App;`
      console.log(app_js);
      const appheader_tabs = template_choices.filter(choice => !(choice === "Login"));
      console.log("Tabs"+appheader_tabs);
    copy_appHeader(projectName,appheader_tabs);
    // let app_file_content = {
    //   form:
    //   'import React from "react";'+
    //   'import {BrowserRouter as Router,Route,Link,Navigate,useNavigate} from "react-router-dom";'+
    //   'import Login from "./templates/login/Login.js";'+
    //   'import AppHeader from "./templates/appheader/AppHeader.js";'+
    //   'function App()'+
    //     '{return <><Router><Routes><Route path="/" element={<Navigate to="/login" />} /><Route path="/login" element={<Login />} /><Route path="/saltapp" element={<> <AppHeader /> </>} /><Route path="*" element={<Navigate to="/login" />} /></Routes></Router></>; } export default App;',
    //   aggrid:
    //     'import { Default } from "./templates/aggrid/AgGrid.js";\n' +
    //     "function App() {\n" +
    //     "return <Default/>;\n" +
    //     "}\n" +
    //     "export default App;\n",
    //   appheader:
    //     'import AppHeader from "./templates/appheader/AppHeader.js";\n' +
    //     "function App() {\n" +
    //     "return <AppHeader/>;\n" +
    //     "}\n" +
    //     "export default App;\n",

    //   // Added content for Carousel
    //   carousel:
    //     'import Carousel from "./templates/carousel/Carousel.js";\n' +
    //     "function App() {\n" +
    //     "return <Carousel/>;\n" +
    //     "}\n" +
    //     "export default App;\n",
    //   // Added content for Accordian
    //   accordian:
    //     'import Accordian from "./templates/accordian/Accordian.js";\n' +
    //     "function App() {\n" +
    //     "return <Accordian/>;\n" +
    //     "}\n" +
    //     "export default App;\n",
    //   // Added content for Calender
    //   calender:
    //     'import Calendar from "./templates/calender/Calender.js";\n' +
    //     "function App() {\n" +
    //     "return <Calendar/>;\n" +
    //     "}\n" +
    //     "export default App;\n",
    //   // Added content for Toast
    //   toast:
    //     'import React, { useState } from "react";\n' +
    //     'import ToastContainer from "./templates/notification/notification.js";\n' +
    //     "function App() {\n" +
    //     "  return (\n" +
    //     "    <div>\n" +
    //     "      <h1>Welcome to Your Salt App</h1>\n" + // Optional: add a welcome message
    //     "      <ToastContainer />\n" + // Include the ToastContainer here
    //     "    </div>\n" +
    //     "  );\n" +
    //     "}\n" +
    //     "export default App;\n",
    // };

    let appJsPath = basePath + path.sep + destinationPath +"src"+ path.sep + "App.js";
    
      fs.writeFile(appJsPath, app_js, "utf-8", (err) => {
        if (err) {
          console.error(`Error writing to App.js: ${err.message}`);
          return;
        }
        console.log(`Content has been successfully written to ${appJsPath}`);
      });
    
    //copying index files
    files_array.map(async (filePath) => {
      let fileSource = sourcePath + path.sep + filePath;
      let fileDestination =
        basePath + path.sep + destinationPath + path.sep + filePath;
      await fs.copy(fileSource, fileDestination, { overwrite: true });
    });
  } catch (err) {
    console.error(`Error copying folder: ${err}`);
  }
}

export default copyFolder;

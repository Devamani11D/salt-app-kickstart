import fs from 'fs-extra';
import path from 'path';

async function copyFolder(projectName,template_choices) {
  try {
    let relativePath=`${path.sep+"templates"+path.sep+template_choices.toLowerCase()}`
    let sourcePath=process.cwd();
    let source=sourcePath+relativePath;
    let destinationPath=`${projectName+path.sep+"src"}`;
    let destination=path.dirname(sourcePath)+path.sep+destinationPath+relativePath;
    console.log(source + " " + destination);
    await fs.copy(source, destination);
    let files_array=["index.js","index.html"];
    let app_file_content={
        form:
            'import Form from "./templates/form/Form";\n'+
            'function App() {\n'+
            'return <Form/>\n;'+
            '}\n'+

            'export default App;\n'
        ,
        aggrid:
            'import { Default } from "./templates/aggrid/AgGrid";\n'+
            'function App() {\n'+
            'return <Default/>;\n'+
            '}\n'+

            'export default App;\n'
        ,
        appheader:
            
            'import AppHeader from "./templates/appheader/AppHeader";\n'+
            'function App() {\n'+
            'return <AppHeader/>;\n'+
            '}\n'+

            'export default App;\n'
        

    }
    let appJsPath=path.dirname(sourcePath)+path.sep+destinationPath+path.sep+"App.js";
    let content=app_file_content[template_choices.toLowerCase()];
    console.log
    fs.writeFile(appJsPath, content, 'utf-8', (err) => {
        if (err) {
          console.error(`Error writing to App.js: ${err.message}`);
          return;
        }
        console.log(`Content has been successfully written to ${appJsPath}`);
      });
    files_array.map(async(filePath)=>{
        let fileSource=sourcePath+path.sep+filePath;
        let fileDestination=path.dirname(sourcePath)+path.sep+destinationPath+path.sep+filePath;
        await fs.copy(fileSource, fileDestination,{overwrite:true});
    });

    // if(template_choices.toLowerCase()==="form"){
    //     let source_for_form=path.join(baseFolderPath,`${"templates"+path.sep+"form"}`);
    //     let form_folder_path=destinationPath+"templates"+path.sep+"form";
    //     destination=path.join(baseFolderPath, form_folder_path);
    //     console.log(source_for_form + " "+ destination);
    // await fs.copy(source_for_form, destination);
    // }
    // if(template_choices.toLowerCase()==="aggrid"){
    //     let source_for_aggrid=path.join(baseFolderPath,`${"templates"+path.sep+"aggrid"}`);
    //     let aggrid_folder_path=destinationPath+"templates"+path.sep+"aggrid";
    //     destination=path.join(baseFolderPath, aggrid_folder_path);
    //     console.log(source_for_aggrid + " "+ destination);
    // await fs.copy(source_for_aggrid, destination);
    // }
    // console.log(`Folder copied from ${source_for_common} to ${destinationPath}`);

  } catch (err) {
    console.error(`Error copying folder: ${err}`);
  }
}

export default copyFolder;
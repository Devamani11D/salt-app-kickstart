import {execSync} from 'child_process'
import os from 'os'
import sudoPrompt from 'sudo-prompt'
const options = {
    name: 'My CLI App',
  };
const checkAndInstall=(command,installCommand,platform)=>{
    try{
        execSync(`command -v ${command}`,{stdio:'ignore'});
        console.log(`${command} is already installed.`);
    }catch(err){
        console.log(`${command} is not installed. Installing...`);
        try{
            execSync(installCommand,{stdio:'inherit'});
            console.log(`${command} is successfully installed`);
        }catch(err){
            console.log(`Failed to install ${command}: `,err);
            if (platform === 'win32') {
                // Re-run the install command with admin rights on Windows
                sudoPrompt.exec(installCommand, options, (error, stdout, stderr) => {
                  if (error) {
                    console.error(`Failed to install ${command} with admin rights: ${stderr}`);
                    process.exit(1);
                  } else {
                    console.log(`${command} has been installed successfully with admin rights.`);
                  }
                });
              } else {
                console.error(`Please run the script with administrative rights to install ${command}.`);
                process.exit(1);
              }
        }
    }
}
export default checkAndInstall;
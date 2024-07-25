import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'

const execPromise = util.promisify(exec);

const dependencies=[
  {
    name:'react',
    version:'18.3.1'
},
{
  name:'react-dom',
  version:'18.3.1'
},
{
  name:'react-scripts',
  version:'5.0.1'
},
    {
        name:'@salt-ds/core',
        version:'1.32.0'
    },
    {
        name:'@salt-ds/ag-grid-theme',
        version:'1.4.3'
    },
    {
        name:'ag-grid-react',
        version:'32.0.2'
    },
    {
        name:'ag-grid-enterprise',
        version:'32.0.2'
    },
    {
        name:'@salt-ds/theme',
        version:'1.20.0'
    },
    {
        name:'@salt-ds/icons',
        version:'1.12.1'
    }

    
    


];
const execWithPromiseAndStreaming = (command, options = {}) => {
    return new Promise((resolve, reject) => {
      const childProcess = exec(command, options);
  
      childProcess.stdout.on('data', (data) => {
        console.log(chalk.white(data.toString()));
      });
  
      childProcess.stderr.on('data', (data) => {
        console.error(chalk.red(data.toString()));
      });
  
      childProcess.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`Process exited with code: ${code}`));
        }
      });
  
      childProcess.on('error', (err) => {
        reject(err);
      });
    });
  };
const install_dependencies=async (projectName)=>{

    console.log(chalk.green("Installing Dependencies..."));

    const install_command=`npm install ${dependencies.map(dep=>{
        const {name,version}=dep;
        console.log(`${name}@${version} `);
        return `${name}@${version}`
        }).join(' ')}`;

    const commands=[
        `mkdir ${projectName} && cd ${projectName}`,
        'npx create-react-app ./',
        install_command
        // `npm install react`
    ];

    const fullCommand = commands.join(' && ');
    console.log(fullCommand);
    
    try{
        await execWithPromiseAndStreaming(fullCommand,{ shell: true });
        console.log(chalk.green('Dependencies installed Successfully.'));
        
    }catch(err){
    console.log("Error: "+err.message);
}
    console.log("outside exec");
};

export default install_dependencies;
import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'
import exec_childprocess from './exec_childprocess.js';
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

const install_dependencies=async (projectName)=>{
    console.log(chalk.green("Installing Dependencies..."));
    const install_command=`npm install ${dependencies.map(dep=>{
        const {name,version}=dep;
        console.log(`${name}@${version}\n`);
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
        await exec_childprocess(fullCommand,{ shell: true });
        console.log(chalk.green('Dependencies installed Successfully.'));
    }catch(err){
    console.log("Error: "+err.message);
}
};
export default install_dependencies;
import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'
import exec_childprocess from './exec_childprocess.js';
const execPromise = util.promisify(exec);

const run_in_localhost=async (projectName)=>{
    console.log(chalk.green("Launching to Localhost.."));
    const commands=[
        `cd ${projectName}`,
        'npm start',
    ];
    const fullCommand = commands.join(' && ');
    console.log(fullCommand);
    try{
        await exec_childprocess(fullCommand,{ shell: true });
        console.log(chalk.green('Running on Localhost'));    
    }catch(err){
    console.log("Error: "+err.message);
}
};
export default run_in_localhost;
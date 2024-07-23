import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'

const execPromise = util.promisify(exec);

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
const run_in_localhost=async (projectName)=>{

    console.log(chalk.green("Launching to Localhost.."));
    const commands=[
        `cd ../ && cd ${projectName}`,
        'npm start',
    ];

    const fullCommand = commands.join(' && ');
    console.log(fullCommand);
    
    try{
        await execWithPromiseAndStreaming(fullCommand,{ shell: true });
        console.log(chalk.green('Running on Localhost'));
        
    }catch(err){
    console.log("Error: "+err.message);
}
    console.log("outside exec");
};

export default run_in_localhost;
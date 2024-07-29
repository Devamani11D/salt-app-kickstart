import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'
const exec_childprocess=(command,options={})=>{
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
}
export default exec_childprocess;
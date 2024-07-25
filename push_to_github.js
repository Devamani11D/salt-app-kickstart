import {exec} from 'child_process'
import chalk from 'chalk'
import util from 'util'
import simpleGit from 'simple-git'
import path from 'path'

// const execPromise = util.promisify(exec);

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

const execPromise = util.promisify(exec);
  async function checkAndInitializeGitRepo(directory) {
    try {
      // Check if the directory is a Git repository
      await execPromise('git rev-parse --is-inside-work-tree', { cwd: directory });
      console.log('Directory is already a Git repository.');
    } catch (error) {
      if (error.stderr.includes('fatal: not a git repository')) {
        console.log('Directory is not a Git repository. Initializing...');
        try {
          // Initialize Git repository
          await execPromise('git init', { cwd: directory });
          console.log('Git repository initialized successfully.');
        } catch (initError) {
          console.error('Failed to initialize Git repository:', initError.message);
        }
      } else {
        console.error('Error checking Git repository status:', error.message);
      }
    }
  }
const push_to_github=async (projectName,token,username,repositoryName,branch,commitMessage)=>{

    console.log(chalk.green("Pushing to github.."));
    const remote=`https://${token}@github.com/${username}/${repositoryName}.git`;
    const commands=[
        `cd ${projectName}`,
        `gh repo create ${repositoryName} --public --description ${repositoryName}`,
        // 'git init',
        'git add .',
        `git commit -m ${commitMessage}`,
        // `git remote get-url origin`,
        `git remote add origin ${remote}`,
        `git push origin ${branch}`
    ];

    let directory=path.dirname(process.cwd())+path.sep+projectName;
    console.log("directory "+directory);
    const fullCommand = commands.join(' && ');
    console.log(fullCommand);
    
    try{
        await checkAndInitializeGitRepo()
        await execWithPromiseAndStreaming(fullCommand,{ shell: true });
        console.log(chalk.green('Pushed to remote repository'));
        
    }catch(err){
    console.log("Error: "+err.message);
}
    console.log("outside exec");
};

export default push_to_github;



// import simpleGit from 'simple-git'
// import dotenv from 'dotenv'
// import path from 'path'


// dotenv.config();


// const push_to_github=async(projectName,token,username,repositoryName,branch,commitMessage)=>{
    
//     const target_folder_path=process.cwd()+path.sep+projectName;
//     const git=simpleGit(target_folder_path, { binary: 'git' });
//     console.log(target_folder_path);
//     const currentDirectory = await git.revparse(['--show-toplevel']);
//     console.log(`Current directory is set to: ${currentDirectory}`);
    
//     // Check if the directory is a Git repository and has the correct remote
//     // const status = await git.status();
//     // console.log('Git status:', status);

//     // const remotes = await git.getRemotes();
//     // console.log('Current remotes:', remotes);
//     let sourcePath=process.cwd();
//     const projectPath=sourcePath+path.sep+projectName;
//     const remote=`https://${token}@github.com/${username}/${repositoryName}.git`

//     try{
//         await git.cwd(target_folder_path);
//         const currentDirectory = await git.revparse(['--show-toplevel']);
//         console.log(`Current directory is set to: ${currentDirectory}`);
        
//         await git.addRemote('origin',remote);
//         await git.add(projectPath);
//         await git.commit(commitMessage);
//         await git.push('origin',branch);
//         console.log('Code Successfully pushed to github');
//     }
//     catch(err){
//         console.error('Failed to push code to Github : ',err.message);
//     }
// }

// export default push_to_github;
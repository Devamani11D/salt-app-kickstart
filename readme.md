# 🌟 Salt App Kickstart

![npm](https://img.shields.io/npm/v/salt-app-kickstart?style=flat-square) ![npm](https://img.shields.io/npm/dt/salt-app-kickstart?style=flat-square)

Create a new Salt Design System app quickly and easily.


## 🚀 Quick Start

To create a new Salt app, run:

```bash
npx salt-app-kickstart@latest
```
### What happens next:

- You’ll be prompted for a few details, such as the project name and template choice.
- The tool will automatically create the project structure tailored to your specifications.
- It will install all necessary dependencies for a smooth development experience.
- Finally, your app will launch on `localhost`, allowing you to start coding immediately!

## 🎥 Video Demonstration
<div align="center">
<a href="https://drive.google.com/file/d/1JIBCPyL2K3Ta3AOMTqt7BuqHjlnxS7m3/view?usp=sharing" controls autoplay>
  <img src="/video-thumbnail.png" alt="Demonstration of the package" width="600"/>
</a>
</div>

## 🌟 Why Salt App Kickstart?

- **Automatic Setup**: Save time with pre-configured Salt Design System templates.
- **Flexible Templates**: Includes popular templates like AGGrid and Dashboard.
- **Local Development**: Automatically launches the app on `localhost` for immediate use.
- **GitHub Integration**: Easily push your app to a GitHub repository.

## 🛠 Project Structure

### Current Project Structure

```plaintext
salt-app-kickstart/
├── templates/                  # Various project templates
├── .gitignore                   # Files to be ignored by Git
├── CODE_OF_CONDUCT.md           # Contributor code of conduct
├── CONTRIBUTING.md              # Contribution guidelines
├── KNOWN_ISSUES_AND_TASKS.md    # Document listing known issues
├── LICENSE                      # License details
├── check_install.js             # Script to verify installation prerequisites
├── cli.js                       # Main entry point for the CLI tool
├── copy_templates.js            # Utility for copying templates
├── exec_childprocess.js         # Handles child processes
├── install_dependencies.js       # Manages package installations
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Dependency lock file
├── push_to_github.js            # Pushes project to GitHub
├── readme.md                    # Project documentation
├── run_in_localhost.js          # Launches app locally
└── video-thumbnail.png          # Thumbnail for demo video
```

## Generated Project Structure
```
my-app/                         # Your newly created app
├── public/                     # Static files for your app
├── src/                        # Source code of your app
│   ├── templates/              # Various app templates
│   ├── App.css                 # Main styles
│   ├── App.js                  # Main application logic
│   ├── App.test.js             # Test cases for the main app
│   ├── index.css               # Styles for the index
│   ├── index.html              # Main HTML file to be served (copied from the current structure)
│   ├── index.js                # Main entry point for the app (copied from the current structure)
│   ├── logo.svg                # Logo for the app
│   ├── reportWebVitals.js      # Performance reporting
│   └── setupTests.js           # Setup for testing
├── package-lock.json           # Dependency lock file
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

- **Starting Point**:
  The entry point of the application is `cli.js`, which contains command's abstract logic to initiate the setup process. From `cli.js`, different functions are called to execute various utility scripts, leading to the generation of the project structure. Key files, such as `index.js` and `index.html`, are copied from the current project structure to the newly created app, ensuring that users have a solid foundation to start their development.



## 🛠 Project Flowchart
```plaintext
  +-----------------------------------+
  |         Salt App Kickstart        |
  +-----------------------------------+
                  |
                  | 
                  v
  +-----------------------------------+
  |               cli.js              |
  +-----------------------------------+
  |        main entry point           |
  |(contains command's abstract logic)|
  +-----------------------------------+
                  |
                  | Calls
                  v
  +-----------------------------------+
  |       Various Utility Scripts     |
  +-----------------------------------+
  | check_install.js                  |
  | copy_templates.js                 |
  | exec_childprocess.js              |
  | install_dependencies.js           |
  | push_to_github.js                 |
  +-----------------------------------+
                  |
                  v
  +-----------------------------------+
  |             index.js              |  <--- Copied to the generated structure
  +-----------------------------------+
  | main application logic            |
  +-----------------------------------+
                  |
                  v
  +-----------------------------------+
  |            index.html             |  <--- Copied to the generated structure
  +-----------------------------------+
  | main HTML file                    |
  +-----------------------------------+
                  |
                  v
  +-----------------------------------+  
  |          Project Metadata          |
  +------------------------------------+
  | package.json                       |
  | package-lock.json                  |
  +------------------------------------+
                  |
                  v
  +-----------------------------------+
  |        Project Documentation      |
  +-----------------------------------+
  | README.md                         |
  | LICENSE                           |
  | CONTRIBUTING.md                   |
  | CODE_OF_CONDUCT.md                |
  | KNOWN_ISSUES_AND_TASKS.md         |
  | .gitignore                        |
  +-----------------------------------+
```
## 🛠 Prerequisites
Ensure the following are installed on your machine:
- Node.js (v14 or above) https://nodejs.org/en/blog/release/v14.17.3
- npm (v6 or above)  https://www.npmjs.com/package/npm/v/6.14.6

If you run into issues during setup, try running `check_install.js`:

node check_install.js
This script will verify your system setup and highlight any missing dependencies.

  

## 🔧 Features

- **📦 Pre-installed Salt Dependencies**: Save time with built-in support for Salt Design System components.
- **📊 AGGrid and Dashboard Templates**: Jumpstart your projects with ready-made grids and dashboards.
- **📱 Local Dev Environment**: The app automatically launches on `localhost` so you can start coding right away.
- **🔗 GitHub Integration**: Quickly push your project to a GitHub repository with built-in commands.

## 💻 Development Workflow

1. **Install dependencies**:

   ```bash
   npm install
   ```
2. **Run the app**:

   ```bash
   npm start
   ```
You can access your application by visiting [http://localhost:3000](http://localhost:3000) in your web browser. This will display your newly created app, allowing you to interact with it immediately.

3. **Build for production**:

   ```bash
   npm run build
   ```
This creates an optimized, production-ready build of your app inside the `build/` folder.

4. **Deploy your app** to hosting services like **GitHub Pages**, **Netlify**, or **Vercel**. Each platform provides simple guides for deploying your app:

   - **GitHub Pages**: Push your build folder to a GitHub repository and enable GitHub Pages in the settings.
   - **Netlify**: Drag and drop your `build/` folder to the Netlify dashboard for instant deployment.
   - **Vercel**: Connect your GitHub repository and follow the prompts to deploy.

## 🌐 Salt Design System Integration

The **Salt Design System** is pre-installed, offering reusable components and consistent UI elements for rapid development. With pre-styled components, you can focus on your app's logic and functionality while maintaining a cohesive design throughout your project.

## 🙌 Contributing

We welcome contributions! If you’d like to help improve this project, please check out our [Contributing Guide](CONTRIBUTING.md) for details on how to get involved.

## 📝 License

This project is licensed under the **MIT License**. For more details, check the [LICENSE](LICENSE) file in this repository.

## ❓ Questions?

If you have any questions or suggestions, feel free to [reach out](mailto:duddekuntadevamani@gmail.com). We’re here to help you build awesome apps with Salt!

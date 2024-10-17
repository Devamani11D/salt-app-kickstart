# Contributing to Salt App Kickstart

First off, Thank you for considering contributing to our project! Your time and effort are greatly appreciated.

The following is a set of guidelines for contributing to Salt App KickStart. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

<br>

# How Can I Contribute?

# Reporting Bugs

This section guides you on how to report bugs.

- Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/Devamani11D/salt-app-kickstart/issues).
- If you're unable to find an open issue addressing the problem, open a new one. Be sure to include:
  - A descriptive title and a summary.
  - Steps to reproduce the bug.
  - The version of Salt App Kickstart you are using.
  - Any other details that you think are relevant.

<br>

# Suggesting Enhancements

This section guides you on how to suggest enhancements.

- Search GitHub issues to ensure the feature hasn't been requested.
- If it hasn't been requested, open an issue and describe:
  - The enhancement you would like to see.
  - Why you think it would be useful.
  - Any additional context or ideas.

<br>

# Pull Requests

This section guides you on how to submit pull requests.

- Fork the repository and create your branch from `main`.
- If you've added code that should be tested, add tests.
- Ensure the test suite passes.
- Make sure your code lints.
- Issue that pull request!

<br>

# Project Structure

```bash
                                      +--------------------+
                                      |  SALT-APP-KICKSTART|
                                      +---------+----------+
                                                |
      +----------------------------------------+------------------------------------+
      |                                        |                                    |
+-----+-----+                          +--------+---------+                +---------+---------+
|  .github  |                          |     templates    |                |   .gitignore      |
+-----------+                          +-----------------+                +------------------+
      |                                         |
+-----+-----+                 +-----------------+----------------+
|  check_install.js           |                 |                |
+------------------+    index.html      other_template_files     |
|  cli.js          |          +---------------------------------+
+------------------+
|  CODE_OF_CONDUCT.md
+------------------+
|  CONTRIBUTING.md |   +------------------+    +------------------------+
+------------------+   |   README.md      |    | Known Issues and Notes |
|  LICENSE         |   +------------------+    +------------------------+
+------------------+
|  copy_templates.js  |                   | +------------------------+
+------------------+   | install_dependencies.js   | package-lock.json|
|  exec_childprocess.js|                   | +------------------------+
+------------------+   | push_to_github.js       +--------------------+
|  run_in_localhost.js |                   |package.json|
+----------------------+   | video-thumbnail.png   |
|   index.js         |
+--------------------+
```

<br>

# Good Coding Practices

Please follow these coding standards:

1. **Follow the Project's Code Style**

   - Maintain consistency with the existing code style (indentation, spacing, comments).
   - Use meaningful and descriptive names for variables, functions, and classes.
   - Keep functions short and focused on a single task.
   - Avoid hardcoding values; instead, use constants or configuration files when possible.

2. **Write Clear and Concise Comments**

   - Use comments to explain why you did something, not just what you did.
   - Avoid unnecessary comments that state the obvious.
   - Document complex logic and functions with brief explanations to help others understand your thought -process.

3. **Keep Code DRY (Don't Repeat Yourself)**

   - Avoid duplicating code. Reuse functions, methods, and components whenever possible.
   - If you find yourself copying and pasting code, consider creating a new function or component.

4. **Write Tests**

   - Write unit tests for your functions and components.
   - Ensure your tests cover both expected outcomes and edge cases.
   - Run tests locally before making a pull request to make sure your changes don’t introduce new bugs.

5. **Code Reviews and Feedback**

   - Be open to receiving constructive feedback from other contributors.
   - Conduct code reviews for others and provide meaningful suggestions to improve the code.
   - Always refactor your code based on feedback to meet the project's standards.

<br>

# Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

<br>

# Getting Started

1. **Star this repository**
    Click on the top right corner marked as **Stars** at last.

2. **Fork this repository**
    Click on the top right corner marked as **Fork** at second last.

3. **Clone the forked repository**

```bash
git clone https://github.com/<your-github-username>/FinVeda.git
```
  
4. **Navigate to the project directory**

```bash
cd FinVeda
```

5. **Create a new branch**

```bash
git checkout -b <your_branch_name>
```

6. **To make changes**

```bash
git add .
```

7. **Now to commit**

```bash
git commit -m "add comment according to your changes or addition of features inside this"
```

8. **Push your local commits to the remote repository**

```bash
git push -u origin <your_branch_name>
```

9. **Create a Pull Request**

10. **Congratulations! 🎉 you've made your contribution**

<br>

# Running the Project Locally

Salt App Kickstart is a CLI tool for injecting templates into a React app, launching it locally, and pushing it to GitHub. To run it locally:

Ensure you have Node.js installed on your machine. You can verify it with:
```bash
node -v
```

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/salt-app-kickstart.git
```

```bash
cd salt-app-kickstart
```

```bash
npm install
```

Run the application:

```bash
npm start
```

This will execute the CLI tool (cli.js), which will inject the templates into your React app and launch it on localhost.

<br>

# Alternatively contribute using GitHub Desktop 🖥️

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
   - Go to the GitHub website and navigate to your fork of the repository.
   - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the repository.

<br>

# Community
Feel free to join our community discussions in the [Issues](https://github.com/Devamani11D/salt-app-kickstart/issues) and [Pull Requests](https://github.com/Devamani11D/salt-app-kickstart/pulls) sections of the repository.

<br>

# Thank you for contributing 💗

We truly appreciate your time and effort to help improve our project. Feel free to reach out if you have any questions or need guidance. Happy coding! 🚀

##

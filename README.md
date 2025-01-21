# Project Name

## Overview

Project Name is a web application built with React that provides a user-friendly interface for managing tasks and settings. The application features a sidebar for navigation, various charts for data visualization, and customizable user settings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [BranchingStrategy]
- [Contributing](#contributing)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/abhijithp05/soar.git

   ```

2. Navigate to the project directory:

### `cd project-name`

3. Install the dependencies:

### `npm install`

4. To run the application locally, use the following command

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment

For deployment,

1. Dev Env:
   For DEV deployment, create a Pull request from the feature branch to the development branch and once changes are merged deployment will happen automatically.
   https://soar-development.vercel.app/

2. Prod Env

For deployment, create a Pull request from the development branch to the main branch and once changes are merged deployment will happen automatically.
https://soar-alpha.vercel.app/

## Folder Structure

```sh
[.eslintrc.js](http://\_vscodecontentref*/1)
.gitignore
[.prettierrc.json](http://_vscodecontentref_/2)
[package.json](http://_vscodecontentref_/3)
[postcss.config.js](http://_vscodecontentref_/4)
public/
index.html
manifest.json
robots.txt
[README.md](http://_vscodecontentref_/5)
src/
assets/
icons/
components/
Charts/
BarChart.jsx
LineGraph.jsx
PieChart.jsx
Common/
Button.jsx
Card.jsx
Icon.jsx
Input.jsx
Layout/
MainContent.jsx
SideBar.jsx
TopNav.jsx
constants/
sideBar.const.js
hooks/
index.css
index.js
layout/
StyledContainers.js
StyledLink.js
routes/
services/
setupTests.js
styles/
StyledContainers.js
StyledLink.js
[tailwind.config.js](http://_vscodecontentref_/6)
```

## Features

1. Sidebar Navigation: Easy navigation through different sections of the application.
2. Charts: Visual representation of data using bar charts, line graphs, and pie charts.
3. User Settings: Customizable user settings stored in local storage.
4. Responsive Design: Optimized for various screen sizes.

## Branching Strategy

### Git Flow

Branches in Git Flow:

1. master: Contains the production-ready code. Each commit on master represents a stable, deployable state.

2. develop: This is the integration branch for ongoing work. All features are merged here before being released to production.

3.feature/\*: Feature branches are used to develop new features or bug fixes. These are created from the develop branch and merged back into develop when complete.

4. release/_: When develop is ready for a release, a release/_ branch is created to prepare the code for production. This branch allows for last-minute bug fixes, documentation updates, or version number changes.

5. hotfix/\*: These are emergency fixes made directly to master (or main). After the fix, the changes are merged into both master and develop to ensure consistency.

### Flow Example:

1. Start with master and develop.
2. Create a feature/ branch from develop.
3. Merge the feature back into develop.
4. When ready for a release, create a release/ branch from develop.
5. Merge release/ into both master and develop.
6. For urgent fixes, create a hotfix/ branch from master, fix, then merge into both master and develop.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.Fork the repository. 2. Create a new branch:

### `git checkout -b feature/your-feature-name`

3. Make your changes and commit them:

### `git commit -m 'Add some feature'`

4. Push to the branch:

### `git push origin feature/your-feature-name`

5. Open a pull request.

# c1 Airkey App

> Capital One Airkey App (marketing pages)

## Getting Started

This guide will walk you through the process of setting up this repository on your local machine for development and testing purposes.

> [Node.js](https://nodejs.org/) (version 20 or higher)

```bash
npm ci
npm run dev
```

## Project Scripts

This project includes a variety of npm scripts to facilitate development, build, testing, and deployment processes. Below is a guide to the most important scripts.

### Node Version Requirement

- `preinstall`, `predev`, `prestart`: Ensure that Node.js version 20 or higher is being used.

### Build Scripts

- `build`: Builds the project using Qwik.
- `build.client`: Builds the client-side application.
- `build.preview`: Builds the project for preview purposes with server-side rendering (SSR).
- `build.ssg`: Generates a static site build.
- `build.all`: Cleans the project and then builds both the client and static site.
- `build.types`: Compiles TypeScript files without emitting JavaScript, useful for type-checking.
- `clean`: Removes the `dist` and `server` directories.

### Deployment Scripts

- `predeploy`: Runs `build.all` before deployment.
- `deploy`: Deploys the `dist` directory to the specified S3 bucket and folder.
- `deploy.folder`: Outputs the deployment folder path.

### Development Scripts

- `dev`: Starts the development server with SSR enabled.
- `dev.debug`: Starts the development server in debug mode.

### Formatting & Linting

- `fmt`: Formats code using Prettier.
- `fmt.check`: Checks if the code is formatted correctly.
- `lint`: Lints the TypeScript files in the `src` directory.

### Preview

- `preview`: Builds the project for preview and opens it in the browser.

### Testing Scripts

- `test`: Runs component tests using Vite.
- `test.e2e`: Runs end-to-end tests using Playwright.
- `test.report`: Displays the Playwright test report.
- `test.unit`: Runs unit tests for components.
- `test.unit.ui`: Runs unit tests with a UI interface.

### Miscellaneous Scripts

- `qwik`: Runs the Qwik CLI with the specified environment file.
- `start`: Starts the application in SSR mode and opens it in the browser.

### Usage

To run any of these scripts, use `npm run <script-name>` in your terminal. For example, to start the development server, you would run `npm run dev`.

## Deployment and Branch Workflow

### Overview

Our GitHub Actions workflow automates the process of building and deploying our application to AWS S3, followed by invalidating the CloudFront cache. This setup ensures that our latest code changes are always reflected in our deployment environments.

### Triggering the Workflow

The workflow is triggered by the following events:

- **Pushes and Pull Requests to the `main` branch**: Ensures that changes to our primary development branch are automatically built and deployed.
- **Pull Requests**: For code review and preview purposes, allowing us to test changes before they are merged into `main`.
- **Additional Branches**: The workflow is also designed to accommodate other branches if needed (e.g., `staging`, `production`).

### Workflow Steps

1. **Checkout Repository**: Fetches the latest code from the repository.
2. **Set up Node.js**: Configures the specified Node.js environment.
3. **Install Dependencies**: Installs the required npm dependencies.
4. **Build**: Runs the build process to generate the `./dist` directory.
5. **Configure AWS Credentials**: Sets up AWS credentials for deploying to S3 and invalidating CloudFront cache.

### Deployment to S3

- The workflow deploys the contents of `./dist` to an S3 bucket.
- For branches other than `main`, it creates a folder named after the branch under the `ORG_REPO` directory in the S3 bucket.
- For the `main` branch, if the directory `./dist/${BRANCH_NAME}/` exists, it syncs to the base URL. Otherwise, it follows the standard branch-named folder structure.

### CloudFront Cache Invalidation

- For non-`main` branches, the workflow invalidates specific paths in the CloudFront distribution.
- For the `main` branch, it invalidates the entire CloudFront cache to reflect the latest changes across the entire site.

### Pull Request Previews

- Upon opening, reopening, or synchronizing a pull request, a comment is automatically posted with a preview URL.
- This allows for immediate visual and functional verification of changes in a live environment.

### Scalability and Flexibility

- This workflow is designed to scale with the project, accommodating additional branches and environments as needed.
- It ensures a consistent and automated deployment process, reducing manual errors and improving efficiency.

---

**Note**: The workflow and deployment strategies are subject to change as the project evolves. Always refer to the latest version of this documentation for up-to-date information.

Multi-Step Form with React

Objective
The objective of this project is to build a responsive multi-step form using React.js. The form consists of three steps, first two steps requiring user input, with data validation and error handling. The form's data should persist in local storage, and users must complete the steps sequentially. Later this stored data is viewed in the third step.

Features:

Multi-Step Form Structure:
Step 1: Personal Information (Name, Email, Phone)
Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
Step 3: Confirmation (Review all entered data)

Navigation and Buttons:
Tabbed navigation is used to switch between steps.
The back button is disabled on the first step.
The next button is disabled on the last step and replaced with a submit button.

Validation:
Client-side validation is implemented to ensure all fields are filled before allowing navigation to the next step.
Appropriate error messages are displayed if fields are empty or invalid (e.g., incorrect email format).
Fields with errors are highlighted.

State Management:
Form data is managed using React's useState and useEffect hooks.
State updates reflect user inputs and form navigation.

Local Storage:
Entered data is persisted in local storage when the user navigates between steps.
Form fields are pre-filled if the user revisits the form.

Responsive Design:
The form is responsive and works well on desktop, tablet, and mobile screens.


Enhanced User Experience:
Animations or transitions between steps are included to improve the user experience.

Project Structure
The project is structured using reusable components with a clear separation of concerns. The following components are included:

Header: Displays the form's title.
Footer: Contains any footer content or links.
StepDisplay: Indicates the current step in the form.
FormContent: Renders the appropriate form fields based on the current step.
Navbar: Contains navigation buttons for moving between steps.


Assumptions and Decisions:
The form uses localStorage for data persistence, meaning data will persist between sessions as long as the user doesn't clear their browser's storage.
Basic validation is applied to ensure required fields are filled and formatted correctly before proceeding to the next step.
The form is designed to be responsive and accessible on various screen sizes, with particular attention paid to mobile usability.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

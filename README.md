
# Tuum Front-end Engineer Test Assignment


Welcome to the Front-end engineer test assignment! This project is developed for Tuum's summer internship and includes a React application that displays a dummy contact form which is visually identical to the "Contact us" form located at tuum.com 

# Description
The goal of this assignment was to familiarize with working at Tuum and using the technologies company uses on a daily basis. The submission should be developed in a manner that is "production-ready," meaning that any unused code is removed and any existing code is implemented and optimized to the best of the candidates' knowledge

# Getting Started
To run this project, ensure you have the following installed:

1. Visual Studio Code (recommended). [You can download it here](https://code.visualstudio.com/download) 
2. Node.js and npm: Make sure you have Node.js installed on your machine. [You can download it here](https://nodejs.org/en)
3. Tailwind CSS. [Installation guidance](https://tailwindcss.com/docs/installation) 

## Installation
1. Clone this repository to your local machine:
git clone [Repository Link](https://github.com/K444RU/my-tuum-front-end-assignment.git)

2. Navigate to the project directory: cd my-tuum-front-end-assignment

3. Install dependencies:
npm install

## Usage
1. Start the development server:
npm start

2. Open your browser and navigate to http://localhost:3000 to view the application.

# Implementation Choices and Technologies Used:
1. React: React was chosen for building the front-end, which is a popular choice due to its component-based architecture. Also to be familiarised with working in Tuum and using the technologies Company uses on a daily basis.
2. Tailwind CSS: Tailwind CSS is used for styling, providing utility classes that make it easy to create responsive and customizable designs without writing custom CSS. It offers a low-level utility-first approach, which can help in creating consistent UI components.
3. Form Handling: I've implemented form handling using React's state management (useState hook) for managing form state and handling user interactions such as blur and change events.
4. Form Validation: Form validation logic is implemented using both client-side and server-side validation. Client-side validation is done using JavaScript functions to check for empty fields and validate email format.
5. Accessibility: The form includes labels for inputs and appropriate ARIA attributes, improving accessibility for users who rely on assistive technologies.

# Analysis on Bundle Size and Optimization:
1. Tailwind CSS: While Tailwind CSS provides utility classes for styling, it can lead to a larger bundle size due to the inclusion of all utility classes, even if not all are used. This can bloat the CSS file size.

2. Inline Styles: Inline styles are added directly to elements in JSX, which can increase the size of the JavaScript bundle.

3. Unused Code: There may be unused code or dependencies that contribute to the bundle size but are not necessary for the functionality of the application.

# Optimizations to consider:

1. Purge Unused CSS: Tailwind CSS offers a feature called PurgeCSS, which removes unused CSS classes from the final bundle. This could have significantly reduce the size of the CSS file.
2. Code Splitting: Utilize code splitting to split the bundle into smaller chunks, loading only the necessary code for each route or component asynchronously.
3. Minification and Compression: Minify and compress both JavaScript and CSS files to reduce their size further.
4. Tree Shaking: Ensure that only the necessary code and dependencies are included in the bundle, eliminating dead code and unused dependencies.

By implementing these optimizations, you can reduce the bundle size and improve the performance of your React application. Additionally, regularly auditing and optimizing the codebase can help maintain an optimal bundle size as the application grows.








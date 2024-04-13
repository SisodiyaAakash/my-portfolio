# My Portfolio Project
Welcome to My (Aakash) Portfolio project repository! This repository contains the source code for Portfolio Site of Aakash Sisodiya.

## Project Structure
- **`assets/`:** Contains all frontend assets including JavaScript and SCSS files.
- **`assets/media/`:** Contains media files.
- **`assets/script/`:** Contains JavaScript files.
- **`assets/styling/`:** Contains SCSS files for styling.
- **`gruntfile.js`:** Contains Grunt configuration for automation of compilation and minification.
- **`index.html`:** The main HTML file for the project.
- **`.gitignore`:** Specifies intentionally untracked files to ignore.
- **`README.md`:** The documentation file you're currently reading.

## Technologies Used
### HTML, CSS, JavaScript
- **HTML (HyperText Markup Language):** HTML is the standard markup language for creating web pages and web applications. It provides the structure for web content.
- **CSS (Cascading Style Sheets):** CSS is a stylesheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of web pages, allowing for enhanced styling and design.
- **SCSS (Sassy CSS):** SCSS is a superset of CSS3's syntax, offering additional features such as variables, nesting, and mixins. It provides a more efficient and maintainable way to write CSS code, making stylesheets easier to manage and scale.
- **JavaScript:** JavaScript is a versatile programming language commonly used for adding interactivity and dynamic behavior to web pages. It enables features such as form validation, animations, event handling, and DOM manipulation, making web applications more engaging and interactive.

### Additional Libraries
- **jQuery:** A fast, small, and feature-rich JavaScript library used for simplifying the client-side scripting of HTML.
- **AOS (Animate On Scroll):** A library that allows you to animate elements as they scroll into view.

### Grunt
Grunt is used as a task runner for automating repetitive tasks in the development workflow. The `gruntfile.js` contains configuration for tasks such as compiling SCSS to CSS, minifying JavaScript files, and watching for changes.

#### Grunt Tasks:
1. **Compile SCSS to CSS:** The `sass` task compiles `main.scss` to `main.css`.
2. **Minify CSS:** The `cssmin` task minifies `main.css` to `main.min.css`.
3. **Minify JavaScript:** The `uglify` task minifies `main.js` to `main.min.js`.
4. **Watch for Changes:** The `watch` task watches for changes in SCSS and JavaScript files and triggers the respective tasks automatically.

## Guidelines for Styling
Used Icons from Material Icons, and Icon should be white by default, and the project styling will automatically adjust it depends on the theme mode

## Pelican Theme
Pelican UI is a set of guidelines and a framework for crafting web user interfaces.
Developed by Aakash in 2020 as an experimental purpose, it has since been utilized in numerous projects spreadheaded by Developar Team and Aakash Sisodiya.

### Introduction
Hey there!
Welcome to our Pelican Theme! I've selected this name to highlight the reflection of Pelican UI - a progressive ui framework

### Naming Convention
To keep things consistent, I've begun all common elements and other common code with "pelican". For example, in main.js, you'll see variables named "pelicanUi", and in _common.scss, we use "pelican-btn" for buttons. It's just a little touch to make everything look nice and tidy.

## Getting Started
1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Run Grunt tasks using the following command: `grunt watch`

## Author
Aakash Sisodiya

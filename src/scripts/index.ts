import "regenerator-runtime"; /* for async await transpile */

// Dependency
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../../node_modules/@fortawesome/fontawesome-free/js/all.js";

import "../styles/main.scss";

import nav from "./DOM/nav";

document.addEventListener("DOMContentLoaded", () => {
	nav();
});

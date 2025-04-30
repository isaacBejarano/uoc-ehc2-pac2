/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// Import all of Bootstrap's JS
// TODO: import individuals

/**
 * Write any other JavaScript below
 */

////
// Data Injection
////

const fragment = route => route.replace(".html","").split("/").pop();

// <title>
////
((title, fragment) => {
  const headTitle = document.getElementById('js-head-title');
  const route = window.location.pathname;

  headTitle.textContent = title + (fragment(route) === "index" ? "" : ` | ${fragment(route)}`);
})("Jornades Economia Circular 101", fragment);

// .nav-link
////
((fragment) => {
  const navLinks = document.getElementsByClassName('nav-link');

  for (const navLink of navLinks) {
    const route = fragment(navLink.href) === "index" ? "inici" : fragment(navLink.href);
    navLink.textContent = route;
  }
})(fragment);

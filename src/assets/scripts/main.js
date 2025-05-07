/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// Import all of Bootstrap's JS
// TODO: import individuals
import '../../../node_modules/bootstrap/js/dist/modal';
import '../../../node_modules/bootstrap/js/dist/collapse'; // accordion
// import '../../../node_modules/bootstrap/js/dist/alert';
// import '../../../node_modules/bootstrap/js/dist/carousel';
// import '../../../node_modules/bootstrap/js/dist/dropdown';
// import '../../../node_modules/bootstrap/js/dist/popover';
// import '../../../node_modules/bootstrap/js/dist/tab';
// import '../../../node_modules/bootstrap/js/dist/toast';
// import '../../../node_modules/bootstrap/js/dist/tooltip';
// import '../../../node_modules/bootstrap/js/dist/button'; // togglers

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
})("Circular Economy 101", fragment);

// .nav-link
////

((fragment) => {
  const navLinks = document.getElementsByClassName('nav-link');

  for (const navLink of navLinks) {
    const route = fragment(navLink.href) === "index" ? "home" : fragment(navLink.href);
    navLink.textContent = route;
  }
})(fragment);

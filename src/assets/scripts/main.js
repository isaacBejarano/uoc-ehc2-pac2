/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// Import all of Bootstrap's JS
import '../../../node_modules/bootstrap/js/dist/modal';
import '../../../node_modules/bootstrap/js/dist/collapse'; // accordion
// FIXME: clean unused
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
const dedasher = str => str.split('-').filter(ch => ch.length).join(" ");
const capitalize = str => str.split(" ").map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

// <title>
////

((title, fragment) => {
  const headTitle = document.getElementById('js-head-title');
  const route = window.location.pathname;  
  const routeFragment = fragment(route);
  const dedashedFragment = dedasher(routeFragment);
  const capitalizedFragment = capitalize(dedashedFragment);
  headTitle.textContent = title + (routeFragment === "index" ? "" : ` | ${capitalizedFragment}`);
})("Circular Economy 101", fragment);

// .nav-link
////

((fragment) => {
  const navLinks = document.getElementsByClassName('nav-link');

  for (const navLink of navLinks) {
    const route = fragment(navLink.href) === "index" ? "home" : dedasher(fragment(navLink.href));
    navLink.textContent = route;
  }
})(fragment);

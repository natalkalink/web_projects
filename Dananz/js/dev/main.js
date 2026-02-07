import { b as bodyLockToggle, a as bodyLockStatus } from "./common.min.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function menuInit() {
  document.addEventListener("click", function(e) {
    if (bodyLockStatus && e.target.closest("[data-fls-menu]")) {
      bodyLockToggle();
      document.documentElement.toggleAttribute("data-fls-menu-open");
    }
  });
}
document.querySelector("[data-fls-menu]") ? window.addEventListener("load", menuInit) : null;
let lastScroll = 0;
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    header.classList.add("_header-show");
  } else {
    header.classList.remove("_header-show");
  }
  if (currentScroll <= 0) {
    header.classList.remove("_header-scroll");
    return;
  }
  if (currentScroll > lastScroll && !header.classList.contains("_header-scroll")) {
    header.classList.add("_header-scroll");
  } else if (currentScroll < lastScroll && header.classList.contains("_header-scroll")) {
    header.classList.remove("_header-scroll");
  }
  lastScroll = currentScroll;
});

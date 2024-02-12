/**
 * Represents the script file for the Omnifood website.
 */

const allLinks = document.querySelectorAll("a:link");
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl = document.querySelector(".section-hero");

// set the current year in the footer
yearEl.textContent = currentYear;

// Open and close the mobile navigation
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Add smooth scrolling to all links for all browsers
// and closes the mobile navigation when a link is clicked
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});

// Sticky navigation

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);
obs.observe(sectionHeroEl);

/**
 * Checks if the flexbox gap property is supported and adds a class to the body if not supported.
 */
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();


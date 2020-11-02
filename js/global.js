
// Custom global scripts
jQuery(document).ready(
  (function ($) {
    "use strict";

    // Foundation Init
    $(document).foundation();

    // Mobile nav toggle
    $("#nav-mobile-toggle").on("click", function () {
      $("#nav-mobile").slideToggle();
    });

    const header = document.getElementById("site-header");
    // If page is loaded with an anchor link
    if (window.location.hash) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        let hash = window.location.hash;
        let id = hash.slice(1);
        let element = document.getElementById(id);

        if (element) {
          let headerHeight = header.getBoundingClientRect().height;

          window.scroll({
            behavior: "smooth",
            left: 0,
            top:
              element.getBoundingClientRect().top +
              window.scrollY -
              headerHeight * 2,
          });
        }
      }, 100);
    }

    // Simple smooth-scroll
    $('a[href*="#"]:not([role=tab])').on("click", function (event) {
      event.preventDefault();
      let headerHeight = header.getBoundingClientRect().height;
      let id = event.target.href.split("#")[1];
      let target = document.getElementById(id);

      if (
        `${this.hostname}${this.pathname}` ==
        `${window.location.hostname}${window.location.pathname}`
      ) {
        if (target) {
          window.scroll({
            behavior: "smooth",
            left: 0,
            top:
              target.getBoundingClientRect().top +
              window.scrollY -
              headerHeight * 2,
          });
        }
      } else {
        window.location.href = this.href;
      }
    });

    // Use intersection observer instead of scroll event for better-performance relative/fixed header
    const viewportObserver = document.getElementById("observer");
    const siteHeader = document.getElementById("site-header");
    if (viewportObserver) {
      let observer = new IntersectionObserver(function (entries, self) {
        if (entries[0].intersectionRatio <= 0) {
          document.body.classList.add("viewport-scrolled");
          siteHeader.classList.add("site-header--fixed");
        } else {
          document.body.classList.remove("viewport-scrolled");
          siteHeader.classList.remove("site-header--fixed");
        }
      });
      observer.observe(viewportObserver);
    }

    let navSearchButton = document.getElementById("nav-search-button");
    let navSearchForm = document.getElementById("nav-search-form");

    if (navSearchButton && navSearchForm) {
      navSearchButton.addEventListener("click", function () {
        navSearchForm.classList.add("active");
      });
    }

    objectFitImages();
  })(jQuery)
);

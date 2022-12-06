window.addEventListener("DOMContentLoaded", function () {
  const pricingAccordionContent = document.querySelector(".accordion__content"),
    pricingAccordionTitle = document.querySelector(".pricing-accordion__title"),
    serveAccordionTitle = document.querySelectorAll(".serve-accordion__title"),
    servesAccordionList = document.querySelectorAll(".serves-accordion__list"),
    collapsBtn = document.querySelector(".accordion-item__collaps"),
    searchBtn = document.querySelector(".search__btn"),
    searchInput = document.querySelector(".search__input"),
    servesTitles = document.querySelectorAll(".serves-accordion-text__title"),
    servesItem = document.querySelectorAll(".serves-accordion__item"),
    searchValue = document.querySelector("#search__value"),
    serverClose = document.querySelectorAll(".serves-accordion-tooltip__close"),
    searchImg = document.querySelector(".search-btn__img"),
    loader = document.querySelector(".loader"),
    cross = document.querySelector(".search-btn__cross"),
    searchRes = document.querySelector(".search__res");

  // Search

  const search = (input, searchTitle) => {
    let value = input.value.trim();
    searchImg.style.display = "none";
    loader.style.display = "block";
    cross.style.display = "none";
    setTimeout(() => {
      searchImg.style.display = "block";
      loader.style.display = "none";
      if (value != "") {
        searchRes.style.display = "block";
        searchImg.style.display = "none";
        cross.style.display = "block";
        searchTitle.forEach((title) => {
          if (title.innerText.toLowerCase().search(value.toLowerCase()) == -1) {
            title.parentNode.parentNode.classList.add("hide");
            servesAccordionList.forEach((accordionList) => {
              if (
                accordionList.querySelectorAll("li").length ==
                accordionList.querySelectorAll(".hide").length
              ) {
                accordionList.parentNode.style.display = "none";
              } else {
                accordionList.parentNode.style.display = "block";
              }
            });
          } else {
            title.parentNode.parentNode.classList.remove("hide");
          }
        });
      } else {
        cross.style.display = "none";
        searchRes.style.display = "none";
        searchTitle.forEach((title) => {
          title.parentNode.parentNode.classList.remove("hide");
        });
        servesAccordionList.forEach((accordionList) => {
          accordionList.parentNode.style.display = "block";
        });
      }
    }, 500);
    searchValue.innerHTML = `${value}`;
  };

  searchInput.addEventListener("input", () => {
    search(searchInput, servesTitles);
  });

  searchBtn.addEventListener("click", () => {
    if (searchInput.value != "") {
      searchInput.value = "";
      search(searchInput, servesTitles);
    }
  });

  // Accordion List Switch

  const switchAccordionList = (accordion) => {
    if (accordion.classList.contains("accordion-disable")) {
      accordion.classList.remove("accordion-disable");
    } else {
      accordion.classList.add("accordion-disable");
    }
  };

  const switchArrow = (btn, selector) => {
    if (btn.classList.contains(selector)) {
      btn.classList.remove(selector);
    } else {
      btn.classList.add(selector);
    }
  };

  collapsBtn.addEventListener("click", function () {
    switchAccordionList(pricingAccordionContent);
    switchArrow(pricingAccordionTitle, "pricing-accordion__title-disabled");
  });

  pricingAccordionTitle.addEventListener("click", function () {
    switchAccordionList(pricingAccordionContent);
    switchArrow(pricingAccordionTitle, "pricing-accordion__title-disabled");
  });
  serveAccordionTitle[0].addEventListener("click", function () {
    switchAccordionList(servesAccordionList[0]);
    switchArrow(serveAccordionTitle[0], "serve-accordion__title-disable");
  });
  serveAccordionTitle[2].addEventListener("click", function () {
    switchAccordionList(servesAccordionList[1]);
    switchArrow(
      serveAccordionTitle[2],
      "serve-accordion-orange__title-disable"
    );
  });
});

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
    servesImg = document.querySelectorAll(".serves-accordion-info__img"),
    tooltips = document.querySelectorAll(
      ".serves-accordion-info__tooltip--mobile"
    ),
    serverClose = document.querySelectorAll(".serves-accordion-tooltip__close");
  const openTooptop = (tooptip) => {
    tooptip.classList.add("serves-accordion-info__tooltip--mobile--active");
  };
  const closeTooptop = (tooptip) => {
    tooptip.classList.remove("serves-accordion-info__tooltip--mobile--active");
  };
  tooltips.forEach((tooltip) => {
    servesImg.forEach((img) => {
      img.addEventListener("click", () => {
        console.log(+img.dataset.number);
        openTooptop(tooltips[+img.dataset.number]);
      });
    });
  });
  tooltips.forEach((tooltip) => {
    serverClose.forEach((close) => {
        close.addEventListener("click", () => {
        closeTooptop(tooltip);
      });
    });
  });

    const search = (input, listSearch, elementsSearch) => {
      let value = input.value.toLowerCase().trim();
      if (value !== "") {
          listSearch.forEach((listItem) => {
            if (listItem.innerText.toLowerCase().search(value) == -1) {
                listItem.parentNode.parentNode.classList.add("hide");
            } else {
                listItem.parentNode.parentNode.classList.remove("hide");
            }
          });
      } else {
        listSearch.forEach((listItem) => {
            listItem.parentNode.parentNode.classList.remove("hide");
        });
      }value
      searchValue.innerText = input.value == "" ? "" : `«${input.value}»`;
    };

    searchInput.addEventListener("input", () => {
      search(searchInput, servesTitles, servesItem);
    });

  const switchAccordion = (accordion) => {
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
    switchAccordion(pricingAccordionContent);
    switchArrow(pricingAccordionTitle, "pricing-accordion__title-disabled");
  });

  pricingAccordionTitle.addEventListener("click", function () {
    switchAccordion(pricingAccordionContent);
    switchArrow(pricingAccordionTitle, "pricing-accordion__title-disabled");
  });
  serveAccordionTitle[0].addEventListener("click", function () {
    switchAccordion(servesAccordionList[0]);
    switchArrow(serveAccordionTitle[0], "serve-accordion__title-disable");
  });
  serveAccordionTitle[2].addEventListener("click", function () {
    switchAccordion(servesAccordionList[1]);
    switchArrow(
      serveAccordionTitle[2],
      "serve-accordion-orange__title-disable"
    );
  });
});

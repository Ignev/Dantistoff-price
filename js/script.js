window.addEventListener("DOMContentLoaded", function () {
    const pricingAccordionContent = document.querySelectorAll(".pricing-accordion__content");
    const pricingAccordionTitle = document.querySelector(".pricing-accordion__title");
    const serveAccordionTitle = document.querySelectorAll(".serve-accordion__title")
    const servesAccordionList = document.querySelectorAll(".serves-accordion__list")
    console.log(serveAccordionTitle);
    console.log(servesAccordionList);

    pricingAccordionTitle.addEventListener("click", function () {
        pricingAccordionContent.forEach(content => {
            if(content.classList.contains("accordion-disable")){
                content.classList.remove("accordion-disable")
                content.style.display = "flex"
            }
            else{
                content.classList.add("accordion-disable")
                setTimeout(() => {
                    content.style.display = "none"
                }, 400)
                
            }
        })
        if(pricingAccordionTitle.classList.contains("pricing-accordion__title-disabled")){
            pricingAccordionTitle.classList.remove("pricing-accordion__title-disabled")
        }
        else{
            pricingAccordionTitle.classList.add("pricing-accordion__title-disabled")
        }
    })
    serveAccordionTitle[0].addEventListener("click", function () {
        console.log(12);
        if(servesAccordionList[0].classList.contains("accordion-disable")){
            servesAccordionList[0].classList.remove("accordion-disable")
            servesAccordionList[0].style.display = "block"
        }
        else{
            servesAccordionList[0].classList.add("accordion-disable")
            setTimeout(() => {
                servesAccordionList[0].style.display = "none"
            }, 400)
            
        }
        if(serveAccordionTitle[0].classList.contains("serve-accordion__title-disable")){
            serveAccordionTitle[0].classList.remove("serve-accordion__title-disable")
        }
        else{
            serveAccordionTitle[0].classList.add("serve-accordion__title-disable")
        }
    })
    serveAccordionTitle[2].addEventListener("click", function () {
        console.log(12);
        if(servesAccordionList[1].classList.contains("accordion-disable")){
            servesAccordionList[1].classList.remove("accordion-disable")
            servesAccordionList[1].style.display = "block"
        }
        else{
            servesAccordionList[1].classList.add("accordion-disable")
            setTimeout(() => {
                servesAccordionList[1].style.display = "none"
            }, 400)
        }
        if(serveAccordionTitle[2].classList.contains("serve-accordion-orange__title-disable")){
            serveAccordionTitle[2].classList.remove("serve-accordion-orange__title-disable")
        }
        else{
            serveAccordionTitle[2].classList.add("serve-accordion-orange__title-disable")
        }
    })



})
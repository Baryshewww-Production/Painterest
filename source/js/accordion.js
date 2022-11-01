const accordionButtons = document.querySelectorAll(".accordion__item");
const accordionTexts = document.querySelectorAll(".accordion__description");

for (const accordionButton of accordionButtons) {
  accordionButton.onclick = function () {
    if (accordionButton.classList.contains("accordion__item--collapse")) {
      accordionButton.classList.remove('accordion__item--collapse');
      console.log('Я закрыт');
    } else {
      accordionButton.classList.add('accordion__item--collapse');
      console.log('Я открыт');
    }
  }
}

import './_components.js';

// удаляем ненужные svg в кнопках
window.onload = function () {
  let svgElements = document.querySelectorAll('.button svg use');

  svgElements.forEach(function (svgElement) {
    let xlinkHrefValue = svgElement.getAttribute('xlink:href');

    if (xlinkHrefValue === "../../../img/sprite.svg#@icon") {
      svgElement.parentNode.style.display = 'none';
    }
  });
}
// Получаем все элементы
const selectAll = document.querySelectorAll('.__select');

selectAll.forEach(selectSingle => {
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

  // Переключаем меню
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Закрываем при клике на опцию
  selectSingle_labels.forEach(label => {
    label.addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  });
});


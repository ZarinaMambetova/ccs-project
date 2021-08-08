// Вывод текстового значения слайдера придвижении бегунка:
var slider = document.getElementById('Percents');
var output = document.getElementById('showPercents');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

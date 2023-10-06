const form = document.querySelector('.amount__form');
const select = form.querySelector('#material-select');

const totalAreaSurfaceInput = form.querySelector('#square-input');
const lengthSurfaceInput = form.querySelector('#length-input');
const heightSurfaceInput = form.querySelector('#height-input');

const materialSurfaceOutput = form.querySelector('.form__result-material');
const areaSurfaceOutput = form.querySelector('.form__result-area');
const weightPaintOutput = form.querySelector('.form__weight-number');
const pricePaintOutput = form.querySelector('.form__price-number');

const UNVALID_SYMBOLS = /[^0-9]/g;
const MARKER_FOR_LONG_STRING = 'Черный металл';

const Default = {
  MATERIAL: 'оцинкованная сталь',
  VALUE: '250',
  WEIGHT: 10,
};

const masterObject = {
  value: Default.VALUE,
  text: Default.MATERIAL,
};

// Форма по умолчанию заполнена дефолтными значениями, для наглядности
materialSurfaceOutput.textContent = Default.MATERIAL;
totalAreaSurfaceInput.value = Default.WEIGHT;
areaSurfaceOutput.textContent = totalAreaSurfaceInput.value;
getCalculatorResult(masterObject);

// Функция, которая вернет true если выбранный селект содержит строчку-маркер
const isDescriptionLong = (string) => string.includes(MARKER_FOR_LONG_STRING);

// Функция для получения данных о материале, который выбрали для покраски
// и записывает их в МастерОбъект
const getInfoSelectedMaterial = ({value, text}) => {
  value = select.options[select.selectedIndex].value;
  text = select.options[select.selectedIndex].text;
  materialSurfaceOutput.textContent = text;
  masterObject.value = value;

  // Проверка на длинное слово
  if (isDescriptionLong(text)) {
    materialSurfaceOutput.textContent = MARKER_FOR_LONG_STRING;
  }
  getCalculatorResult(masterObject);
};


// Функция-калькулятор. Выполняет всю логику подсчета
function getCalculatorResult (masterObj) {
  let multiplier;
  let sumWeight;
  let fieldA = lengthSurfaceInput.value;
  let fieldB = heightSurfaceInput.value;

  switch (masterObj.value) {
    case '250':
      multiplier = 0.25;
      break;
    case '300':
      multiplier = 0.3;
      break;
    case '350':
      multiplier = 0.35;
      break;
    case '400':
      multiplier = 0.4;
      break;
    case '450':
      multiplier = 0.45;
      break;
    default:
      multiplier = 0;
      break;
  }

  if (fieldA && fieldB) {
    totalAreaSurfaceInput.value = fieldA * fieldB;
  }

  areaSurfaceOutput.textContent = totalAreaSurfaceInput.value;
  sumWeight = Math.ceil(totalAreaSurfaceInput.value * multiplier);
  weightPaintOutput.textContent = sumWeight;
  pricePaintOutput.textContent = +sumWeight * 500;
}

function validateInputs() {
  this.value = this.value.replace(UNVALID_SYMBOLS, '');
  // areaSurfaceOutput.textContent = totalAreaSurfaceInput.value;
  getCalculatorResult(masterObject);
}

// Функция блокирования/разблокирования элемента
const toggleElementDisabled = ( element, isDisabled) => {
  element.disabled = isDisabled;
};

// Функция для обработчика события focus у поля с площадью
const onTotalAreaFocus = () => {
  // totalAreaSurfaceInput.focused = true;
  toggleElementDisabled(lengthSurfaceInput, true);
  toggleElementDisabled(heightSurfaceInput, true);
  lengthSurfaceInput.value = '';
  heightSurfaceInput.value = '';
};

// Функция для обработчика события blur у поля с площадью
const onTotalAreaBlur = () => {
  // totalAreaSurfaceInput.focused = false;
  toggleElementDisabled(lengthSurfaceInput, false);
  toggleElementDisabled(heightSurfaceInput, false);
};



totalAreaSurfaceInput.addEventListener('input', validateInputs);
totalAreaSurfaceInput.addEventListener('focus', onTotalAreaFocus);
totalAreaSurfaceInput.addEventListener('blur', onTotalAreaBlur);

lengthSurfaceInput.addEventListener('input', validateInputs);
heightSurfaceInput.addEventListener('input', validateInputs);

select.addEventListener('change', getInfoSelectedMaterial);

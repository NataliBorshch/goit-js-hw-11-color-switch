const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};
let timerId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor(array) {
  const max = array.length - 1;
  let color = array[randomIntegerFromInterval(0, max)];
  refs.body.style.backgroundColor = color;
  return color;
}

refs.startBtn.addEventListener('click', event => {
  timerId = setInterval(randomColor, 1000, colors);
  refs.startBtn.disabled = 'disabled';
  refs.startBtn.classList.add('not-activ');
});

refs.stopBtn.addEventListener('click', event => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.startBtn.classList.remove('not-activ');
});

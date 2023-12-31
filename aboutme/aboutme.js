const heading = document.getElementById('htmlMain');
const image = document.getElementById('img01');
const hamburgerBox = document.getElementById('hamburgerBox');

image.classList.toggle('imgclass');

const toggleButton = () => {
  hamburgerBox.classList.toggle('hamburger-box');
};

const enableDMode = () => {
  heading.classList.add('drkmode');
  image.classList.add('imgclass');
  window.localStorage.setItem('darkmode', 'enabled');
};

const disableDMode = () => {
  heading.classList.remove('drkmode');
  image.classList.remove('imgclass');
  localStorage.setItem('darkmode', 'disabled');
};

const update = () => {
  const key = localStorage.getItem('darkmode');
  if (key === 'enabled') {
    enableDMode();
  } else {
    disableDMode();
  };
};

const buttonToClick = () => {
  const key = localStorage.getItem('darkmode');
  if (key === 'disabled') {
    enableDMode();
  } else {
    disableDMode();
  };
};

update();
toggleButton();
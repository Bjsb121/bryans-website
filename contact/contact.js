const heading = document.getElementById('htmlMain');
const hamburgerBox = document.getElementById('hamburgerBox');

const toggleButton = () => {
  hamburgerBox.classList.toggle('hamburger-box');
};

const enableDMode = () => {
  heading.classList.add('drkmode');
  window.localStorage.setItem('darkmode', 'enabled');
};

const disableDMode = () => {
  heading.classList.remove('drkmode');
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
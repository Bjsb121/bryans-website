const heading = document.getElementById('htmlMain');
const hamburgerBox = document.getElementById('hamburgerBox');
const viewPort = document.getElementById('view-port');

const buttonLoad = () => {
  viewPort.dismissPoster();
  window.localStorage.setItem('posterDismissed', 'true');
};

window.onload = function () {
  const isPosterDismissed = localStorage.getItem('posterDismissed') === 'true';

  if (isPosterDismissed) {
    viewPort.dismissPoster();
  } else {
    viewPort.showPoster();
  }
};

viewPort.classList.toggle('dark');

const toggleButton = () => {
  hamburgerBox.classList.toggle('hamburger-box');
};

const enableDMode = () => {
  heading.classList.add('drkmode');
  viewPort.classList.add('dark');
  localStorage.setItem('darkmode', 'enabled');
};

const disableDMode = () => {
  heading.classList.remove('drkmode');
  viewPort.classList.remove('dark');
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
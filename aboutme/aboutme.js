const heading = document.getElementById('htmlMain');
const image = document.getElementById('img01');

heading.classList.toggle('drkmode');

const toggleFunc = () => {
  heading.classList.toggle('drkmode');
};

image.classList.toggle('imgclass');

const toggleImg = () => {
  image.classList.toggle('imgclass');
};
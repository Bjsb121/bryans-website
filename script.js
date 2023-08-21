const heading = document.getElementById('htmlMain');

heading.classList.toggle('drkmode');

const toggleFunc = () => {
  heading.classList.toggle('drkmode');
};



// const enableDMode = () => {
  //turn on CSS
  //set local storage to 'enabled'
// };

// const disableDMode = () => {
  //turn off CSS
  //set local storage to 'disabled'
// };

// const buttonToClick = () => {
  //get local storage key
  //check if key is 'enabled' or 'disabled'
  //if key is 'enabled,' turn on CSS
  // else if key is 'disabled', turn off CSS
// };

//run buttonToClick()  on page load in order to know what last checked option was ?
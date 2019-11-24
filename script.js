const checkMark = '\u2713';

const lowerCaseRegex = new RegExp('^(?=.*[a-z])(?=.{1,})');
const upperCaseRegex = new RegExp('^(?=.*[A-Z])(?=.{1,})');
const containsNumberRegex = new RegExp('^(?=.*[0-9])(?=.{1,})')
const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])(?=.{1,})');
const eightCharactersRegex = new RegExp('^(?=.{8,})');

const checkValidity = () => {
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;

  const fulfilled = [];
  const unfulfilled = [];
  
  lowerCaseRegex.test(password) ?
    fulfilled.push(document.getElementById('lowerCaseRequirement')) :
    unfulfilled.push(document.getElementById('lowerCaseRequirement'));

  upperCaseRegex.test(password) ?
    fulfilled.push(document.getElementById('upperCaseRequirement')) :
    unfulfilled.push(document.getElementById('upperCaseRequirement'));

  containsNumberRegex.test(password) ?
    fulfilled.push(document.getElementById('numberRequirement')) :
    unfulfilled.push(document.getElementById('numberRequirement'));

  specialCharacterRegex.test(password) ?
    fulfilled.push(document.getElementById('specialCharacterRequirement')) :
    unfulfilled.push(document.getElementById('specialCharacterRequirement'));

  eightCharactersRegex.test(password) ?
    fulfilled.push(document.getElementById('lengthRequirement')) :
    unfulfilled.push(document.getElementById('lengthRequirement'));

  password && password === confirmPassword ?
    fulfilled.push(document.getElementById('passwordsMatchRequirement')) :
    unfulfilled.push(document.getElementById('passwordsMatchRequirement'));

  fulfilled.forEach(el => {
    el.classList.remove('unfulfilled');
    el.classList.add('fulfilled');
  });
  unfulfilled.forEach(el => {
    el.classList.remove('fulfilled');
    el.classList.add('unfulfilled');
  });

  if(fulfilled.length === 6)
    document.getElementById('submitBtn').disabled = false;
  else
    document.getElementById('submitBtn').disabled = true;

};

Array.from(document.getElementsByClassName('input-listener')).forEach(input => {
  input.addEventListener('keyup', checkValidity)
});
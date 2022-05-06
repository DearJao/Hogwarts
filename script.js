const recoverButton1 = document.getElementById('button-login');
const recoverInputEmail = document.querySelector('#input-email2');
const recoverInputPass = document.querySelector('#input-pass');
const recoverButton2 = document.getElementById('submit-btn');
const recoverCheck = document.getElementById('agreement');
recoverButton2.disabled = true;

function login() {
  const valueEmail = recoverInputEmail.value;
  const valuePass = recoverInputPass.value;
  if (valueEmail === 'tryber@teste.com' && valuePass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

recoverButton1.addEventListener('click', login);

function checkBox() {
  if (recoverCheck.checked) {
    recoverButton2.disabled = false;
  } else {
    recoverButton2.disabled = true;
  }
}

recoverCheck.addEventListener('click', checkBox);

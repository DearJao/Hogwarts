const recoverButton1 = document.getElementById('button-login');
const recoverInputEmail = document.querySelector('#input-email');
const recoverInputPass = document.querySelector('#input-pass');

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

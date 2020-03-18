const login = document.getElementById('button-login');
const register = document.getElementById('facebook-register');

login.addEventListener('click', function () {
  const nomeEmail = document.getElementById('user-email-phone');
  alert(nomeEmail.value);
});

register.addEventListener('click', function () {
  const nomeCad = document.getElementById('nome');
  const sobrenomeCad = document.getElementById('sobreNome');
  const celularEmail = document.getElementById('celularEmail');
  const dataNascimento = document.getElementById('data');
  const genero = document.getElementsByClassName('genero');
  let generoAchado = '';

  for (let i = 0; i < genero.length; i += 1) {
    if (genero[i].checked) {
      generoAchado = genero[i].value;
    }
  }

  alert(`${nomeCad.value}\n${sobrenomeCad.value}\n${celularEmail.value}\n${dataNascimento.value}\n${generoAchado}`);
});

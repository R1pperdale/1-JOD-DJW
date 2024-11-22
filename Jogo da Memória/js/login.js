const input = document.querySelector('.login__input'); /*Seleciona o elemanto de entrada, no caso ".login__input"*/
const button = document.querySelector('.login__button'); /*Seleciona o botão com a classe ".login__button"*/
const form = document.querySelector('.login-form'); /*Seleciona o formulario de login com classe ".login-form"*/

const validateInput = ({ target }) => { /*Checa o comprimento do texto no campo de entrada*/
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => { /*Função que lida com o envio do nome do jogador*/
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput); /*Verifica se o usuario digitou algo no campo de texto*/
form.addEventListener('submit', handleSubmit); /*Quando o jogador clicar no botão ele armazena o nome do jogador*/
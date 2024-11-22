const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [ /*Imagem das cartas no jogo*/
  'furia',
  'imperial',
  'pain',
  'legacy',
  'spirit',
  'navi',
  'g2',
  'faze',
  'virtuspro',
  'mouz',
  'cloud9',
  'koi',
  'vitality',
  'saw',
  'amkal',
  'apeks',
  'ecstatic',
  'ence',
  '9pandas',
  'themongolz',
  'heroic',
  'complexity',
  'eternalfire',
  'lynnvision',
];

const createElement = (tag, className) => { /*cria um elemento*/
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = ''; /*Armazena a primeira carta*/
let secondCard = ''; 

const checkEndGame = () => { /*Verifica se todas as cartas acabaram e exibe uma mensagem para o jogador*/
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 48) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
  }
}

const checkCards = () => { /*Compara e vê se as duas cartas selecionadas são iguais*/
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => { /*Revela a carta selecionada*/

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => { /*Cria dois elementos pra cada carta, frente, verso e revela a carta*/

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => { /*Duplica as cartas pra terem pares*/
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => { /*Inicia o relógio*/

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => { /*Quando a página é recarregada tudo reinicia*/
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}
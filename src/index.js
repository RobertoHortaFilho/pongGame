import Game from './Game.js';

console.log('running');

const game = new Game();

const getOpt = () => {
  const powerUpInput = document.querySelector('#powerup')
  const powerUp = powerUpInput.checked;
  return { powerUp }
}

const btn = document.querySelector('.resetbtn')
btn.onclick = () => {
  const opt = getOpt();
  game.reset(opt)
  document.querySelector('.p1').innerHTML = '0'
  document.querySelector('.p2').innerHTML = '0'
  btn.disabled = true;
}

const btnStart = document.querySelector('.start')
btnStart.onclick = () => {
  const opt = getOpt();
  game.init(opt)
  game.start()
  document.querySelector('.p1').innerHTML = '0'
  document.querySelector('.p2').innerHTML = '0'
  btnStart.disabled = true;
}

window.game = game;
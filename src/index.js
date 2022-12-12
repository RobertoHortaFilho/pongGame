import Player, { keys } from './player/player.js';
import ctx from './context2d.js';
import setShortcuts from './setShortcuts.js';


console.log('running');

const FPS = 30;
const PLAYER1 = new Player({ x: 10, y:10 }, 'green');
const PLAYER2 = new Player({ x: 820, y:10 }, 'blue');
setShortcuts(PLAYER1, keys.player1);
setShortcuts(PLAYER2, keys.player2);


const build = () => {
  PLAYER1.move()
  PLAYER2.move()
  requestAnimationFrame(build);
}
requestAnimationFrame(build);


setInterval(() => {
  ctx.clearRect(0,0,850,500)
  PLAYER1.render()
  PLAYER2.render()
}, 1000/FPS);
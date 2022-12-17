import Player, { keys } from './objs/player.obj.js';
import Ball from './objs/ball.obj.js';
import ctx from './context2d.js';
import setShortcuts from './setShortcuts.js';

export default class Game {
  p = [];
  ball = { value: null, set : () => {this.ball.value = new Ball({p1: this.p[0], p2: this.p[1]}, this.ball)}};
  _score = { p1: 0, p2: 0 };
  build = null;
  draw = null;

  constructor () {
    window.addEventListener('keydown', ({key}) => {
      if (key == 'r') {
        this.runBall();
      }
    })
  }

  init () {
    this.p[0] = new Player({ x: 10, y:10 }, 'green');
    this.p[1] = new Player({ x: 820, y:10 }, 'blue');
    setShortcuts(this.p[0], keys.player1);
    setShortcuts(this.p[1], keys.player2);
    this.ball.set();
  }


  runBall () {
    this.ball.value.start();
  }

  countPoint(p) {
    switch(p) {
      case 1: 
        break;
      case -1:
        break;
      default:
        break;
    }
    this.ball.set();
  }

  start() {
    // this.runBall();
    this.build = () => {
      this.p[0].move()
      this.p[1].move()
      this.ball.value.move();
      requestAnimationFrame(this.build);
    }
    requestAnimationFrame(this.build);

    const FPS = 30;
    this.draw = setInterval(() => {
      ctx.clearRect(0,0,850,500)
      this.p[0].render();
      this.p[1].render();
      this.ball.value.render();
    }, 1000/FPS);
  }

  resetAll() {
    this.p = [];
    this.ball = null;
    this.score = { p1: 0, p2: 0 };

  }
}
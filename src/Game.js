import Player, { keys } from './objs/player.obj.js';
import Ball from './objs/ball.obj.js';
import ctx from './context2d.js';
import setShortcuts from './setShortcuts.js';
import PowerUp from './PowerUps.script.js';

export default class Game {
  p = [];
  ball = { value: null, set : (pl) => {
    this.ball.value = new Ball({p1: this.p[0], p2: this.p[1]}, this.ball)
    this.countPoint(pl)
  }};
  _score = { p1: 0, p2: 0 };
  build = null;
  draw = null;
  title = document.querySelector('.title')
  total = 3;
  p1Document = document.querySelector('.p1')
  p2Document = document.querySelector('.p2')
  opts = { powerUp: false }
  timerPw = null;

  runOptions () {
    if(this.opts.powerUp && this.timerPw === null) {
      this.timerPw = new PowerUp({p1: this.p[0], p2: this.p[1], ball: this.ball.value })
    }
  }

  init (opts) {
    this.opts = opts;
    this.p[0] = new Player({ x: 10, y:10 }, 'green');
    this.p[1] = new Player({ x: 820, y:10 }, 'blue');
    setShortcuts(this.p[0], keys.player1);
    setShortcuts(this.p[1], keys.player2);
    this.ball.set();
  }

  timerBall() {
    setTimeout(() => {this.title.innerHTML = '3'}, 1000);
    setTimeout(() => {this.title.innerHTML = '2'}, 2000);
    setTimeout(() => {this.title.innerHTML = '1'}, 3000);
    setTimeout(() => {this.title.innerHTML = 'Pong Game'; this.runBall()}, 4000);
  }

  runBall () {
    this.ball.value.start();
    this.runOptions();
  }

  countPoint(pl) {
    switch(pl) {
      case 1: 
        this._score.p1 += 1
        break;
        case -1:
        this._score.p2 += 1
        break;
      default:
        break;
    }
    this.p1Document.innerHTML = this._score.p1
    this.p2Document.innerHTML = this._score.p2

    if (this._score.p1 >= this.total || this._score.p2 >= this.total) {
      this.winner()
      return;
    }
    this.timerBall();
  }

  winner() {
    this._score.p1 === this.total ? this.title.innerHTML = 'Player 1 wins' : this.title.innerHTML = 'Player 2 wins'
    document.querySelector('.resetbtn').disabled = false;
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

  reset(opts) {
    this.opts = opts;
    this._score = { p1: 0, p2: 0 };
    console.log
    this.ball.set();
    this.timerBall();
  }
}
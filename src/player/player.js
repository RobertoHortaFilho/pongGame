import ctx from "../context2d.js";
export default class Player {
  pos = { x: 0, y: 0 }
  size = { w: 20, h: 150 }
  dir = 0;
  speed = 5;
  color;
  constructor(pos, color) {
    this.pos = pos;
    this.color = color || 'red'
  }

  move () {
    switch (this.dir) {
      case 1: 
        this.pos.y + this.speed + this.size.h <= 500 ? this.pos.y += (this.dir * this.speed) : this.dir = 0 
        break;
      case -1: 
        this.pos.y - this.speed > 0 ? this.pos.y += (this.dir * this.speed) : this.dir = 0 
        break;
      default:
        break;
    }
    this.pos.y += this.dir;
  }

  up () {
    this.dir = -1;  
  }

  down () {
    this.dir = 1;
  }

  render () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}


export const keys = {
  player1: {
    up: 'w',
    down: 's',
  },
  player2: {
    up: 'ArrowUp',
    down: 'ArrowDown',
  }
}

import ctx from "../context2d.js";

export default class Ball {
  pos = { x: 425, y: 250 };
  size = { w: 20, h: 20 };
  deg = 45;
  speed= 0;
  hspeed = 0;
  vspeed = 0;
  color = 'black';
  start () {
    this.speed = 5;
    this.setVHspeed();
  }

  setVHspeed() {
    this.hspeed = Math.cos(this.deg * (Math.PI / 180)) * this.speed
    this.vspeed = Math.sin(this.deg * (Math.PI / 180)) * this.speed 
  }

  move() {
    console.log(this.hspeed, this.vspeed)
    console.log(this.deg)
    this.pos.x += this.hspeed;
    this.pos.y += this.vspeed;
  }

  render() {
    ctx.fillStyle = this.color;
    const {x, y} = this.pos;
    const {w, h} = this.size;
    ctx.fillRect(x, y, w, h);
  }
}
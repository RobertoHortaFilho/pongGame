import ctx from "../context2d.js";
// 850
// 500

const WIDTH = 850
const HEIGHT = 500

export default class Ball {
  pos = { x: 425, y: 250 };
  size = { w: 20, h: 20 };
  deg = 45;
  speed= 0;
  hspeed = 0;
  vspeed = 0;
  speedScale = .3;
  color = 'black';
  p1 = null;
  p2 = null;
  ball;

  constructor({p1, p2}, ball) {
    this.p1 = p1;
    this.p2 = p2;
    this.ball = ball
  }

  start () {
    this.speed = 5;
    this.setVHspeed();
  }

  setVHspeed() {
    this.hspeed = Math.cos(this.deg * (Math.PI / 180)) * this.speed
    this.vspeed = Math.sin(this.deg * (Math.PI / 180)) * this.speed 
  }

  collisionVertical() {
    const direcao = Math.sign(this.vspeed)
    if(direcao == 1 && this.pos.y + this.vspeed + this.size.h >= HEIGHT ) {
      this.vspeed *= -1 
    }
    if(direcao == -1 && this.pos.y - this.vspeed <= 0 ) {
      this.vspeed *= -1 
    }
  }

  collisionHorizontal() {
    // 820 30
    const p1Pos = 30;
    const p2Pos = 820;
    const direcao = Math.sign(this.hspeed)
    if(direcao == 1 && this.pos.x + this.hspeed + this.size.w >= p2Pos && this.pos.x + this.speed < p2Pos ) {
      if ( this.pos.y > this.p2.pos.y && this.pos.y < this.p2.pos.y + this.p2.size.h)
      this.hspeed *= -1
      this.hspeed -= this.speedScale
      this.vspeed = (Math.sign(this.vspeed) * this.speedScale) + this.vspeed
    }
    if(direcao == -1 && this.pos.x - this.hspeed <= p1Pos && this.pos.x + this.speed +this.size.w >p1Pos ) {
      if ( this.pos.y > this.p1.pos.y && this.pos.y < this.p1.pos.y + this.p2.size.h)
      this.hspeed *= -1
      this.hspeed += this.speedScale
      this.vspeed = (Math.sign(this.vspeed) * this.speedScale) + this.vspeed
    }
    if (this.pos.x > 850 || this.pos.x < -10) {
      this.ball.set(direcao);
    }
  }

  move() {
    this.collisionVertical();
    this.collisionHorizontal();
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
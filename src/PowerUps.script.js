export default class PowerUp{
  timer
  rollback = []
  intervals = []
  objs
  player = 0
  constructor ({ p1, p2, ball }) {
    this.objs = { p1, p2, ball };
    this.timer = setInterval(() => {
      // run pw 
      // setTimeout, add in rollback
      const player = this.choosePlayer()
      this.addSize(player)
    }, 10000)
  }

  choosePlayer () {
    this.player = this.player === 0 ? 1 : 0
    return this.player === 0? this.objs.p1 : this.objs.p2;
  }

  addSize (p) {
    p.size.h += 50;
    this.intervals.push(setTimeout(() => { this.rmSize(p) }, 8000));
    this.rollback.push(() => this.rmSize(p));
  }

  rmSize (p) {
    p.size.h -= 50
    this.rollback.shift();
    console.log(this.rollback)
  }

  runRollback () {
    for (const key in this.rollback) {
      if (Object.hasOwnProperty.call(this.rollback, key)) {
        const element = rollback[key];
        element();
      }
    }

    for (const key in this.intervals) {
      if (Object.hasOwnProperty.call(this.intervals, key)) {
        const element = rollback[key];
        clearTimeout(element);
      }
    }
  }
}
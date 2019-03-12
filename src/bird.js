import * as pixi from 'pixi.js';

export default class Bird {
  constructor({ x, y, radius }) {
    this.bird = new pixi.Graphics();
    this.bird.lineStyle(0);
    this.bird.beginFill(0xDE3249, 1);
    this.bird.drawCircle(x, y, radius);
    this.bird.endFill();

    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  }

  move(x, y) {
    this.bird.x = x;
    this.bird.y = y;
  }

  up() {
    this.velocity += this.lift;
  }
}

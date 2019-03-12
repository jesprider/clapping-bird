import * as pixi from 'pixi.js';

export default class Bird {
  constructor({ x, y, radius }) {
    const bird = new pixi.Graphics();
    bird.lineStyle(0);
    bird.beginFill(0xDE3249, 1);
    bird.drawCircle(x, y, radius);
    bird.endFill();

    this.bird = bird;

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

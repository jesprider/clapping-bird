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

    // TODO: move out
    this.height = 600;
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.bird.y += this.velocity;

    if (this.bird.y > this.height) {
      this.bird.y = this.height;
      this.velocity = 0;
    }

    if (this.bird.y < 0) {
      this.bird.y = 0;
      this.velocity = 0;
    }
  }
}
import * as pixi from 'pixi.js';
import getMedia from './mic';
import Bird from './bird';

window.onload = () => {
  const app = new pixi.Application();
  document.body.appendChild(app.view);

  const bird = new Bird(25, 25, 25);
  app.stage.addChild(bird.bird);

  app.ticker.add((delta) => {
  });

  getMedia((data) => {
    // console.log(data);
  });
};

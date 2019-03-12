import * as pixi from 'pixi.js';
import getMedia from './mic';
import Bird from './bird';
import Pipe from './pipe';

window.onload = () => {
  const app = new pixi.Application();
  document.body.appendChild(app.view);

  const bird = new Bird({ x: 25, y: 25, radius: 25 });
  const pipe = new Pipe({ canvasWidth: app.view.width, canvasHeight: app.view.height });

  app.stage.addChild(bird.bird);
  app.stage.addChild(pipe.pipe);

  let vol = 0;

  app.ticker.add((delta) => {
    if (vol > 10) {
      bird.up();
    }
    bird.update();
    pipe.update();
  });


  getMedia((data) => {
    vol = data;
  });
};

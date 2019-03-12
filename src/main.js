import * as pixi from 'pixi.js';
import getMedia from './mic';
import Bird from './bird';
import Pipe from './pipe';

window.onload = () => {
  const app = new pixi.Application();
  document.body.appendChild(app.view);

  const bird = new Bird({ x: 25, y: 25, radius: 25 });
  const pipes = [];
  let vol = 0;

  app.stage.addChild(bird.bird);

  setInterval(() => {
    const pipe = new Pipe({ canvasWidth: app.view.width, canvasHeight: app.view.height });
    pipes.push(pipe);
    app.stage.addChild(pipe.pipe);
  }, 2500);


  app.ticker.add((delta) => {
    if (vol > 20) {
      bird.up();
    }
    bird.update();
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      if (pipes[i].isOffscreen) {
        app.stage.removeChild(pipes[i].pipe);
        pipes.splice(i, 1);
      }
    }
  });


  getMedia((data) => {
    vol = data;
  });
};

import * as pixi from 'pixi.js';
import getMedia from './mic';
import Bird from './bird';
import Pipe from './pipe';

window.onload = () => {
  //
  // App creation
  const app = new pixi.Application();
  document.body.appendChild(app.view);

  //
  // Sliders handling
  const thresholdTopSlider = document.getElementById('thresholdTop');
  const thresholdBottomSlider = document.getElementById('thresholdBottom');

  let thresholdTop = thresholdTopSlider.valueAsNumber;
  let thresholdBottom = thresholdBottomSlider.valueAsNumber;
  let clapping = false;

  thresholdTopSlider.addEventListener('input', (event) => {
    thresholdTop = event.target.valueAsNumber;
  });

  thresholdBottomSlider.addEventListener('input', (event) => {
    thresholdBottom = event.target.valueAsNumber;
  });


  //
  // Bird creation
  const bird = new Bird({
    x: 25, y: 25, radius: 25, canvasHeight: app.view.height,
  });
  app.stage.addChild(bird.bird);

  //
  // Pipes
  const pipes = [];
  setInterval(() => {
    const pipe = new Pipe({ canvasWidth: app.view.width, canvasHeight: app.view.height });
    pipes.push(pipe);
    app.stage.addChild(pipe.pipe);
  }, 2500);

  //
  // Volume handling
  let vol = 0;
  getMedia((data) => {
    vol = data;
  });

  //
  // App update callback
  app.ticker.add(() => {
    console.log(vol)
    if (vol > thresholdTop && !clapping) {
      bird.up();
      clapping = true;
    }

    if (vol < thresholdBottom) {
      clapping = false;
    }

    bird.update();

    for (let i = pipes.length - 1; i >= 0; i -= 1) {
      pipes[i].update();

      if (pipes[i].isOffscreen) {
        app.stage.removeChild(pipes[i].pipe);
        pipes.splice(i, 1);
      }
    }
  });


};

import * as pixi from 'pixi.js';
import getMedia from './mic.js';

window.onload = () => {
  const app = new pixi.Application();
  document.body.appendChild(app.view);


  getMedia((data) => {
    console.log(data);
  });
};

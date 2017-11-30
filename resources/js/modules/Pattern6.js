import $ from 'jquery';
import Colors from './Colors';
import _ from 'underscore';
import colr from 'colr';
import SimplexNoise from 'simplex-noise';

const simplex = new SimplexNoise(Math.random);

export default class Pattern2 {
  constructor(context) {
    this.context = context;
    this.initialize();

    this.video = document.querySelector('video');

    this.canvas2 = document.createElement('canvas');
    this.canvas2.width = 750;
    this.canvas2.height = 750;
    this.context2 = this.canvas2.getContext('2d');

    this.optionKey = ['bg', 'minH', 'maxH', 'minS', 'maxS', 'minB', 'maxB', 'param1', 'param2', 'param3', 'param4', 'param5', 'param6'];
  }

  initialize() {

  }

  setOption(option) {
    this.option = option;
    Array.from(this.optionKey, (key) => {
      this[key] = option[key];
    });
  }

  reset() {
    this.video.pause();
  }


  draw() {

    this.video.play();
    this.video.style.display = 'none';

    const context = this.context;
    const color = colr.fromHsv(_.random(this.minH, this.maxH), _.random(this.minS, this.maxS), _.random(this.minB, this.maxB)).toRgbObject();

    this.x = 0;
    this.y = 0;

    let t = 0;

    const interval = this.param1 * 50;

    clearInterval(this.timer);
    this.timer = setInterval(() => {

      t += 0.1 * this.param5;

      context.globalCompositeOperation = 'source-over';
      context.clearRect(0, 0, 750, 750);
      context.fillStyle = this.bg;
      context.fillRect(this.x, this.y, 750, 750);
      context.globalCompositeOperation = this.blending;
      
      this.context2.drawImage(this.video, 0, 0, 750, 750);
      const image = this.context2.getImageData(0, 0, 750, 750);

      for(let i = 0; i < image.data.length; i += 4) {
        image.data[i] = image.data[i];
        image.data[i+1] = image.data[i+1];
        image.data[i+2] = image.data[i+2];
        image.data[i+3] = image.data[i+3];
      }

      context.putImageData(image, 0, 0);
    });
  }
}

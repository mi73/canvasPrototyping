import $ from 'jquery';
import Colors from './Colors';
import _ from 'underscore';
import colr from 'colr';
import SimplexNoise from 'simplex-noise';
import * as PIXI from 'pixi.js';

const simplex = new SimplexNoise(Math.random);

console.log(PIXI);

/**
 * http://pixijs.io/pixi-filters/tools/demo/
 */

PIXI.filters.TvFilter = class TvFilter extends PIXI.Filter {
  constructor() {
    const fragmentSrc = `
      precision mediump float;
      varying vec2 vTextureCoord;
      uniform sampler2D uSampler;
      varying vec4 vColor;

      uniform float time;

      void main(void) {
        vec2 cord = vTextureCoord;
        vec4 color = texture2D(uSampler, cord);
        float scanLineInterval = 1300.0;
        float scanLineSpeed = time * 5.0;
        float scanLine = max(1.0, sin(vTextureCoord.y * scanLineInterval + scanLineSpeed) * 2.0) * 1.5;
        color.rgb *= scanLine;
        gl_FragColor = color;
      }
    `;

    super(
      null, fragmentSrc, {}
    );
  }
};

export default class Pattern6 {
  constructor(context, canvas) {
    this.context = context;
    this.canvas = canvas;
    this.video = document.createElement("video");

    this.initialize();

    this.app = new PIXI.Application(750, 750, {transparent: true});
    document.querySelector('.box').appendChild(this.app.view);

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
    clearInterval(this.timer);
    this.video.pause();
    this.canvas.style.display = 'block';
    this.app.view.style.display = 'none';
  }


  draw() {

    this.canvas.style.display = 'none';
    this.app.view.style.display = 'block';

    this.video.preload = "auto";
    this.video.loop = true;              // enable looping
    this.video.src = '/loop_sp.mp4';

    this.tvFilter = new PIXI.filters.TvFilter();
    this.tvFilter.uniforms.time = 1.0;

    this.blurFilter = new PIXI.filters.BlurFilter();

    this.redChannelFilter = new PIXI.filters.ColorMatrixFilter();
    this.redChannelFilter.matrix = [
      1, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 1, 0
    ];
    this.greenChannelFilter = new PIXI.filters.ColorMatrixFilter();
    this.greenChannelFilter.matrix = [
      0, 0, 0, 0, 0,
      0, 1, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 1, 0
    ];
    this.blueChannelFilter = new PIXI.filters.ColorMatrixFilter();
    this.blueChannelFilter.matrix = [
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 1, 0
    ];


    const texture = PIXI.Texture.fromVideo(this.video);
    const videoSprite = new PIXI.Sprite(texture);

    videoSprite.width = this.app.renderer.width;
    videoSprite.height = this.app.renderer.height;

    this.app.stage.addChild(videoSprite);
    this.app.stage.filters = [this.tvFilter];
    //this.app.stage.filters = [this.tvFilter, this.mouseFilter];


    setInterval(() => {
      this.update();
    }, 1000 / 60);

    this.app.ticker.add((delta) => {
      this.tvFilter.uniforms.time += this.param1 * 1000 / 60;
    });
  }

  update(option) {
    //let time = filter.uniforms.time;
  }
}

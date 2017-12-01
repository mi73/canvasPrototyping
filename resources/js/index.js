import _ from 'underscore';
import Colors from './modules/Colors';
import ControlKit from 'controlkit';
import Pattern1 from './modules/Pattern1';
import Pattern2 from './modules/Pattern2';
import Pattern3 from './modules/Pattern3';
import Pattern4 from './modules/Pattern4';
import Pattern5 from './modules/Pattern5';
import Pattern6 from './modules/Pattern6';
<<<<<<< HEAD
import Pattern7 from './modules/Pattern7';
=======
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb

/**
 * Main Script of bmw new x3 series.
 */
class Index {
  constructor() {
    new Colors;

    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    this.patterns = [
      new Pattern1(this.context),
      new Pattern2(this.context),
      new Pattern3(this.context),
      new Pattern4(this.context),
      new Pattern5(this.context),
<<<<<<< HEAD
      new Pattern6(this.context, this.canvas),
      new Pattern7(this.context, this.canvas),
=======
      new Pattern6(this.context),
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
    ];
    this.index = this.patterns.length - 1;

    this.minH = 0;
    this.maxH = 100;
    this.minS = 0;
    this.maxS = 20;
    this.minB = 70;
    this.maxB = 100;

<<<<<<< HEAD
=======

>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
    this.param1 = 0.5;
    this.param2 = 0.5;
    this.param3 = 0.5;
    this.param4 = 0.5;
    this.param5 = 0.5;
    this.param6 = 0.5;

    this.blendings = [
      'source-over',
      'source-in',
      'source-out',
      'source-atop',
      'destination-over',
      'destination-in',
      'destination-out',
      'destination-atop',
      'lighter',
      'darker',
      'copy',
      'xor'
    ];
    this.blending = 'source-over';

    this.bg = '#ffffff';

    this.range1 = [0.01, 1];
    this.range100 = [0, 100];
    this.range360 = [0, 360];

    window.addEventListener('load', () => {

      this.controlKit = new ControlKit({
        width: 400,
      });
      this.controlKit.addPanel()
        .addGroup({
          label: 'PATTERN',
        })
        .addNumberInput(this, 'index', {
          onChange: () => {
            this.draw();
          },
          presets: _.range(this.patterns.length),
        })

        .addSelect(this, 'blendings', {
          label: 'blendingMode',
          target: 'blending',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })

        .addGroup({
          label: 'COLOR',
        })

        .addColor(this, 'bg', {
          label: 'backgroundColor',
          colorMode: 'hex',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })

        .addSlider(this, 'minH', 'range360', {
          label: 'Minimum Hue',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'maxH', 'range360', {
          label: 'Max Hue',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'minS', 'range100', {
          label: 'Minimum Saturation',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'maxS', 'range100', {
          label: 'Max Saturation',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'minB', 'range100', {
          label: 'Minimum Brightness',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'maxB', 'range100', {
          label: 'Max Brightness',
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })

        .addGroup({
          label: 'PARAM',
        })

        .addSlider(this, 'param1', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'param2', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'param3', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'param4', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'param5', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        })
        .addSlider(this, 'param6', 'range1', {
          onChange: () => {
<<<<<<< HEAD
            this.update();
=======
            this.draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
          },
        });

      this.draw();
    });
  }

  draw() {

    Array.from(this.patterns, (pattern) => {
      pattern.reset();
    });

<<<<<<< HEAD
    const pattern = this.patterns[this.index];
    pattern.setOption(this);
    pattern.draw();
  }

  update() {

    const pattern = this.patterns[this.index];
    pattern.setOption(this);
    pattern.update ? pattern.update() : pattern.draw();
=======
    this.patterns[this.index].setOption(this);
    this.patterns[this.index].draw();
>>>>>>> f487ab253fa22767cf7f49de26f22997052b9cbb
  }

}

window.INDEX = new Index();

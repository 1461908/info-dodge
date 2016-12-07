//Boilerplate framework from https://github.com/lean/phaser-es6-webpack

import 'pixi';
import 'p2';
import Phaser from 'phaser';

import GameState from './Game';

class Game extends Phaser.Game {

  constructor () {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

    super(width, height, Phaser.AUTO, 'content', null);

    this.state.add('Game', GameState, false);

    this.state.start('Game');
  }
}

var game = new Game();
game.width = 800;
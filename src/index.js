import Player, { keys } from './objs/player.obj.js';
import Ball from './objs/ball.obj.js';
import ctx from './context2d.js';
import setShortcuts from './setShortcuts.js';
import Game from './Game.js';

console.log('running');

const game = new Game();
game.init()
game.start()

window.game = game;
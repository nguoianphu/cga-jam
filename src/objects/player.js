// import Platform from 'objects/platform';
import { ASSETS } from 'constants';
import Bullet from 'objects/bullet';

export default class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    const { world } = game;

    super(game, x, y, ASSETS.PLAYER, 1);

    game.physics.arcade.enable(this);

    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.bullet = new Bullet(game, x, y + 20);
    game.add.existing(this.bullet);
  }

  update() {
    if (this.spaceKey.isDown) {
      console.log('fire!')
      this.fireBullet();
    }
  }

  fireBullet() {
    this.bullet.body.velocity.x = 200;
  }
}



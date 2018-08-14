import Phaser from 'phaser'
export default class extends Phaser.Sprite {
  constructor (game, x, y, key, frame) {
    super(game, x, y, 'bullet', frame)
  }

  init () {
    this.game.physics.enable(this)
  }

  update () {
  }
}

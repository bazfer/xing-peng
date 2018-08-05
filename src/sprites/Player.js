import Phaser from 'phaser'
import { getObjectIndex } from '../utils'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game = game
    this.health = 1000
    // this.hitArea = Phaser.Rectangle
  }

  init () {
    this.animations.add('fast', [2, 3])
    this.animations.play('fast', 15, true)
  }

  update () {
    if (this.health < 0) {
      this.alive = false
    }

    if (!this.alive) {
      this.body = null
      this.destroy()
    }
  }
}
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
    this.scale.set(2)
    this.smoothed = false
    this.flyFast()
  }

  flyFast () {
    this.animations.add('flyFast', [2, 3])
    this.animations.play('flyFast', 15, true)
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

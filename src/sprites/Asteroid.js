import Phaser from 'phaser'
import utils, { getRandomDecimal } from '../utils'

export default class extends Phaser.Sprite {
  constructor ({ game, player, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.player = player
    this.vectorX = getRandomDecimal(-1, 1)
    this.vectorY = getRandomDecimal(4, 5)
  }

  init () {
    this.game.physics.enable(this)
  }

  checkOverlap (a, b) {
    let boundsA = this.player
    let boundsB = this

    return Phaser.Rectangle.intersects(boundsA, boundsB)
  }

  update () {
    this.body.x += this.vectorX
    this.body.y += this.vectorY

    if ((this.x < -64) || (this.x > 896) || (this.y > 1216)) {
      this.destroy()
    }

    if (this.checkOverlap(this, this.player)) {
      this.player.health -= 100
      console.log(this.player.health)
    }
  }
}
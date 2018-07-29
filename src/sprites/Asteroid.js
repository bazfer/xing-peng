import Phaser from 'phaser'
import { getRandomDecimal, getObjectIndex, getObject } from '../utils'
import config from '../config'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.vectorX = getRandomDecimal(-1, 1)
    this.vectorY = getRandomDecimal(4, 5)
    this.damagePower = 100
  }

  init () {
    this.game.physics.enable(this)
  }

  checkOverlap (a, b) {
    let boundsA = a
    let boundsB = b

    return Phaser.Rectangle.intersects(boundsA, boundsB)
  }

  update () {
    this.body.x += this.vectorX
    this.body.y += this.vectorY

    let playerObject = getObject(this.game.world.children, 'player')
    // let playerObject = this.game.world.children[getObjectIndex(this.game.world.children, 'player')]

    if (playerObject && (this.checkOverlap(this, playerObject))) {
      playerObject.damage(this.damagePower)
      console.log(playerObject.health)
    }

    if ((this.x < -config.tileWidth) || (this.x > config.gameWidth + config.tileWidth) || (this.y > config.gameHeight + config.tileHeight)) {
      this.body = null
      this.destroy()
    }
  }
}
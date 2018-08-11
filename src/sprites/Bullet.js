import Phaser from 'phaser'
import { checkOverlap } from '../utils'
import config from '../config'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
  }

  init () {
    this.game.physics.enable(this)
  }

  update () {
  }
}

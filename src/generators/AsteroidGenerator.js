import Phaser from 'phaser'

export default class extends Phaser.Timer {
  constructor (game, autoDes) {
    super(game, false)
  }
}

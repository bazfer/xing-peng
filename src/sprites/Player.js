import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.health = 1000
    this.hitArea = Phaser.Rectangle
  }

  init() {
    console.log(this)
  }

  update () {
    if(this.health < 0) {
      this.alive = false
      console.log(this.alive)
    }
  }
}
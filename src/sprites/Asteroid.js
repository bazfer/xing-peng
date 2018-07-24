import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    console.log('ASTEROID')
    console.log(this)
  }

  initialize () {
    
  }
  update() {
    this.x += 3
    this.y += 4
  }
}
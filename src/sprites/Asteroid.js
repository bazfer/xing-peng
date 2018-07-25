import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  initialize () {
    
  }
  update() {
    this.x += 3
    this.y += 4

    // OBJECT CLEANUP
    if ((this.x > 1000) || (this.y > 700)) {
      this.destroy()
    }
  }
}
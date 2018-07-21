import Phaser from 'phaser'

export default class extends Phaser.TileSprite {
  constructor ({ game, x, y, width, height, asset }) {
    super(game, x, y, width, height, asset)
    this.anchor.setTo(0.5)
    console.log(this)
  }
}

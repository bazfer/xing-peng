/* globals __DEV__ */
import Phaser from 'phaser'
// import Mushroom from '../sprites/Mushroom'
import Background from '../sprites/Background'
import lang from '../lang'

export default class extends Phaser.State {
  init () {
    
  }
  preload () { }

  // create() {
  //   const bannerText = lang.text('welcome')
  //   let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
  //     font: '40px Bangers',
  //     fill: '#77BFA3',
  //     smoothed: false
  //   })

  //   banner.padding.set(10, 16)
  //   banner.anchor.setTo(0.5)

  //   this.mushroom = new Mushroom({
  //     game: this.game,
  //     x: this.world.centerX,
  //     y: this.world.centerY,
  //     asset: 'mushroom'
  //   })

  //   this.game.add.existing(this.mushroom)
  // }

  create () {
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      width: 960,
      height: 540,
      asset: 'background'
    })

    this.game.add.existing(this.background)
  }

  update () {
    this.background.tilePosition.y += 7
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.background, 32, 32)
    }
  }
}

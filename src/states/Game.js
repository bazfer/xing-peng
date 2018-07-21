/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Background from '../sprites/Background'
import lang from '../lang'
import Player from '../sprites/Player'

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
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    // Environment
    // far background
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      width: 960,
      height: 540,
      asset: 'background'
    })

    this.game.add.existing(this.background)

    // Player
    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY + (this.world.centerY) / 2 + (this.world.centerY) / 4,
      asset: 'player'
    })
    
    this.game.add.existing(this.player)
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE)

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  }

  update () {
    this.background.tilePosition.y += 7

    if (this.cursors.left.isDown) {
      this.player.x -= 10
    }

    if (this.cursors.right.isDown) {
      this.player.x += 10
    }

    if (this.cursors.up.isDown) {
      this.player.y -= 10
    }

    if (this.cursors.down.isDown) {
      this.player.y += 10
    }
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}

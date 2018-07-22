/* globals __DEV__ */
import Phaser from 'phaser'
import Wall from '../sprites/wall'
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
    // Physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // Environment
    // far background
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      width: 960,
      height: 640,
      asset: 'background'
    })
    this.game.add.existing(this.background)

    this.rightWall = new Wall({
      game: this.game,
      x: 959,
      y: 0,
      width: 70,
      height: 640,
      asset: 'wall'
    })
    this.game.add.existing(this.rightWall)
    
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
    // this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    this.player.body.collideWorldBounds = true

    // DEVELOPMENT TOOLS
    console.log('game')
    console.log(this.game)
    console.log('player')
    console.log(this.player)
  }

  update () {
    this.background.tilePosition.y += 7
    this.rightWall.tilePosition.y += 10

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

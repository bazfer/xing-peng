/* globals __DEV__ */
import Phaser from 'phaser'
import lang from '../lang'

/* game assets */
import Wall from '../sprites/Wall'
import Background from '../sprites/Background'
import Player from '../sprites/Player'
import Asteroid from '../sprites/Asteroid'

/* utils */
import { getObjectMethods } from '../utils'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    // Physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // ENVIRONMENT
    // background
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      width: 960,
      height: 640,
      asset: 'background'
    })
    this.game.add.existing(this.background)

    // wall
    this.rightWall = new Wall({
      game: this.game,
      x: 959,
      y: 0,
      width: 70,
      height: 640,
      asset: 'wall'
    })
    this.game.add.existing(this.rightWall)

    // ENEMIES
    this.asteroid = new Asteroid({ 
      game: this.game,
      x: 100,
      y: -100,
      asset: 'asteroid'
    })
    this.game.add.existing(this.asteroid)
    
    // PLAYER
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

    // DEVELOPMENT
    console.log('GAME')
    console.log(this.game)
    console.log('PLAYER')
    console.log(this.player)
    console.log('ASTEROID METHODS')
    console.log(getObjectMethods(this.asteroid))
  
    // setTimeout(function(){ console.log(this) }, 10000)
  }

  update () {
    // TILESPRIT ANIMATION
    this.background.tilePosition.y += 7
    this.rightWall.tilePosition.y += 10

    // PLAYER INPUT
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

    // OBJECT CLEANUP
    if ((this.asteroid.x > 1200) || (this.asteroid.y > 800)) {
      this.asteroid.destroy()
    }
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}

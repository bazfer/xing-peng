/* globals __DEV__ */
import Phaser from 'phaser'
import lang from '../lang'

/* game assets */
import Wall from '../sprites/Wall'
import Background from '../sprites/Background'
import Player from '../sprites/Player'
import Asteroid from '../sprites/Asteroid'

/* generators */
import AsteroidGenerator from '../generators/AsteroidGenerator'

/* utils */
import { getObjectMethods } from '../utils'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    const self = this
    // CONTROLS
    this.cursors = this.game.input.keyboard.createCursorKeys()
    // this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    // Physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    // ENVIRONMENT
    // background
    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      width: 736,
      height: 1312,
      asset: 'background'
    })
    this.game.add.existing(this.background)

    // wall
    this.rightWall = new Wall({
      game: this.game,
      x: 375,
      y: 0,
      width: 32,
      height: 1280,
      asset: 'wall'
    })
    this.game.add.existing(this.rightWall)

    // SINGLE ENEMY
    // this.asteroid = new Asteroid({ 
    //   game: this.game,
    //   x: 100,
    //   y: -100,
    //   asset: 'asteroid'
    // })
    // this.game.add.existing(this.asteroid)
    // this.asteroid.init()

    // PLAYER
    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY + (this.world.centerY) / 2 + (this.world.centerY) / 4,
      asset: 'player',
      health: 1000,
      hitArea: 'Rectangle'
    })
    this.game.add.existing(this.player)
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE)
    this.player.body.collideWorldBounds = true
    console.log('PLAYEDY DU')
    this.player.init()
    console.log(this.player.health)

    // GENERATORS

    this.asteroidGenerator1 = new AsteroidGenerator(self.game, this.player, 'asteroid', 'normal')
    this.asteroidGenerator1.init()

    this.asteroidGenerator2 = new AsteroidGenerator(self.game, this.player, 'asteroid', 'normal')
    this.asteroidGenerator2.init()

    // DEVELOPMENT

    // console.log('PLAYER')
    // console.log(this.player)
    // console.log('ASTEROID METHODS')
    // console.log(getObjectMethods(this.asteroid))
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
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}

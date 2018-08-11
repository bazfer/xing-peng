/* globals __DEV__ */
import Phaser from 'phaser'
import lang from '../lang'
import config from '../config'

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
      width: config.gameWidth,
      height: config.gameHeight,
      asset: 'background'
    })
    this.game.add.existing(this.background)

    // wall
    this.rightWall = new Wall({
      game: this.game,
      x: config.gameWidth,
      y: 0,
      width: config.tileWidth,
      height: config.gameHeight,
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
    // ship
    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY + (this.world.centerY) / 2 + (this.world.centerY) / 4,
      asset: 'player',
      frame: 3,
      health: 1000,
      hitArea: 'Rectangle'
    })
    this.game.add.existing(this.player)
    this.game.physics.enable(this.player, Phaser.Physics.ARCADE)
    this.player.body.collideWorldBounds = true
    this.player.init()
    // bullet
    this.bulletTime = 0

    this.bullets = this.game.add.group()
    this.bullets.enableBody = true
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE

    this.bullets.createMultiple(40, 'bullet')
    this.bullets.setAll('anchor.x', 0.5)
    this.bullets.setAll('anchor.y', 0.5)

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

  fireBullet () {
    let bullet
    if (this.game.time.now > this.bulletTime) {
      bullet = this.bullets.getFirstExists(false)

      if (bullet) {
        bullet.reset(this.player.body.x + 24, this.player.body.y + 32)
        bullet.lifespan = 2000
        bullet.rotation = this.player.rotation
        this.game.physics.arcade.velocityFromRotation((3 * Math.PI) / 2, 600, bullet.body.velocity)
        this.bulletTime = this.game.time.now + 50
      }
    }
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

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.fireBullet()
    }
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}

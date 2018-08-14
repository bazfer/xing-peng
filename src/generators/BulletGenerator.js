import Phaser from 'phaser'
import Bullet from '../sprites/Bullet'

// import { getRandomInteger } from '../utils'
// import { config } from '../config'

export default class extends Phaser.Group {
  constructor (game, player, asset, difficulty) {
    super(game)
    this.player = player
    // this.asset = asset
    // this.difficulty = difficulty
    this.bulletTime = 0
  }

  fireBullet () {
    let bullet
    if (this.game.time.now > this.bulletTime) {
      bullet = this.getFirstExists(false)

      if (bullet) {
        bullet.init()
        bullet.reset(this.player.body.x + 24, this.player.body.y + 32)
        bullet.lifespan = 2000
        bullet.rotation = this.player.rotation
        this.game.physics.arcade.velocityFromRotation((3 * Math.PI) / 2, 600, bullet.body.velocity)
        this.bulletTime = this.game.time.now + 50
      }
    }
  }

  init () {
    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.classType = Bullet
    this.createMultiple(40)
    this.setAll('anchor.x', 0.5)
    this.setAll('anchor.y', 0.5)
  }

  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.fireBullet()
    }
  }
}

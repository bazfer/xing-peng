import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('wall', 'assets/images/wall.png')
    this.load.image('background', 'assets/images/background.png')
    this.load.image('asteroid', 'assets/images/asteroid.png')
    this.load.image('player', 'assets/images/player.png')
    // this.load.spritesheet('player-spritesheet', 'assets/images/player-spritesheet.png', width, height, frames, margin, space, skip)
    this.load.spritesheet('player-spritesheet', 'assets/images/player-spritesheet.png', 23, 30, 8, 0, 3)
    
  }

  create () {
    this.state.start('Game')
  }
}

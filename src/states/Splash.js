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
    this.load.image('player_base', 'assets/images/player_base.png')
    this.load.image('player_left_1_2', 'assets/images/player_left_1_2.png')
    this.load.image('player_left_2_2', 'assets/images/player_left_2_2.png')
    this.load.image('player_right_1_2', 'assets/images/player_right_1_2.png')
    this.load.image('player_right_2_2', 'assets/images/player_right_2_2.png')
    this.load.image('player_thrust_1_3', 'assets/images/player_thrust_1_3.png')
    this.load.image('player_thrust_1_3', 'assets/images/player_thrust_2_3.png')
    this.load.image('player_thrust_1_3', 'assets/images/player_thrust_3_3.png')
  }

  create () {
    this.state.start('Game')
  }
}

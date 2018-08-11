import Phaser from 'phaser'
import { getRandomInteger } from '../utils'
import { config } from '../config'
import Asteroid from '../sprites/Asteroid'

export default class extends Phaser.Group {
  constructor (game, player, asset, difficulty) {
    super(game)
    this.player = player
    this.asset = asset
    this.difficulty = difficulty
    this.timer = new Phaser.Timer(game, false)
  }

  generateAsteroid () {
    let a = new Asteroid({
      game: this.game,
      player: this.player,
      x: getRandomInteger(0, 736),
      y: -100,
      asset: this.asset
    })
    this.game.add.existing(a)
    a.init()
  }

  init () {
    const getFrequency = {
      'easy': 2000,
      'normal': 500,
      'hard': 500
    }

    this.game.time.add(this.timer)
    this.timer.loop(getFrequency.normal, () => { this.generateAsteroid() })
    this.timer.start()
  }
}

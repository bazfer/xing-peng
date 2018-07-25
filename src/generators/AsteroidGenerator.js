import Phaser from 'phaser'
import { getRandomInteger } from '../utils'
import { config } from '../config'
import Asteroid from '../sprites/Asteroid'

export default class extends Phaser.Group {
  constructor (game, asset, difficulty) {
    super(game)
    this.asset =  asset
    this.difficulty = difficulty
    this.timer = new Phaser.Timer(game, false)
  }

  generateAsteroid () {
    let a = new Asteroid({
      game: this.game,
      x: getRandomInteger(0, 960),
      y: -100,
      asset: this.asset
    })
    this.game.add.existing(a)
  }

  init () {
    const getFrequency = {
      'easy': 2000,
      'normal': 1000,
      'hard': 500
    }

    this.game.time.add(this.timer)
    this.timer.loop(getFrequency.normal, () => { this.generateAsteroid() })
    this.timer.start()
  }
}

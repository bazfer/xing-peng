import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor (game) {
    super(game)
    this.timer = new Phaser.Timer(game, false)
  }

  init () {
    console.log('ASTEROID GROUP')
    console.log(this)
    const mf = () => console.log('mothefucka')

    this.timer.add(3000, mf)
    this.game.time.add(this.timer)
    this.timer.start()
  }
}

import Phaser from 'phaser'

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}
export const getObjectMethods = (obj) => {
  var objMethods = []
  for (var m in obj) {
    if (typeof obj[m] == 'function') {
      objMethods.push(m)
    }
  }
  return objMethods
}

export const getRandomDecimal = (min, max) => {
  return Math.random() * (max - min + 1) + min
}

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getObject = (key, array) => {
  return array.find((x) => { return x.key === key })
}

export const getObjectIndex = (key, array) => {
  return array.map((x) => { return x.key }).indexOf('player')
}

export const checkOverlap = (a, b) => {
  let boundsA = a
  let boundsB = b

  return Phaser.Rectangle.intersects(boundsA, boundsB)
}


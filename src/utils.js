// CANVAS
export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

// MISC
export const getObjectMethods = (obj) => {
  var res = []
  for (var m in obj) {
    if (typeof obj[m] == 'function') {
      res.push(m)
    }
  }
  return res
}

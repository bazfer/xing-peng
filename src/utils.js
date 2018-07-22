// CANVAS
export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

// MISC
export const getObjectMethods = (obj) => {
  var objMethods = []
  for (var m in obj) {
    if (typeof obj[m] == 'function') {
      objMethods.push(m)
    }
  }
  return objMethods
}

// FILE MGMT
export const spriteLoader = (name) => {
  console.log(name)
}

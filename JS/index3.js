console.log('------------------Homework--------3.1----------')
const draw1 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        text += '*'
      } else {
        text += '-'
      }
    }
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        text += '*'
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (j < i + 1) {
        text += '*'
      } else {
        text += '-'
      }
    }

    for (let j = 0; j < n - 1; j++) {
      if (j < i - 1) {
        text += '*'
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw1(2)
draw1(3)
draw1(4)

console.log('------------------Homework--------3.2----------')
const draw2 = function (n) {
  let text = ''
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        ++count
        text += count
      } else {
        text += '-'
      }
    }
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        ++count
        text += count
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (j < i + 1) {
        ++count
        text += count
      } else {
        text += '-'
      }
    }

    for (let j = 0; j < n - 1; j++) {
      if (j < i - 1) {
        ++count
        text += count
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw2(2)
draw2(3)
draw2(4)

console.log('------------------Homework--------3.3----------')
const draw3 = function (n) {
  let text = ''
  let data = []

  for (let i = 0; i < n; i++) {
    data[i] = []
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        data[i][j] = '*'
      } else {
        data[i][j] = '-'
      }
    }
  }

  for (let i = 0; i < n; i++) {
    text += '\n'
    for (let j = 0; j < n; j++) {
      text += data[i][j]
    }
  }

  console.log(text)
}

draw3(2)
draw3(3)
draw3(4)

console.log('------------------Homework--------3.4----------')
const draw = (n) => {
  let temp = ''
  let left = n
  let right = n
  let number = 1
  let arr = []
  for (let row = 1; row <= 2 * n - 1; row++) {
    arr[row - 1] = []
    for (let col = 1; col <= 2 * n - 1; col++) {
      if (col >= left && col <= right) {
        temp = '*'
      } else {
        temp = '-'
      }
      arr[row - 1][col - 1] = temp
    }
    // temp += '\n'
    if (row < n) {
      left -= 1
      right += 1
    } else {
      left += 1
      right -= 1
    }
  }

  return arr
}
// console.log(draw(3))

const printArr = (n) => {
  const data = draw(n)
  let temp = ''
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      temp += data[i][j]
    }
    temp += '\n'
  }
  return temp
}
console.log(printArr(5))

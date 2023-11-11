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
const draw4 = function (n) {
  let text = ''
  let data = []

  let column = 0
  let row = 0
  for (let i = 0; i < n; i++) {
    data[i] = []
    let count = 0
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        data[i][count] = '*'
      } else {
        data[i][count] = '-'
      }

      ++count

      column = count
    }

    column = count
    for (let j = 1; j < n; j++) {
      if (j <= i) {
        data[i][column] = '*'
      } else {
        data[i][column] = '-'
      }

      ++column
    }

    row = i + 1
  }

  for (let i = n - 1; i > 0; i--) {
    data[row] = []
    let count = 0
    for (let j = n; j > 0; j--) {
      if (j < i + 1) {
        data[row][count] = '*'
      } else {
        data[row][count] = '-'
      }

      ++count
    }
    column = count
    for (let j = 0; j < n - 1; j++) {
      if (j < i - 1) {
        data[row][column] = '*'
      } else {
        data[row][column] = '-'
      }

      ++column
    }

    ++row
  }

  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    for (let j = 0; j < data[i].length; j++) {
      text += data[i][j]
    }
    text += '\n'
  }

  console.log(text)
}

draw4(2)
draw4(3)
draw4(4)

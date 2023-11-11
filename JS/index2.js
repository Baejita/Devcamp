console.log('------------------Homework--------2.1----------')
const draw1 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
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

console.log('------------------Homework--------2.2----------')
const draw2 = function (n) {
  let text = ''

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += '-'
      } else {
        text += '*'
      }
    }

    text += '\n'
  }

  console.log(text)
}
draw2(2)
draw2(3)
draw2(4)

console.log('------------------Homework--------2.3----------')
const draw3 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        text += '*'
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += '-'
      } else {
        text += '*'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw3(2)
draw3(3)
draw3(4)

console.log('------------------Homework--------2.4----------')
const draw4 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        text += i + 1
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < n; j++) {
      if (j >= i) {
        text += '-'
      } else {
        text += i
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw4(2)
draw4(3)
draw4(4)

console.log('------------------Homework--------2.5----------')
const draw5 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        text += '*'
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw5(2)
draw5(3)
draw5(4)

console.log('------------------Homework--------2.6----------')
const draw6 = function (n) {
  let text = ''

  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (j < i + 1) {
        text += '*'
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw6(2)
draw6(3)
draw6(4)

console.log('------------------Homework--------2.7----------')
const draw7 = function (n) {
  let text = ''

  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
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

    text += '\n'
  }

  console.log(text)
}

draw7(2)
draw7(3)
draw7(4)

console.log('------------------Homework--------2.8----------')
const draw8 = function (n) {
  let text = ''
  let count1 = 0
  let count2 = n * n + 1
  for (let i = 0; i < n; i++) {
    for (let j = n; j > 0; j--) {
      if (j <= i + 1) {
        ++count1
        text += count1
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  for (let i = n - 1; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (j < i + 1) {
        ++count1
        text += count1
      } else {
        text += '-'
      }
    }

    text += '\n'
  }

  console.log(text)
}

draw8(2)
draw8(3)
draw8(4)

console.log('------------------Homework--------2.9----------')
const draw9 = function (n) {
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

  console.log(text)
}

draw9(2)
draw9(3)
draw9(4)

console.log('------------------Homework--------2.10----------')
const draw10 = function (n) {
  let text = ''

  for (let i = n; i > 0; i--) {
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

draw10(2)
draw10(3)
draw10(4)

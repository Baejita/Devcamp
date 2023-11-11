//การบ้าน javaSript
console.log('========= การบ้าน 1.1 ========')
let text = ''
const draw1 = function (n) {
  for (let i = 0; i < n; i++) {
    text += '*'
  }
  console.log(text)
}
draw1(8)

console.log('========= การบ้าน 1.2 ========')
let text2 = ''
const draw2 = function (n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text2 += '*'
    }
    text2 += '\n'
  }
  console.log(text2)
}
draw2(5)

console.log('========= การบ้าน 1.3 ========')

let text3 = ''
const draw3 = function (n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      text3 += j
    }
    text3 += '\n'
  }
  console.log(text3)
}
draw3(5)

console.log('========= การบ้าน 1.4 ========')
let text4 = ''
// External loop
const draw4 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= n; j++) {
      text4 += i
    }
    text4 += '\n'
  }
  console.log(text4)
}
draw4(5)

console.log('========= การบ้าน 1.5 ========')
let text5 = ''
// External loop
const draw5 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= n; j++) {
      text5 += n + 1 - i
    }
    text5 += '\n'
  }
  console.log(text5)
}
draw5(4)

console.log('========= การบ้าน 1.6 ========')

let text6 = ''
let count = 1
// External loop
const draw6 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= n; j++) {
      text6 += count
      count++
    }
    text6 += '\n'
  }
  console.log(text6)
}
draw6(3)

console.log('========= การบ้าน 1.7 ========')
let text7 = ''

// External loop
const draw7 = function (n) {
  for (let i = n ** 2; i >= 1; i--) {
    // Internal loop
    if (i % n === 0) {
      text7 += '\n'
    }
    text7 += i
  }
  console.log(text7)
}
draw7(4)

console.log('========= การบ้าน 1.8 ========')
let text8 = ''

// External loop
const draw8 = function (n) {
  for (let i = 0; i <= n; i += 2) {
    // Internal loop
    text8 += i + '\n'
  }
  console.log(text8)
}
draw8(4)

console.log('========= การบ้าน 1.9 ========')
let text9 = ''

// External loop
const draw9 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 1; j <= 1; j++) {
      text9 += i * 2
    }
    text9 += '\n'
  }
  console.log(text9)
}
draw9(4)

console.log('========= การบ้าน 1.10 ========')

let text10 = ''
let count10 = ''
// External loop
const draw10 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop
    for (let j = 0; j < n; j += i) {
      text10 += i + j
    }
    text10 += '\n'
  }
  console.log(text10)
}
draw10(4)

console.log('========= การบ้าน 1.11 ========')

debugger
let text11 = ''
let count11 = ''
// External loop
const draw11 = function (n) {
  for (let i = 1; i <= n; i++) {
    // Internal loop

    for (let j = 1; j < n; j++) {
      text10 += i + j
    }
    text10 += '\n'
  }
  console.log(text11)
}
draw11(4)

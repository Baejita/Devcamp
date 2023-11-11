// // let a = '2' + '2'
// // console.log(a)

// // const number = [1, 2, 3, 4, 5, 10, 11, 12]
// // console.log(number.sort((a, b) => a - b))
// // console.log(number.splice(0, 3))
// // console.log(number.slice(0, 3))
// // // A() {}  คือ function
// // // .A() คือ method

// // let string = 'Hello, world'
// // string = string.replace('Hello', 'Hi')
// // console.log(string)

// const data =
//   'gikey=ofeasnge abiptgerjsiognornq grneo anrgloneaog omea nr;wanq rg;nwajk gnrkejan kgrejgren pa kw,rkewm kewnmr kenw rjenw ewnd s wfkewan ono nwklafewj nekj key={hello} nfdijsagfjskgbfkjsdgkfdjsngfdjskeyg kfdgfkjdsnkfdjsnkgfsnjkgfskn'

// // console.log(data.match('key={(.*)}')[1])
// // const start = data.indexOf('key={')
// // const newData = data.slice(start + 5)
// // // const end = newData.indexOf('}')
// // // const newEnd = newData.slice(end)
// // // console.log(newEnd)
// // console.log(newData.slice(0, 5))

// const data2 = 'key={hi}mgklfsnglfksnglfksnglfdksngfdsnglkfdsnlgfkeudkslkey'
// // console.log(data2.match('key={(.*)}')[1])
// // const inout = ''
// // const start2 = data2.indexOf('key={')
// // const newData2 = data2.slice(start + 5)
// // const end = newData2.indexOf('}')
// // // const newEnd = newData.slice(end)
// // // console.log(newEnd)
// // console.log(newData2.slice(0, end))

// function newData(input) {
//   const start = input.indexOf('key={')
//   const newData = input.slice(start + 5)
//   const end = newData.indexOf('}')
//   return newData.slice(0, end)
// }

// console.log(newData(data))

// function ( ) {

// }// fuction

// const draw1 = function ( ) {

// }// anonymous fuction

// const draw2 = () => {

// }// arrow functions

// () => {} // call back function
// const draw = (n) => {
//   let temp = ''
//   let left = n
//   let right = n
//   let number = 1
//   for (let row = 1; row <= 2 * n - 1; row++) {
//     for (let col = 1; col <= 2 * n - 1; col++) {
//       if (col >= left && col <= right) {
//         temp += number.toString()
//         number++
//       } else {
//         temp += '-'
//       }
//     }
//     temp += '\n'
//     if (row < n) {
//       left -= 1
//       right += 1
//     } else {
//       left += 1
//       right -= 1
//     }
//   }

//   return temp
// }
// console.log(draw(3))

// temp1 = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ]
// debugger
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

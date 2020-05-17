// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Maylene', 'Sydney', 'Mark', 'Sophie']
// const shortNames = names.filter(name => name.length <= 6)

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }
  
//    callback(data)
//   }, 2000)
// }

// geoCode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (x, y, callback) => {
    setTimeout(() => {
      callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
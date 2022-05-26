// Comment 

// Datatypes 
// Integer 
// Float
// Time / Date 
// Text 
// String 
// Boolean
// Array 
// hashes
// nil -> null 
// undefined 
// NAN 

// + - * / () % 
// > < >= <= 
// == === != !==
//  && || 
// += -= *= /= ++ --

// string concatenation 
// console.log("Hello" + "world")
// console.log("Hello" + "world" + 1)

// Variable - store a ref of a object to use for later 
// = - assignment 
// camelCase 
// start with a key words, var, let, const 
// var firstName = 'bob'
// scope - where you have access to the variable
// var is file wide
// you want the scope to be where. ever is is define
// var firstName = "joe"

// if (num == 2) {
//   var firstName = "joe"
// }

// firstName = 'jill'
// no longer using var, because it changes our scope 
// these will be scoped where you define them 
// let will allow re assignment
// let firstName = 'joe'
//    firstName = 'bob'

// constant - shouldn't change the value
// const middleName = 'mike'
  // middleName = 'a'
// Uncaught TypeError: Assignment to constant variable. 

// const keyword, use for variables, modules components, functions, 

// string interpolation 
// let firstName = 'Grace'
// `First name is: ${firstName}`

// class Person {
//   let firstName = 'bob' // scoped to the class 
// }

// if (x = 3) {
//   let age = 45  // scoped in the if 
// }

// let arr = ["bob" , " red ", 12, true, []]
// let colors = ['red', 'green', 'blue']
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// add to the array
// colors.push("orange")
// colors.unshift("orange")
// console.log(colors)

// remove an item 
// colors.pop()
// colors.slice(1)
// console.log(colors)

// console.log(colors.length)
// console.log(colors.reverse())
           //. 0.     1.        2
// let colors = ['red', 'green', 'blue']
// iterators 
// for (let index = 0; index < colors.length; index++) {
//   console.log(colors[index])
// }

// for each
// colors.forEach( (color) => {
//   console.log(color)
// })

// for in
// for (let color of colors) {
//   console.log(color)
// }

// for (let color in colors) {
//   console.log(color)
// }

// map - iternate, and return an array 
// let mapArr = colors.map( (color) => {
//   console.log(color)
//   return color
// })

// console.log(mapArr)

// let nums = [1,2,3,4,5,6,7,8]
// filter - iternate, return an arr, and leave stuff out based on condition 
// delete CRUD action 
// let even = nums.filter( (number) => {
//   return number % 2 == 0
// })

// console.log(even)

// Hashes / Object 
// let person = { firstName: 'bob', age: 23 }
// console.log(person['firstName'])
// console.log(person.firstName)
// console.log(person.age)
// person.age = 54 
// console.log(person.age)

// let contacts = [
//   { name: 'bob hope', email: 'bob@email.com' },
//   { name: 'jill smith', email: 'jill@email.com' },
//   { name: 'lucy goosey', email: 'lucy@email.com' },
// ]

// console.log(contacts[0].email)
// contacts.forEach( (contact) => {
//   console.log(contact.name)
// })

// Objects - person place or thing
// 

// Functions / methods 
//  - old function 
// last line is return 
// return
// function countColors(colors) {
//    colors.length
// } 

// function countColors(colors) {
//    if( x = y) {
//      return y 
//    } else {
//         return x
// }
//       return z
//    colors.length
// } 

// new way 
// const 
// () => 

// const countColors = (colors) => {
//   colors.length
// }

// class Colors {
//   countColors = (colors) => {
//     colors.length
//   }
// }

// () => // annoynomous function call as soon as we define it, no name run the logic or wait until and action to run the logic

// <button onClick={() => changeColor('blue')}>Click</button>

// default param 
// if they don't pass in a param, set to what ever start point
// const countColors = (colors = []) => {
//   console.log(colors.length)
// }

// countColors()
// countColors(['red', 'yellow', 'green'])

// const showUserInfo = (name, options = {}) => {
//   let likes = options.likes
//   let followers = options.followers
//   let following = options.following
//   console.log(name)
//   console.log(likes)
//   console.log(followers)
//   console.log(following)
// }

// showUserInfo("Spencer", { likes: 4, followers: 10, following: 13 });


// const showUserInfo = (name, { likes, followers, following }) => {
//   console.log(name)
//   console.log(likes)
//   console.log(followers)
//   console.log(following)
// }

// showUserInfo("Spencer", { likes: 4, followers: 10, following: 13 });

// rest params only works with functions 
// ... colors rest of the parameters 
// const logColors = (firstColor, secondColor) => {
//   for(let c of colors) {
//     console.log(c)
//   }
// }
// const logColors = (...colors) => {
//   for(let c of colors) {
//     console.log(c)
//   }
// }

// logColors('red')
// logColors('red', 'blue')
// logColors('red', 'pink', 'orange')

// Spread Operator 
// ... 
// work on objects and lists 

// let arr = [1,2,3,4,5]
// let person = {
//   firstName: 'bob', 
//   lastName: 'smith',
// }

// console.log(...arr)

// Object destrurting 
// let firstName = person.firstName 
// let lastName = person.lastName 
// let { firstName, lastName } = person
// console.log(firstName)
// console.log(lastName)

// state = { contacts: [], form: [], age: 12}
// (...state)
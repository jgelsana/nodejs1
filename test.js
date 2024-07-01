const name = 'Jose'
let age = 29
const hasHobbies = true

age = 30
// name = 'Mark'

// function summarizeUser(userName, userAge, userHasHobby) {
//     return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby)
// }

// const summarizeUser = function(userName, userAge, userHasHobby) {
//     return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby)
// }

//ginagamit si arrow function para ma-overcome ang limitation ng this
const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby)
}

// const add = (a, b) => a + b
const addOne = (a) => a + 1
const addRandom = () => 1 + 2

//tatanggap pa rin tong function nato ng function kahit wala syang silbi, di naman gagamitin
// console.log(addRandom())
// console.log(summarizeUser(name, age, hasHobbies))

// this.name = 'Mico'
const person = {
    name: 'Mark',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name)
    }
}

// person.greet();

// Array
const hobbies = ['Sports', 'Cooking']
// SPREAD OPERATOR
const coppiedArray = [...hobbies]

// for(let hobby of hobbies) {
//     console.log(hobby)
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
// hobbies.push('Dancing')
// // hobbies = ['Hello']
// console.log(hobbies)

// REST
const toArray = (a, b, ...args) => {
    return args
}

const copiedPerson = {...person}
// console.log(toArray(1,2,3,4,5,6))
// console.log(coppiedArray)
// console.log(copiedPerson)

// DESTRUCTURING
//object destructure
const {name: n, age: a} = person

// console.log(a)

//array destructure
//hindi masyadong ginagamit
const [hobby1, hobby2] = hobbies
// console.log(hobby1)

// Asynchronous code ito
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
        }, 1500)
    })

    return promise
}

//kahit nauna i-call ang fetchData, mas una pa ring lalabas sa output ang "Hi"
// setTimeout(() => {
//     console.log('Timer done!')
//     // const a = fetchData()
//     // console.log(a)

//     const a = fetchData()
//     .then(data => {
//         console.log(data)

//         //para sa next "then" to, para may aabangan syang promise na naman
//         return fetchData()
//     })
//     .then(data2 => {
//         console.log(data2)
//     })
// }, 2000)


//using "async" automatically returns a "Promise" for the function
const asynFun = async() => {
    // "await" is used to pause the execution of the function until a
    //given promise is resolved
    //this will wait for the fetchData to complete
    const a = await fetchData()
    console.log(a)
}

asynFun();
console.log('Hi')
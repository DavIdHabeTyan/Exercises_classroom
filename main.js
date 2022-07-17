//exercises 01
/*
function findNotRepeatedVal(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key
        }
    }
}

console.log(findNotRepeatedVal(["a", "a", "b", "a"]))


 */
/// ---- remove duplicate

/*

let arr1 = ["dog", "cat", "parrot"];
let arr2 = ["lizard", "rat", "cat"];
function findRepeatVal(arr1, arr2) {
    let obj = {}
    let arrSpread = [...arr1, ...arr2];
    for(let elem of arrSpread){
        obj[elem] = 1
    }
    return Object.keys(obj)
}
console.log(findRepeatVal(arr1, arr2))



//// New Set method
function removeDuplicate(arr) {
    let result = [...new Set(arr)]
    return Array.from(result)
}

console.log(removeDuplicate([12, 3, 54, 6, 3, 6, 5, 5, 12 ]))


let list =[
        {amount: 15},
    {amount: 16},
    {amount: 90},
    {amount: 115},
    {amount: 312},
    ]

function sum(arr) {
    return arr.reduce((acc, elem) => {
        return acc + elem.amount
    },0)
}

console.log(sum(list))



 */

/*
/// object exercises find gander
const arr = [
    {
        name: "John",
        gender: "male"
    },
    {
        name: "Jane",
        gender: "female"
    },
    {
        name: "Bob",
        gender: "male"
    },
    {
        name: "Ronaldo",
        gender: "male"
    },
    {
        name: "Sarah",
        gender: "female"
    }
];

function sortPeopleGender(list) {
    return list.reduce((acc, elem) => {
        if (elem.gender === "female") {
            acc.women.push(elem)
            return acc
        } else {
            acc.man.push(elem)
            return acc
        }
    }, {
        man: [],
        women: []
    })
}

console.log(sortPeopleGender(arr))

 */


/*
let user = [{name: "Ani"}, {id: 2345789}];
let status = [{id:2345789}, {status: "married"}]

function margeArray(user, status){
    let filterId =  status.filter(id => {
        return id.id === user.id
    })
    return [...user, ...filterId]
}
console.log(margeArray(user, status))

 */

const arr = [
    {
        name: "John",
        gender: "male"
    },
    {
        name: "Jane",
        gender: "female"
    },
    {
        name: "Bob",
        gender: "male"
    },
    {
        name: "Ronaldo",
        gender: "male"
    },
    {
        name: "Sarah",
        gender: "female"
    }
];

function filteredGender(list){
    const obj = {}
    obj.woman = list.filter(elem => {
        return elem.gender === "female"

    })
    obj.man = list.filter(elem => {
        return elem.gender === "male"
    })
    return obj
}

console.log(filteredGender(arr))


//// array method map. squere

function square(arr) {
    return arr.map(elem => {
        return elem**2
    })
}

console.log(square([10,15,30,90]))
///object.assign sarguma object key@ sarguma 0 - ic string isk valuen karox enq tal inch vor array


//
// let arr = [1, 2, "34", 6, "234"]
// let str = "Dav"
//
// let obj = {a: 1};
//
// let copy = Object.assign({}, arr)
//
// console.log(copy)
//
// /// object.assign nayev concat e anum mi qani object
// //
//
// let obj2 = {name: "Jake"};
// let obj3 = {name: "42"}
//
// let copyObj = Object.assign(obj, obj2, obj3)
// console.log(copyObj)


//object.assign hishoxutyan tiruyt.


let user = {
   name: "Anna",
   age: 24,
   info: {
      phone: 4548121,
      balance: 4521215441,
   }
}

let user2 = Object.assign({}, user);


user2.info.balance = 6666666669999;

console.log(user)

// clone  enq  anum JSON - i mijocov vorov kkaroxananq popoxel inch kcankanq
let cloneUser = JSON.stringify(user);

let prepared = JSON.parse(cloneUser)

prepared.info.balance = 555555;


console.log(user)
console.log(prepared)


let users = {
   user1: "Arsen",
   user2: "Anna",
   user3: "Hamo",
}


// let usersName = []
// for(let values in users) {
//    usersName.push(users[values])
// }
// console.log(usersName)

let namesUsers = Object.values(users)
console.log(namesUsers)

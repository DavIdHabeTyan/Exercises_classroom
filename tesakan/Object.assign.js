
///object.assign sarguma object key@ sarguma 0 - ic string isk valuen karox enq tal inch vor array



let arr = [1, 2, "34", 6, "234"]
let str = "Dav"

let obj = {a: 1};

let copy = Object.assign({}, arr)

console.log(copy)

/// object.assign nayev concat e anum mi qani object
//

let obj2 = {name: "Jake"};
let obj3 = {name: "42"}

let copyObj = Object.assign(obj, obj2, obj3)
console.log(copyObj)
const obj = {
   name: "David",
   age: 31,
}

Object.defineProperty(obj, "id", {
   value: 44543000002136189, writable: false, configurable: true, enumerable: true
})
obj.id = 4575126545212;

Object.defineProperty(obj, "balance", {
   value: 1000,
})

/// check property in object

console.log(obj);



let entries = Object.entries(obj);
console.log(entries)
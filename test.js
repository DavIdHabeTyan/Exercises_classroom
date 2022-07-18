let arr = ["a", "b", "a", "D", "G"]

function clearRepeatedValue(list) {
   let obj = {};
   for (let elem of list) {
     obj[elem] = 1
   }
   return Object.keys(obj)

}

console.log(clearRepeatedValue(arr))
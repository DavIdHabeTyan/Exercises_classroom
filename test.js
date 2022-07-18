let arr = ["a", "b", "a", "D", "G", "b", "D"]

function clearRepeatedValue(list) {
   let repetaivElement = []
   let obj = {};
   for(let elem of list) {
      obj[elem] = 1
   }
return Object.keys(obj)
}
console.log(clearRepeatedValue(arr))




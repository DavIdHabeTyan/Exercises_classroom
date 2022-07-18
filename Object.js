/// clear Repeated Elements;
/// maqrel krknvox elementner@;

/*
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
 */


/// output repeat Elements;
/// veradarcnel krknvox elemntner@;

/*
let arrList = ["a", "b", "a", "D", "G", "b", "D"]

function outputRepeatElement(arr) {
   let obj = {};
   let repetitiveElement = []
   for (let value of arr) {
      if (obj[value]) {
         obj[value]++
      } else {
         obj[value] = 1
      }
   }
   for (let key in obj) {
      if (obj[key] > 1) {
         repetitiveElement.push(key)
      }
   }
   return repetitiveElement
}

console.log(outputRepeatElement(arrList))

 */

// javascripum bolor function -r@ closure - en

/// generator closure
function foo (arg) {
   let a = 5, b = 6;
   return function goo() {
      console.log(a)
   }
 }

 console.log(foo()) // output function goo
 let result = foo();
 console.log(result()) // output  * 5 *


 function counter(){
    let count = 0;
    return function(){
       return ++count
    }
 }

 let sum = counter();
 let counters = sum;
 let ddd = sum;
 let bbb = ddd;
 console.log(sum())
 console.log(sum())
 console.log(sum())
 console.log(sum())
 console.log(counters())
 console.log(counters())
 console.log(counters())
console.log(ddd())
console.log(bbb())

 // console.log(counters())


/// --------------------------------------------

function global() {
    let count = 0;
    return function() {
       return () => ++count;
    }
}

let gen = global();
 let c = gen();
 let q = gen();
 let x = gen();

console.log(c())
console.log(q())
console.log(x())



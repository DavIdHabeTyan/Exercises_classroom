 function foo (arg) {
   let a = 5, b = 6;
   return function goo() {
      console.log(a)
   }
 }

 console.log(foo()) // output function goo

 let result = foo();
 console.log(result()) // output  * 5 *
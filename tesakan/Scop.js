const i = 0;

function foo() {
   const i = 2;

   function doo() {
      const i = 3;

      function goo() {
         const i = 4;
         console.log(i)
      }
      goo()
   }
   doo();

}

console.log(foo())
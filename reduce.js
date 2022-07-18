
//veradardznel nor object vori mej keys -r@ number -ner en isk valuen menq ktanq urish arrayic
let array = [{ key: '3a' }, { key: 444 }, { key: 3 }, { key: 19 }, { key: '3ss' }, { key: '4' }, { key: 's3' }, { key: 191 }, { key: '3' }, { key: 43 }, { key: 33 }];

const places = ['first', 'second', 'third','forth'];

function change(arr, places) {
   return arr.filter(item => typeof item.key === "number")
      .reduce((curr, element, index) => {
         curr.push({[element.key]: places[index% places.length]})
         return curr
      },[])
}

console.log(change(array,places))
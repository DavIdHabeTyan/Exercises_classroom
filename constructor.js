function Counter(initalizationNumber){
    this.number = initalizationNumber;

    this.increment = function(){
        this.number++
    }

    this.decrement =function(){
        this.number--
    }

    this.getCount = function (){
        return    this.number
    }
}

const counter = new Counter(10);
const count = counter.getCount()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getCount())


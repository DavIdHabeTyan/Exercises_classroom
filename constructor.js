/*
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


 */


/// check salary
function User(name, age){
    this.firstName = name;
    this.age = age;

    this.setSalary  = function (salary) {
        this.setSalary = salary
    }

    this.getSalary = function (){
        return this.setSalary
    }
}

const user = new User("John", 23);
user.setSalary(1500);
console.log(user.getSalary())

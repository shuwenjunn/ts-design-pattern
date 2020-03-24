abstract class Animal {
    public name;

    public constructor(name) {
        this.name = name;
    }

    public abstract sayHi();
}

class Cat extends Animal {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

function copyFields<T extends U,U>(target:T,source:U):T{
    for(let id in source){
        target[id]=(<T>source)[id]
    }
    return target
}

let cat = new Cat('Tom');
cat.sayHi()
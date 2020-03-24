// 访问者模式（Visiter）

// 定义：
// 将作用于某种数据结构中的各元素的操作分离出来封装成独立的类（访问者），使其在不改变数据结构的前提下可以添加作用于这些元素的新的操作，为数据结构中的每个元素提供多种访问方式。
// 它将对数据的操作与数据结构进行分离，是行为类模式中最复杂的一种模式。

// 主要角色：
// Visitor：表示访问者的抽象类，用于声明对数据结构中xxx元素访问的visit(xxx)方法。
// ConcreteVisitor：表示具体的访问者，继承Visitor并对其声明的抽象方法提供具体实现。
// Element：表示元素的抽象类，即访问者实际要访问的对象，Element角色需要对访问者提供一个开放的接口，即accept方法，该方法的参数就是Visitor角色。
// ConcreteElement：表示具体的元素，提供accept方法的实现。
// ObjectStructure：负责处理Element元素的集合，即表示数据结构的类。

// 案例：
// 有一片果园，果园里已经挖好了大大小小的坑，假设大的坑用来种苹果树，小的坑用来种桔子树。
// 类比于上述观察者模式中的 角色我们不难发现，大的坑和小的坑分别表示两种具体的元素ConcreteElement，树农表示访问者(ConcreteVisitor)，坑需要接受树农的访问，而果园就是容纳这些坑的数据结构。
// 一个接受一个访问者的访问，针对该元素的行为方法在访问者中定义

interface Hole {
    accept(visiter: Visiter): void
}

class AppleHole implements Hole {
    public index: number

    constructor(index: number) {
        this.index = index
    }

    accept(visiter: Visiter): void {
        visiter.plantApple(this)
    }

    getIndex(): number {
        return this.index
    }
}

class OrangeHole implements Hole {
    public index: number

    constructor(index: number) {
        this.index = index
    }

    accept(visiter: Visiter): void {
        visiter.plantOrange(this)
    }

    getIndex(): number {
        return this.index
    }
}

// abstract class Visiter {
//     abstract plant(hole: AppleHole): void
//     abstract plant(hole: OrangeHole): void
// }

interface Visiter {
    plantApple(hole: AppleHole): void

    plantOrange(hole: OrangeHole): void
}

class Farmer implements Visiter {
    plantApple(hole: AppleHole): void {
        console.log(`访问${hole.getIndex()}号苹果树`)
    }

    plantOrange(hole: OrangeHole): void {
        console.log(`访问${hole.getIndex()}号橘子树`)
    }
}

class Orchard {
    public holeList: Hole[]

    constructor() {
        this.holeList = []
    }

    addHole(hole: Hole) {
        this.holeList.push(hole)
    }

    accept(farmer: Visiter) {
        this.holeList.forEach(hole => {
            hole.accept(farmer)
        })
    }
}

const orchard = new Orchard() // 创建果园
orchard.addHole(new AppleHole(1))
orchard.addHole(new AppleHole(2))
orchard.addHole(new AppleHole(3))
orchard.addHole(new OrangeHole(4))
orchard.addHole(new OrangeHole(5))
orchard.accept(new Farmer())




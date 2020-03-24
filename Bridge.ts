// 桥（Bridge）模式

// 定义：
// 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。

// 主要角色：
// 抽象化（Abstraction）角色：定义抽象类，并包含一个对实现化对象的引用。
// 扩展抽象化（Refined    Abstraction）角色：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。
// 实现化（Implementor）角色：定义实现化角色的接口，供扩展抽象化角色调用。
// 具体实现化（Concrete Implementor）角色：给出实现化角色接口的具体实现。

// 示例：
// 想要盖楼，建造的任务可以承包给开发商1（具体实现化角色），也可以承包给开发商2(具体实现化角色)。楼（抽象类），可以拓展成办公楼（抽象类拓展），办公楼
// （抽象类拓展）。

//包按照用途分为手提包和钱包，按照颜色分可以分为红色和绿色

interface Color {
    showColor(): string
}

class Red implements Color {
    showColor(): string {
        return "红色"
    }
}

class Green implements Color {
    showColor(): string {
        return "绿色"
    }
}

abstract class Bag {
    protected color: Color

    constructor(color: Color) {
        this.color = color
    }

    abstract getName(): void
}

class HandBag extends Bag {
    getName(): void {
        console.log(`手包是${this.color.showColor()}`)

    }
}

class Wallet extends Bag {
    getName(): void {
        console.log(`钱包是${this.color.showColor()}`)
    }
}


new Wallet(new Red()).getName()
new Wallet(new Green()).getName()
new HandBag(new Green()).getName()
new HandBag(new Red()).getName()

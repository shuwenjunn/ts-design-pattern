// 建造者（Builder）

// 定义：
// 指将一个复杂对象的构造与它的表示分离，使同样的构建过程可以创建不同的表示，这样的设计模式被称为建造者模式。
// 它是将一个复杂的对象分解为多个简单的对象，然后一步一步构建而成。它将变与不变相分离，即产品的组成部分是不变的，但每一部分是可以灵活选择的。

// 主要角色：
// 产品角色（Product）：它是包含多个组成部件的复杂对象，由具体建造者来创建其各个滅部件。
// 抽象建造者（Builder）：它是一个包含创建产品各个子部件的抽象方法的接口，通常还包含一个返回复杂产品的方法 getResult()。
// 具体建造者(Concrete Builder）：实现 Builder 接口，完成复杂产品的各个部件的具体创建方法。
// 指挥者（Director）：它调用建造者对象中的部件构造与装配方法完成复杂对象的创建，在指挥者中不涉及具体产品的信息。

// 示例：
// 用建造者（Builder）模式描述客厅装修。

// 分析：
// 客厅装修是一个复杂的过程，它包含墙体的装修、电视机的选择、沙发的购买与布局等。
// 客户把装修要求告诉项目经理，项目经理指挥装修工人一步步装修，最后完成整个客厅的装修与布局，所以本实例用建造者模式实现比较适合。

// 这里客厅是产品，包括墙、电视和沙发等组成部分。具体装修工人是具体建造者，他们负责装修与墙、电视和沙发的布局。
// 项目经理是指挥者，他负责指挥装修工人进行装修。

class Parlour {
    private wall: string
    private TV: string
    private sofa: string

    setWall(wall: string) {
        this.wall = wall
    }

    setTV(TV: string) {
        this.TV = TV
    }

    setSofa(sofa: string) {
        this.sofa = sofa
    }

    show() {
        console.log(`${this.wall} ${this.TV} ${this.sofa}`)
    }
}

abstract class Decorator {
    protected Parlour: Parlour

    constructor() {
        this.Parlour = new Parlour()
    }

    abstract buildWall(): void

    abstract buildTV(): void

    abstract buildSofa(): void

    getResult(): Parlour {
        return this.Parlour
    }
}

class ConcreteDecorator1 extends Decorator {

    buildSofa(): void {
        this.Parlour.setSofa("sofa1")
    }

    buildTV(): void {
        this.Parlour.setTV("tv1")
    }

    buildWall(): void {
        this.Parlour.setWall("wall1")
    }

}

class ConcreteDecorator2 extends Decorator {

    buildSofa(): void {
        this.Parlour.setSofa("sofa2")
    }

    buildTV(): void {
        this.Parlour.setTV("tv2")
    }

    buildWall(): void {
        this.Parlour.setWall("wall2")
    }
}

class ProjectManager {
    private builder: Decorator;

    constructor(builder: Decorator) {
        this.builder = builder
    }

    build(): Parlour {
        this.builder.buildSofa()
        this.builder.buildWall()
        this.builder.buildTV()
        return this.builder.getResult()
    }
}


new ProjectManager(new ConcreteDecorator1()).build().show()

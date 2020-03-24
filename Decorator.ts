// 装饰（Decorator）模式

// 定义：
// 指在不改变现有对象结构的情况下，动态地给该对象增加一些职责（即增加其额外功能）的模式，它属于对象结构型模式。

// 主要角色：
// 抽象构件（Component）角色：定义一个抽象接口以规范准备接收附加责任的对象。
// 具体构件（Concrete Component）角色：实现抽象构件，通过装饰角色为其添加一些职责。
// 抽象装饰（Decorator）角色：继承抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件的功能。
// 具体装饰（ConcreteDecorator）角色：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任。

// 示例
// 建造了一个房子，房子建造完成后需要装修，比如添加家具用来装饰房子。

interface IHouse {
    buildHouse(): void
}

class House implements IHouse {
    buildHouse(): void {
        console.log("建造好一个房子")
    }
}

//装修房子抽象类 抽象装饰角色
abstract class DecoratorHouse implements IHouse {
    private house: IHouse

    constructor(house: IHouse) {
        this.house = house
    }

    buildHouse(): void {
        this.house.buildHouse()
    }
}

// 具体装修（具体装饰角色）给房子添置家具
class AddFurniture extends DecoratorHouse {
    constructor(house: IHouse) {
        super(house)
    }

    buildHouse(): void {
        super.buildHouse()
        console.log("给房子添置家具")
    }
}

new AddFurniture(new House()).buildHouse()


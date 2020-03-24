//工厂模式FactoryMethod

// 定义：
// 定义一个创建产品对象的工厂接口，将产品对象的实际创建工作推迟到具体子工厂类当中。这满足创建型模式中所要求的“创建与使用相分离”的特点。

// 主要角色：
// 抽象工厂（Abstract Factory）：提供了创建产品的接口，调用者通过它访问具体工厂的工厂方法 newProduct() 来创建产品。
// 具体工厂（ConcreteFactory）：主要是实现抽象工厂中的抽象方法，完成具体产品的创建。
// 抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能。
// 具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它同具体工厂之间一一对应。

// 示例：
// A汽车公司生产suv，b汽车公司生产公交车

// 抽象工厂
interface IFactory {
    creatCar(): ICar
}

// 抽象产品
interface ICar {
    getCarName(): void
}

// 具体工厂
class SuvFactory implements IFactory {
    creatCar(): ICar {
        return new Suv()
    }
}

// 具体工厂
class BusFactory implements IFactory {
    creatCar(): ICar {
        return new Bus()
    }
}

// 具体产品
class Suv implements ICar {
    getCarName(): void {
        console.log("我是suv")
    }
}

// 具体产品
class Bus implements ICar {
    getCarName(): void {
        console.log("我是公交车")
    }
}

// 调用
const busFactory = new BusFactory()
busFactory.creatCar().getCarName()
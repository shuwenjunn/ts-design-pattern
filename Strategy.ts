// 策略模式: 该模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户。
// 策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。

// 策略模式的主要角色如下。
// 抽象策略（Strategy）类：定义了一个公共接口，各种不同的算法以不同的方式实现这个接口，环境角色使用这个接口调用不同的算法，一般使用接口或抽象类实现。
// 具体策略（Concrete Strategy）类：实现了抽象策略定义的接口，提供具体的算法实现。
// 环境（Context）类：持有一个策略类的引用，最终给客户端调用。

// 在古时候，从北京到上海可以选的的交通方式有步行，骑马。但是现代社会可以坐飞机，火车等方式。程序希望可以选择新的交通方式（策略）去上海。

//定义接口 需要实现的功能是去上海 goShangHai，无论任何交通方式都应该实现goShangHai方法.

//ts 相关参考：https://github.com/xcatliu/typescript-tutorial/blob/master/advanced/class-and-interfaces.md

// 抽象策略（Strategy）类，规定各个实体类需要实现的方法。
interface Way {
    goShangHai(): void
}

//具体策略（Concrete Strategy）类
class Walk implements Way {
    goShangHai(): void {
        console.log("步行去上海")
    }
}

class Riding implements Way {
    goShangHai(): void {
        console.log("骑马去上海")
    }
}

class Plane implements Way {
    goShangHai(): void {
        console.log("坐飞机去上海")
    }
}

class Train implements Way {
    goShangHai(): void {
        console.log("坐火车去上海")
    }
}

// 环境（Context）类
class StrategyContext {
    private way: Way

    public setWay(way: Way) {
        this.way = way
    }

    public getWay(): Way {
        return this.way
    }

    public goShanghai(): void {
        this.way.goShangHai()
    }
}

// 调用
let c = new StrategyContext()
c.setWay(new Train())
c.goShanghai()
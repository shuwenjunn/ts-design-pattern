//外观模式

// 定义：
// 是一种通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问的模式。
// 该模式对外有一个统一接口，外部应用程序不用关心内部子系统的具体的细节，这样会大大降低应用程序的复杂度，提高了程序的可维护性。

// 主要角色：
// 外观（Facade）角色：为多个子系统对外提供一个共同的接口。
// 子系统（Sub System）角色：实现系统的部分功能，客户可以通过外观角色访问它。
// 客户（Client）角色：通过一个外观角色访问各个子系统的功能。

// 实现

class Facade {
    private subSystem01: SubSystem01
    private subSystem02: SubSystem02
    private subSystem03: SubSystem03
    constructor(){
        this.subSystem01=new SubSystem01()
        this.subSystem02=new SubSystem02()
        this.subSystem03=new SubSystem03()
    }

    methord(){
        this.subSystem01.methord()
        this.subSystem02.methord()
        this.subSystem03.methord()
    }
}

class SubSystem01{
    methord(){
        console.log("系统1被调用")
    }
}

class SubSystem02{
    methord(){
        console.log("系统2被调用")
    }
}

class SubSystem03{
    methord(){
        console.log("系统3被调用")
    }
}

new Facade().methord()
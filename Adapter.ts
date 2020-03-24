//适配器模式

// 定义：
// 将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。

// 主要角色：
// 目标（Target）接口：当前系统业务所期待的接口，它可以是抽象类或接口。
// 适配者（Adaptee）类：它是被访问和适配的现存组件库中的组件接口。
// 适配器（Adapter）类：它是一个转换器，通过继承或引用适配者的对象，把适配者接口转换成目标接口，让客户按目标接口的格式访问适配者。

// 实现 组合方式 对象适配器 


interface Target {
    request():void
}

//被适配者
class Adaptee implements Target{
    request(){
        console.log("具体适配者被调用")
    }
}

class Adapter implements Target{
    private adaptee:Adaptee
    constructor(adaptee:Adaptee){
        this.adaptee=adaptee
    }
    request(){
        console.log("执行额外的适配代码")
        this.adaptee.request()
    }
}

//调用
new Adapter(new Adaptee()).request()
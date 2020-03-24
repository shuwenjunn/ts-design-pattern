//代理模式

// 定义：
// 由于某些原因需要给某对象提供一个代理以控制对该对象的访问。
// 这时，访问对象不适合或者不能直接引用目标对象，代理对象作为访问对象和目标对象之间的中介。

// 主要角色：
// 抽象主题（Subject）类：通过接口或抽象类声明真实主题和代理对象实现的业务方法。
// 真实主题（Real Subject）类：实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象。
// 代理（Proxy）类：提供了与真实主题相同的接口，其内部含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。

// 实现

interface Subject {
    request():void
}

class RealSubject implements Subject{
    request(){
        console.log("真实目标被调用")
    }
}

class ProxyObj implements Subject{
    private subject: Subject
    constructor(subject:Subject){
        this.subject=subject
    }

    request(){
        console.log("代理对象执行一些操作")
        this.subject.request()
        console.log("代理对象执行一些操作")
    }
}

new ProxyObj(new RealSubject()).request()
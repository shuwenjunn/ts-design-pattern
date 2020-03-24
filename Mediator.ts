//适配器模式

// 定义：
// 定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，且可以独立地改变它们之间的交互。

// 主要角色：
// 抽象中介者（Mediator）角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法。
// 具体中介者（ConcreteMediator）角色：实现中介者接口，定义一个 List 来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色。
// 抽象同事类（Colleague）角色：定义同事类的接口，保存中介者对象，提供同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能。
// 具体同事类（Concrete Colleague）角色：是抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互。

// 实现

abstract  class Mediator {
    abstract registe(colleague:Colleague):void 
    abstract relay(colleague:Colleague):void
}

abstract class Colleague {
    abstract setMediator(mediator:Mediator):void
    abstract receive():void
    abstract send():void
}

class ConcreteMediator extends Mediator {
    private colleagueList:Colleague[]
    constructor(){
        super()
        this.colleagueList=[]
    }

    registe(colleague:Colleague){
        this.colleagueList.push(colleague)
        colleague.setMediator(this)
    }

    // 中介转发
    relay(colleague:Colleague){
        this.colleagueList.forEach(it=>{
            it.receive()
        })
    }
}

class ConcreteColleague1 extends Colleague {
    private mediator: Mediator
    setMediator(mediator: Mediator): void {
        this.mediator=mediator
    }
    receive(): void {
        console.log("具体同事1收到消息")
    }
    send(): void {
        console.log("具体同事1发送消息")
        this.mediator.relay(this)
    }
}

class ConcreteColleague2 extends Colleague {
    private mediator: Mediator
    setMediator(mediator: Mediator): void {
        this.mediator=mediator
    }
    receive(): void {
        console.log("具体同事2收到消息")
    }
    send(): void {
        console.log("具体同事2发送消息")
        this.mediator.relay(this)
    }
}

const mediator=new ConcreteMediator()
const colleague1=new ConcreteColleague1()
const colleague2=new ConcreteColleague2()
mediator.registe(colleague1)
mediator.registe(colleague2)
colleague1.send()
console.log("---------")
colleague2.send()
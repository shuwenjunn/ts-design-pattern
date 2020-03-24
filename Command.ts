//命令模式 Command

// 定义：
// 将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。
// 这样两者之间通过命令对象进行沟通，这样方便将命令对象进行储存、传递、调用、增加与管理。

// 主要角色：
// 抽象命令类（Command）角色：声明执行命令的接口，拥有执行命令的抽象方法 execute()。
// 具体命令角色（Concrete    Command）角色：是抽象命令类的具体实现类，它拥有接收者对象，并通过调用接收者的功能来完成命令要执行的操作。
// 实现者/接收者（Receiver）角色：执行命令功能的相关操作，是具体命令对象业务的真正实现者。
// 调用者/请求者（Invoker）角色：是请求的发送者，它通常拥有很多的命令对象，并通过访问命令对象来执行相关请求，它不直接访问接收者。

// 代码示例

class Invoker {
    private command: Command

    constructor(cmd: Command) {
        this.command = cmd
    }

    setCmd(cmd: Command) {
        this.command = cmd
    }

    invoke() {
        this.command.execute()
    }

}

interface Command {
    execute(): void
}

class ConcreteCommandA implements Command {
    private receiver: ReceiverA

    constructor() {
        this.receiver = new ReceiverA()
    }

    execute(): void {
        this.receiver.handleCommand()
    }
}

class ConcreteCommandB implements Command {
    private receiver: ReceiverB

    constructor() {
        this.receiver = new ReceiverB()
    }

    execute(): void {
        this.receiver.handleCommand()
    }
}

class ReceiverA {
    handleCommand() {
        console.log("接收者A执行命令")
    }
}

class ReceiverB {
    handleCommand() {
        console.log("接收者B执行命令")
    }
}

const invoke = new Invoker(new ConcreteCommandA())
invoke.invoke()
invoke.setCmd(new ConcreteCommandB())
invoke.invoke()
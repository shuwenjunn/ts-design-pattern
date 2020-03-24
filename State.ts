// 状态模式（State）

// 定义：
// 对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为。

//状态模式把受环境改变的对象行为包装在不同的状态对象里，其意图是让一个对象在其内部状态改变的时候，其行为也随之改变。

// 主要角色：
// 环境（Context）角色：也称为上下文，它定义了客户感兴趣的接口，维护一个当前状态，并将与状态相关的操作委托给当前状态对象来处理。
// 抽象状态（State）角色：定义一个接口，用以封装环境对象中的特定状态所对应的行为。
// 具体状态（Concrete    State）角色：实现抽象状态所对应的行为。

// 案例：
// 开关，一个开关如果是开状态按一下则变成关状态，如果是关状态按一下是开状态

// 抽象状态类
interface IState {
    toggle(context: ButtonContext): void // 按开关方法
}

class ButtonContext {
    public state: IState

    constructor() {
        this.state = new CloseState()
    }

    setState(state: IState) {
        this.state = state
    }

    getState() {
        return this.state
    }

    handle() {
        this.state.toggle(this)
    }
}

class OpenState implements IState {

    toggle(context: ButtonContext): void {
        console.log("当前是开状态，将变成关闭状态")
        context.setState(new CloseState())
    }
}

class CloseState implements IState {

    toggle(context: ButtonContext): void {
        console.log("当前是关闭状态，将变成开状态")
        context.setState(new OpenState())
    }
}

const ctx=new ButtonContext()
ctx.handle()
ctx.handle()
ctx.handle()

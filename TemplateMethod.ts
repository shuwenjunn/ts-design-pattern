// 模板模式

//抽象类 定义模板方法run
abstract class AbstractClass {
    //其中step为抽象方法需要由子类实现
    public run() {// 你(具体)不用调用我，我（抽象）来调用你
        this.step1()
        this.step2()
        this.step3()
        this.step4()
        this.step5()
    }

    private step1() {
        console.log("执行步骤一")
    }

    private step3() {
        console.log("执行步骤三")
    }

    private step5() {
        console.log("执行步骤五")
    }

    public abstract step2()

    public abstract step4()

}

// 具体子类 需要实现抽象类中的抽象方法
class ConcreteClass extends AbstractClass {
    public step2() {
        console.log("执行步骤二")
    }

    public step4() {
        console.log("执行步骤四")
    }
}

//具体调用

new ConcreteClass().run()


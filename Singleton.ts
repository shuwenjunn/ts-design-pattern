//  单例模式（Singleton）

// 定义：
// 指一个类只有一个实例，且该类能自行创建这个实例的一种模式。

class HungrySingleton {
    public instance: HungrySingleton
    public name: string

    private constructor() {
        this.name = "恶汉模式"
    }

    static getInstanace(): HungrySingleton {
        return new HungrySingleton()
    }
}

console.log(HungrySingleton.getInstanace().name)
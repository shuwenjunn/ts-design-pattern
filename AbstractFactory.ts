// 抽象工厂模式（Abstract Factory）（family factory）

// 定义：
// 是一种为访问类提供一个创建一组相关或相互依赖对象的接口，且访问类无须指定所要产品的具体类就能得到同族的不同等级的产品的模式结构。

// 主要角色：
// 抽象工厂（Abstract Factory）：提供了创建产品的接口，它包含多个创建产品的方法 newProduct()，可以创建多个不同等级的产品。
// 具体工厂（Concrete Factory）：主要是实现抽象工厂中的多个抽象方法，完成具体产品的创建。
// 抽象产品（Product）：定义了产品的规范，描述了产品的主要特性和功能，抽象工厂模式有多个抽象产品。
// 具体产品（ConcreteProduct）：实现了抽象产品角色所定义的接口，由具体工厂来创建，它 同具体工厂之间是多对一的关系。

// 示例：
// 如需新创建一个web前端项目，可选择的技术方案有vue和react，其中vue依赖vuex和vue-router，react依赖redux和react-router。如果选择了vue
// 则必须使用vuex和vue-router，而不能使用vuex和react-router作为一组。这就是定义中的创建一组相关或者相互依赖的对象。vue作为一组，react作为一组。
// 本示例不涉及vue及react具体内容。

// model 用来处理数据的，vuex和redux的抽象接口
interface IModel {
    handleData(): void
}

// router 用来处理路由的，reactRouter和 vueRouter的抽象接口
interface IRouter {
    handleRouter(): void
}

//抽象工厂
interface IFrame {
    createModel(): IModel

    createRouter(): IRouter
}

//具体产品
class ReactRouter implements IRouter {
    handleRouter(): void {
        console.log("reactRouter处理路由")
    }
}

//具体产品
class ReactRedux implements IModel {
    handleData(): void {
        console.log("reactRedux 处理数据")
    }
}

//具体产品
class VueRouter implements IRouter {
    handleRouter(): void {
        console.log("VueRouter 处理路由")
    }
}

//具体产品
class Vuex implements IModel {
    handleData(): void {
        console.log("Vuex 处理数据")
    }
}

// react具体工厂
class ReactFactory implements IFrame {
    createModel(): IModel {
        return new ReactRedux()
    }

    createRouter(): IRouter {
        return new ReactRouter()
    }
}

// vue具体工厂
class VueFactory implements IFrame {
    createModel(): IModel {
        return new Vuex()
    }

    createRouter(): IRouter {
        return new VueRouter()
    }
}

new VueFactory().createModel().handleData()
new VueFactory().createRouter().handleRouter()
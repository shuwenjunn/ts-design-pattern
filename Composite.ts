//组合模式

// 定义：
// 有时又叫作部分-整体模式，它是一种将对象组合成树状的层次结构的模式，用来表示“部分-整体”的关系，使用户对单个对象和组合对象具有一致的访问性。

// 主要角色：
// 抽象构件（Component）角色：它的主要作用是为树叶构件和树枝构件声明公共接口，并实现它们的默认行为。在透明式的组合模式中抽象构件还声明访问和管理子类的接口；在安全式的组合模式中不声明访问和管理子类的接口，管理工作由树枝构件完成。
// 树叶构件（Leaf）角色：是组合中的叶节点对象，它没有子节点，用于实现抽象构件角色中 声明的公共接口。
// 树枝构件（Composite）角色：是组合中的分支节点对象，它有子节点。它实现了抽象构件角色中声明的接口，它的主要作用是存储和管理子部件，通常包含 Add()、Remove()、GetChild() 等方法。

// 实现

interface Component {
    operation(): void
}

class Leaf implements Component {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    operation(): void {
        console.log(`${this.name}被访问`)
    }
}

class Composite implements Component {
    private leafList: Component[]

    constructor() {
        this.leafList = []
    }

    addLeaf(leaf: Component) {
        this.leafList.push(leaf)
    }

    operation(): void {
        this.leafList.forEach(leaf => {
            leaf.operation()
        })
    }
}

const c0 = new Composite()
const c1 = new Composite()
const leaf1 = new Leaf("树叶1")
const leaf2 = new Leaf("树叶2")
const leaf3 = new Leaf("树叶3")
c1.addLeaf(leaf1)
c1.addLeaf(leaf2)
c1.addLeaf(leaf3)
c0.addLeaf(c1)
c0.operation()
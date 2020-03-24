// 享元（Flyweight）模式

// 定义：
// 运用共享技术来有効地支持大量细粒度对象的复用。
// 它通过共享已经存在的又橡来大幅度减少需要创建的对象数量、避免大量相似类的开销，从而提高系统资源的利用率。

// 主要角色：
// 抽象享元角色（Flyweight）:是所有的具体享元类的基类，为具体享元规范需要实现的公共接口，非享元的外部状态以参数的形式通过方法传入。
// 具体享元（Concrete Flyweight）角色：实现抽象享元角色中所规定的接口。
// 非享元（Unsharable Flyweight)角色：是不可以共享的外部状态，它以参数的形式注入具体享元的相关方法中。
// 享元工厂（Flyweight Factory）角色：负责创建和管理享元角色。当客户对象请求一个享元对象时，享元工厂检査系统中是否存在符合要求的享元对象，如果存在则提供给客户；如果不存在的话，则创建一个新的享元对象。


// 黑白五子棋或者围棋只有两种颜色-黑白，如果我们把棋子作为一个抽象类Chess，黑棋BlackChess和白棋WhiteChess分别作为继承抽象类的具体类，那么每下一步都需要new一个新的棋子对象，
// 如此下来会产生大量的黑白棋对象。仔细观察黑白棋，不难发现黑白棋对象其实都一样，唯一不同的是其位置的变化。
// 那么是否有一种方法可以实现这样的效果：不用创建大量的黑白棋对象，但是也能准确的实现其位置的变化？答案是：有的。

// 参考 https://blog.csdn.net/nobody_1/article/details/86679719

abstract class Chess {
    private type: string

    constructor(type: string) {
        this.type = type
    }

    getType(): string {
        return this.type
    }

    abstract operation(local:Local): void
}


class BlackWhiteChess extends Chess {
    operation(local: Local): void {
        console.log(this.getType()+" "+local.toString())
    }
}

class Local {
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    toString(): string {
        return `横坐标：${this.x},纵坐标${this.y}`
    }

}

class ChessFactory {
    private flyWeightMap: {}

    constructor() {
        this.flyWeightMap = {}
    }

    public static getChessFactory() {
        return new ChessFactory()
    }

    getChess(type: string) {
        if (!this.flyWeightMap[type]) {
            this.flyWeightMap[type] = new BlackWhiteChess(type)
        }
        return this.flyWeightMap[type]
    }
}

//调用
const black = "black";
		const white = "white";
		const chessFactory = ChessFactory.getChessFactory(); // 共享池
		let chess, _chess, chess2, _chess2;  // 棋子
		
		chess = chessFactory.getChess(black); // 黑棋
		_chess = chessFactory.getChess(black); // 黑棋
		chess.operation(new Local(5, 5));
		_chess.operation(new Local(5, 6));
		
		
		chess2 = chessFactory.getChess(white); // 白棋
		_chess2 = chessFactory.getChess(white); // 白棋
		chess2.operation(new Local(6, 6));
		_chess2.operation(new Local(7, 7));



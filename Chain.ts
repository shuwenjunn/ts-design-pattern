//责任链模式

// 定义：
// 为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链
// 当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止

// 主要角色：
// 抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。
// 具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。
// 客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。

// 请假需要部门主管批准 然后需要boss批准。如果请 3天假可以直接主管批准，3天的7天需要老板批准，大于七天不批准

abstract class Handler {
    private next: Handler

    setNext(next: Handler) {
        this.next = next
    }

    getNext(): Handler {
        return this.next
    }

    abstract handleRequest(day: number): void
}

// 主管类
class Charge extends Handler {
    handleRequest(day: number): void {
        if (day <= 3) {
            console.log("主管允许请假3天")
        } else {
            this.getNext().handleRequest(day)
        }
    }
}

class Boss extends Handler {
    handleRequest(day: number): void {
        if (day <= 7) {
            console.log("老板允许请假七天")
        } else {
            console.log("请假时间太多，不批")
        }
    }
}

const charge = new Charge()
const boss = new Boss()
charge.setNext(boss)
charge.handleRequest(8)
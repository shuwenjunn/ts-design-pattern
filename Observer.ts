//  观察者模式

// 定义：
// 指多个对象间存在一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
// 这种模式有时又称作发布-订阅模式、模型-视图模式，它是对象行为型模式。

// 主要角色：
// 抽象主题（Subject）角色：也叫抽象目标类，它提供了一个用于保存观察者对象的聚集类和增加、删除观察者对象的方法，以及通知所有观察者的抽象方法。
// 具体主题（Concrete Subject）角色：也叫具体目标类，它实现抽象目标中的通知方法，当具体主题的内部状态发生改变时，通知所有注册过的观察者对象。
// 抽象观察者（Observer）角色：它是一个抽象类或接口，它包含了一个更新自己的抽象方法，当接到具体主题的更改通知时被调用。
// 具体观察者（Concrete Observer）角色：实现抽象观察者中定义的抽象方法，以便在得到目标的更改通知时更新自身的状态。

// 案例：
// 微信公众号就是一个典型的观察者模式，用户关注了一个公众号，当公众号发布新的文章时，所有关注该公众号的用户都将收到通知。当用户收到到通知时，有的用户可能阅读该文章，有的
// 用户可能阅读并且评论，甚至有的人觉得这个文章的内容有问题选择举报。这里用户作为观察者，不同观察者收到新的推送文章时做出的反应不一样。

// 分析：
//公众号作为具体被观察的目标，抽象主题角色（抽象目标）定义了新增粉丝，等方法


//AbstractAuthor 抽象公众号类，描述具体公众号需要做的事情
abstract class AbstractAuthor {
    protected wxUserList: WxUser[] = [] //保存一系列观察者

    //添加观察者
    addFans(fans: WxUser): void {
    }

    //删除观察者
    removeFans(fans: WxUser): void {
    }

    //发布新文章
    publishArticle(): void {
    }
}

// 定义一个实际的公众号，需要具体化抽象公众号类的抽象方法
class ActualWeChatSubscription extends AbstractAuthor {

    addFans(fans: WxUser): void {
        this.wxUserList.push(fans)
    }

    removeFans(fans: WxUser): void {
        this.wxUserList.pop()
    }

    //如果发布新文章则通知所有关注该公众号的用户,每个用户会做出不同反应
    publishArticle(): void {
        this.wxUserList.forEach(wxUser => {
            wxUser.doThings()
        })
    }
}

//抽象的微信用户
interface WxUser {
    doThings(): void
}

class User1 implements WxUser {
    doThings(): void {
        console.log("user1阅读该文章")
    }
}

class User2 implements WxUser {
    doThings(): void {
        console.log("user2阅读并且评论该文章")
    }
}

class User3 implements WxUser {
    doThings(): void {
        console.log("user3阅读该文章，该文章质量过低，举报了。")
    }
}

const target = new ActualWeChatSubscription()
target.addFans(new User1())
target.addFans(new User2())
target.addFans(new User3())
target.publishArticle()
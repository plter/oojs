oojs
====

Objective JavaScript

使用说明：[https://github.com/plter/oojs](https://github.com/plter/oojs)

示例代码如下：
``` js 
function A() {
    var _this = {};

    function say() {
        console.log("Hello A")
    }

    _this.helloA = function () {
        say();
    };

    return _this;
}

function B() {
    var _this = {};

    function say() {
        console.log("Hello B")
    }

    _this.helloB = function () {
        say();
    };

    return _this;
}

function Y() {
    var _this = {};
    oojs.copyFields(_this,A());
    oojs.copyFields(_this,B());
    return _this;
}
var y = Y();
y.helloA();
y.helloB();
```
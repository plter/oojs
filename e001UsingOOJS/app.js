/**
 * Created by plter on 8/25/14.
 */
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

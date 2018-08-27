//系统基类
function baseObject() {

}
baseObject.prototype.doSomething = function doSomething() {
        console.log("doSomething after")
    }
    //包装方法
function methodRewrite(doSomething) {
    return function() {
        var e = arguments;
        console.log("i am " + e[0]);
        return doSomething.apply(this, e)
    }
}

var myObject = baseObject.prototype;
//调用包装方法
methodWrap(myObject, "doSomething", methodRewrite)

//包装方法
function methodWrap(object, method, func) {
    //获取prototype对应方法
    var m = object[method]
        //重新定义原始方法
    object[method] = func(m)
}

//各处调用
var m = new baseObject()
m.doSomething("swimming");

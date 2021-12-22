var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function func() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
func(1, 2, 3, 4, 5, 6);
//destructuring
var _a = ['hi', 100], var1 = _a[0], var2 = _a[1];
var _b = { student: true, age: 20 }, var3 = _b.student, var4 = _b.age;
function func2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
func2({ student: true, age: 20 });
function getMax() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var i = 0;
    x.forEach(function (x) {
        if (i <= x)
            i = x;
    });
    return i;
}
console.log(getMax(6, 3, 7, 2));
function objfunc(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objfunc({ user: 'kim', comment: [3, 5, 4], admin: false });
function func3(x) {
    console.log.apply(console, x);
}
func3([40, 'wine', false]);
//Type Narrowing
function fun4(a) {
    if (a && typeof a === 'string') { //undefined가 아니고 string인 경우만 발동
        console.log(a);
    }
}
function fun5(animal) {
    if ("swim" in animal) { // 유사하게 Fly 속성으로 Bird 타입인지 검사가능
        animal.swim;
    }
}
function fun6(x) {
    if (x.wheel === '4개') {
        console.log('x는 car 타입이에요');
    }
}
// never Type
function func() {
    // throw new Error()
    // while (1) {
    // } 
}
//public private
var User2 = /** @class */ (function () {
    function User2() {
        this.name = 'kim';
    }
    return User2;
}());
var User3 = /** @class */ (function () {
    function User3() {
        this.y = 10;
    }
    // protected x = 10;
    User3.x = 10;
    return User3;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User3));
var child = new User3();
console.log(child);
var User4 = /** @class */ (function () {
    function User4() {
    }
    User4.addOne = function (num) {
        User4.x += num;
    };
    User4.printX = function () {
        console.log(User4.x);
    };
    User4.x = 10;
    User4.y = 20;
    return User4;
}());
var p3 = new User4;
User4.addOne(3);
User4.addOne(4);
User4.printX();
var Square = /** @class */ (function () {
    function Square(x, y, c) {
        this.x = x;
        this.y = y;
        this.c = c;
    }
    Square.prototype.draw = function () {
        var _a = [Math.floor(Math.random() * 400), Math.floor(Math.random() * 400)], xPoint = _a[0], yPoint = _a[1];
        console.log(xPoint, yPoint);
        var paper = document.getElementById('paper');
        var paperOrigin = paper.innerHTML;
        var htmlcode = paperOrigin + "<div style='width:".concat(this.x, "px; height:").concat(this.y, "px; background:").concat(this.c, ";position: absolute; top:").concat(yPoint, "px; right:").concat(xPoint, "px'></div>");
        paper.innerHTML = htmlcode;
    };
    return Square;
}());
var sq = new Square(30, 30, 'red');
sq.draw();
sq.draw();
sq.draw();
sq.draw();
sq.draw();
sq.draw();
sq.draw();
sq.draw();
// generic 타입
function 함수1(x) {
    return x[0];
}
var a1 = 함수1([4, 2]);
var a2 = 함수1(['4', '2']);
console.log(a1);
// 타입 파라미터 제한두기
function func7(x) {
    return x - 1; //불확실함
}
var a3 = func7(100);
function func8(x) {
    return x.length; //불확실함
}
var a4 = func8('100');
function func9(x) {
    return x.length;
}
var data = '{"name" : "dog", "age" : 1 }';
console.log(JSON.parse(data));
function func10(x) {
    return JSON.parse(data);
}
console.log(func10(data));
var Person2 = /** @class */ (function () {
    function Person2(a) {
        this.name = a;
    }
    return Person2;
}());
var a5 = new Person2('어쩌구');
//tuple type
var dog = ['dog', true];
function func11() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
func11(111, '222');
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
var arr4 = ['동서녹차', 4000, true, false, true, true, false, true];
function func12() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function func13() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var str = [];
    var num = [];
    x.forEach(function (l) {
        if (typeof l === 'string')
            str.push(l);
        else
            num.push(l);
    });
    return [str, num];
}
console.log(func13('b', 5, 6, 8, 'a'));
console.log(name11 + 1);
// import {Age} from './test.d'
var 이름2 = '김';
var Car2 = /** @class */ (function () {
    function Car2(a) {
        this.model = a;
    }
    return Car2;
}());
var newCar = new Car2("Benz");
var obj1 = { name: "kim" };
Object.keys(obj1);
var car;

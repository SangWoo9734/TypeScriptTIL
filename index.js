var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var who = "kim"; //변수 타입 지정
// who = 123 에러발생
var peopel = ['kim', 'park']; //string 배열 생성
var info = { name: 'park' }; // ? 는 object 안에 있어도 되고 없어도 되고.
var myName = "string"; //타입을 변수로 지정해서 사용
function func(x) {
    return x * 2;
} // 이 함수는 무조건 숫자를 넘겨주고, 숫자를 return 해야된다.
var john = [123, true]; // 무조건 첫번째는 Number, 둘째는 Boolean
var tom = { name: 'kim', age: '123' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Primitive Type
var 이름 = "kim";
var 나이 = 50;
var 결혼여부 = true;
var member3 = ['kim', 'park']; // 문자만 담긴 배열만 할당 가능
var user = { user1: 'kim', user2: 'park' };
// Union, any, unknown
var a = 123; //union type : 타입 2개를 합친 새로운 타입
a = '123'; // 가능
var b = [1, '2', 3];
var c = { a: '123' };
var d1;
var d2; // any 타입 : 타입 제한을 해제, 일반 JS 변수처럼 사용
d1 = '123';
d1 = [];
var e; // unknown : 모든 자료형 허용, any 보다 안전 -> 
var f1 = d1; // f1에 걸려있던 string 제한이 풀려버림
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
//function parpmeter & return
// return 이 없을 경우 void  -> function func ( x :number) :void {}
function func(x) {
    return x * 2;
}
func(4); // 타입이 지정된 파라미터는 무조건 입력해야됨.
// function 숙1 (x? :string) :void {}
function 숙1(x) {
    if (x)
        console.log(x);
    else
        console.log('이름이 없습니다.');
}
function 숙2(x) {
    return x.toString().length;
}
function 숙3(x) {
    var score = 0;
    score += x[0];
    if (x[1])
        score += 500;
    if (x[2] == '상')
        score += 100;
    if (score >= 600)
        return '결혼가능';
}
// Narrowing & Assertion
//type narrowing -> type이 하나로 확정되지 않았을 경우
function func2(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else
        x + 1;
}
function func3(x) {
    var array = [];
    if (typeof x === 'number')
        array[0] = x;
    return array;
}
function func3(x) {
    var array = [];
    array[0] = x;
    return array;
}
function Na1(x) {
    var array = [];
    x.forEach(function (letter) {
        if (typeof letter === "string")
            array.push(parseInt(letter));
        else
            array.push(letter);
    });
    return array;
}
// console.log(Na1(['1', 2, '3']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function last(x) {
    if (Object.keys(x).includes('subject'))
        if (Array.isArray(x['subject']))
            return x['subject'][x['subject'].length - 1];
        else
            return x['subject'];
    else
        return 'Type Error';
}
var animal = 123;
var animal2 = { name: 'tiger', age: 10 };
var gf = {
    name: 'kim'
};
var l = { x: 0, y: 1 };
console.log(typeof l['x']);
console.log(typeof l['y']);
// Literal Types
var name1;
// name1 = 'park' // error, 123 값 만 사용가능
var isCouple;
function fun4(a) {
    return 1;
} // 변수로 2만 들어올 수 있고 결과값으로 1 또는 0만 return 가능하다
function rsp(a) {
    return ['가위'];
}
var 자료 = {
    name: 'kim'
}; // 1. object value의 값을 그대로 타입으로 지정해줌, 2. object 속성에 모두 readonly 속성을 부여
function 내함수(a) {
}
내함수(자료.name); // -> 이러면 사용 가능
var 함수 = function () {
    return 0;
};
var 회원정보 = {
    name: 'kim',
    plusone: function (a) {
        return parseInt(a) + 1;
    }
};
var cutZero = function (x) {
    if (x[0] === '0')
        x = x.slice(1, x.length);
    return x;
};
var removeDash = function (x) {
    if (typeof x === 'string') {
        while (x.includes('-')) {
            x = x.replace('-', '');
        }
        return x;
    }
};
console.log(cutZero('010'));
console.log(removeDash('010-2214-8430'));
var phone = function (a, b, c) {
    return c(b(a));
};
console.log(phone('010-1111-2222', cutZero, removeDash));
// Narrowing 할때 구체적인 instance 명을 적어주는게 좋다.
var link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
var btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log(1);
});
var btn2 = document.querySelector('#button2');
// let img = document.querySelector('#image')
var img = document.getElementById('image');
btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener('click', function () {
    if (img instanceof HTMLImageElement) {
        img.src = "new.jpg";
    }
});
var naver = document.querySelectorAll('.naver');
naver.forEach(function (x) {
    if (x instanceof HTMLAnchorElement) {
        x.href = 'https://kakao.com';
    }
});
var Personmaker = /** @class */ (function () {
    function Personmaker() {
        //class field 값
        this.data = 0;
    }
    return Personmaker;
}());
var Personmaker2 = /** @class */ (function () {
    function Personmaker2(name) {
        this.name = name;
    }
    Personmaker2.prototype.func = function () {
        console.log(this.name + "입니다.");
    };
    return Personmaker2;
}());
var p1 = new Personmaker();
var p2 = new Personmaker2('park');
p2.func();
var Car1 = /** @class */ (function () {
    function Car1(x, y) {
        this.name = x;
        this.price = y;
    }
    ;
    Car1.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car1;
}());
var car1 = new Car1('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
var Word = /** @class */ (function () {
    function Word() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.num = [];
        this.str = [];
        __spreadArray([], args, true).forEach(function (l) {
            if (typeof l === "string")
                _this.str.push(l);
            else if (typeof l === "number")
                _this.num.push(l);
        });
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
var square = { color: 'red', width: 100 };
var p = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var basket = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var product2 = { product: '청소기', price: 7000, card: false };
var calc1 = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    }
};

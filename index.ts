var who :string = "kim"; //변수 타입 지정
// who = 123 에러발생
var peopel :string[] = ['kim', 'park']; //string 배열 생성
var info :{name? : string } = {name : 'park'}; // ? 는 object 안에 있어도 되고 없어도 되고.

type myType = string | number;
let myName :myType = "string" //타입을 변수로 지정해서 사용

function func (x : number) :number {
    return x * 2;
} // 이 함수는 무조건 숫자를 넘겨주고, 숫자를 return 해야된다.

type Member = [number , boolean];
let john :Member = [123, true] // 무조건 첫번째는 Number, 둘째는 Boolean


type Member2 = {
    [key :string] : string,
}
let tom :Member2 = { name : 'kim', age : '123'};

class User {
    name : string;
    constructor (name : string) {
        this.name = name;
    }
}


// Primitive Type
let 이름 :string = "kim";
let 나이 :number = 50;
let 결혼여부 :boolean = true;
let member3 :string[] = ['kim', 'park'] // 문자만 담긴 배열만 할당 가능
let user :{user1? :string, user2 :string} = {user1 : 'kim', user2 : 'park'};

// Union, any, unknown
let a :number | string = 123; //union type : 타입 2개를 합친 새로운 타입
a = '123' // 가능

let b :(number | string)[] = [1, '2', 3]
let c :{a :(string | number)}= {a : '123'}

let d1 :any;
let d2 :unknown// any 타입 : 타입 제한을 해제, 일반 JS 변수처럼 사용
d1 = '123'
d1 = []

let e :unknown // unknown : 모든 자료형 허용, any 보다 안전 -> 

let f1 :string = d1 // f1에 걸려있던 string 제한이 풀려버림
// let f2 :string = d2 // f2에 걸려있던 제한이 풀리지 않고 Type Error 발생


type shool = {
    score :(number | boolean)[],
    teacher :string,
    friend : ( string| string[]),
}

let 학교:school = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

//function parpmeter & return
// return 이 없을 경우 void  -> function func ( x :number) :void {}
function func( x :number) :number { // 변수로 들어오는 값과, return 되는 값의 타입을 지정
    return x * 2
    
}
func(4); // 타입이 지정된 파라미터는 무조건 입력해야됨.
// function 숙1 (x? :string) :void {}
function 숙1 ( x :string | undefined) :void {
    if (x) console.log(x)
    else console.log('이름이 없습니다.')
}

function 숙2 ( x :string|number) :number {
    return x.toString().length;
}

function 숙3 (x :[number, boolean, string]) :(string | void) {
    let score :number = 0;

    score += x[0]

    if (x[1]) score += 500

    if (x[2] == '상') score += 100

    if (score >= 600) return '결혼가능'

}


// Narrowing & Assertion

//type narrowing -> type이 하나로 확정되지 않았을 경우
function func2 ( x :number | string ){
    if (typeof x === 'string') {
        return x + '1'
    }
    else x + 1
}

function func3 (x :number | string) :number[] {
    let array :number[] = []
    if (typeof x === 'number') array[0] = x;

    return array;
}

function func3 (x :number | string) :number[] {
    let array :number[] = []
    array[0] = x as number;

    return array;
}

function Na1 (x :(number | string)[]) {
    let array :number[] = []

    x.forEach((letter) => {
        if (typeof letter === "string")
            array.push(parseInt(letter))
        else
            array.push(letter)
    })

    return array
}

// console.log(Na1(['1', 2, '3']));

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }


function last (x :Object) :string {
    if ( Object.keys(x).includes('subject') )
        if (Array.isArray(x['subject']))
            return x['subject'][x['subject'].length -1]
        else return x['subject']
    else
        return 'Type Error'
}

// console.log(last( { subject : 'math' } ))  //이 경우 'math'를 return
// console.log(last( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
// console.log(last( { hello : 'hi' } ))  //이 경우 타입에러 나면 됩니다 

// type alias, Type 변수 만들기
type Animal = string | number | undefined;
let animal :Animal = 123;

type AnimalObj = {name : string, age : number}
let animal2 :AnimalObj = {name : 'tiger', age : 10}

// const 변수로 데이터 수정 막기
type Gf = {
   readonly name : string // 읽기 전용 데이터로 생성, 수정 불가
}
const gf :Gf = {
    name : 'kim'
}

// type 변수를 union type 으로 합치기
type Name = string;
type Age = number;
type Person = Name | Age; // string | number

// & 연산자로 object 타입 extend 하기
type PositionX = {x : number}
type PositionY = {y : number}
type PositionXY = PositionX & PositionY // {x : number, y : number}


type Position1 = {x : number, y : number}
type Position2 = {y : string}
type Position3 = PositionX & PositionY // {x : number, y : number}

let l :Position3 = {x : 0, y : 1};
console.log(typeof l['x']);
console.log(typeof l['y']);

type what = {
    color? : string,
    size : number
    readonly position : number[]
}

type info = {
    name : string,
    phone : string,
    email : string
}

type under19 = {under19 : boolean};

type adult = info & under19

// Literal Types

let name1 : "kim"
// name1 = 'park' // error, 123 값 만 사용가능
let isCouple : 'solo' | 'couple'

function fun4 (a :2) : 1 | 0{
    return 1
} // 변수로 2만 들어올 수 있고 결과값으로 1 또는 0만 return 가능하다

function rsp (a :'가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
    return ['가위']
}

var 자료 = {
    name : 'kim'
} as const // 1. object value의 값을 그대로 타입으로 지정해줌, 2. object 속성에 모두 readonly 속성을 부여

function 내함수 (a :'kim') {
    
}

내함수(자료.name as 'kim') // -> 이러면 사용 가능
// 내함수(자료.name) -> 에러 이유는 ?
// a : 'kim'은 자료형이 kim 인 데이터만 들어올 수 있는 것이지
// 데이터 값이 kim인 자료를 의미하는 것이 아니다.

// function type alias
type Functype = (a : string) => number; // string type을 넣어야되고 number type을 return 해야한다.
let 함수 :Functype = function () {
    return 0;   
}

let 회원정보 :{name : string, plusone : Functype} = {
    name : 'kim',
    plusone : (a) => {
        return parseInt(a) + 1
    }
}

type Functype2 = (x :string) => string;
let cutZero :Functype2= (x) => {
    if (x[0] === '0') x = x.slice(1, x.length)

    return x
}

let removeDash :Functype2 = (x :string) => {
    if (typeof x === 'string') {
        while(x.includes('-')) {
            x = x.replace('-', '');
        }
        return x;
    }
}

console.log(cutZero('010'));
console.log(removeDash('010-2214-8430'));

type Functype3 = (a :string, b:Functype2, c: Functype2) => string;
let phone = (a, b, c) => {
    return c(b(a))
}

console.log(phone('010-1111-2222', cutZero, removeDash))

// Narrowing 할때 구체적인 instance 명을 적어주는게 좋다.
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com'
}

let btn = document.querySelector('#button')
btn?.addEventListener('click', function(){
    console.log(1)
})

let btn2 = document.querySelector('#button2')
// let img = document.querySelector('#image')
let img = document.getElementById('image')

btn2?.addEventListener('click', function(){
    if (img instanceof HTMLImageElement) {
        img.src = "new.jpg"
    }
})

let naver = document.querySelectorAll('.naver')

naver.forEach((x) => {
    if (x instanceof HTMLAnchorElement) {
        x.href = 'https://kakao.com'
    }
})

class Personmaker {
    //class field 값
    data :number = 0;
}

class Personmaker2 {
    name :string;
    constructor(name :string ){
        this.name = name;
    }
    
    func() {
        console.log(this.name + "입니다.")
    }
}

let p1 = new Personmaker();
let p2 = new Personmaker2('park');
p2.func();

class Car1 {
    name :string;
    price :number;
    constructor(x :string, y :number) {
        this.name = x
        this.price = y
    };
    tax() :number {
        return this.price * 0.1
    }
}

let car1 = new Car1('소나타', 3000);
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300


class Word {
    num :number[];
    str :string[];
    constructor(...args :(string | number)[]) {
        this.num = [];
        this.str = [];
        [...args].forEach((l) => {
            if(typeof l === "string") this.str.push(l);
            else if(typeof l === "number") this.num.push(l);
        })
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']

type Sq1 = {color : string, width : number}
interface Sq2 {color : string, width : number}

let square = {color : 'red', width : 100}

interface Stu {name : string}
// interface Tea {name : string, age : number}
interface Tea extends Stu {age : number}

interface Product {
    brand :string,
    serialNumber :number,
    model :string[],
}

let p :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Info {
    product :string;
    price :number;
}

let basket :Info[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface Moreinfo extends Info {
    card :Boolean
}

let product2 :Moreinfo = { product : '청소기', price : 7000, card : false }

interface Func {
    plus : (x:number ,y:number) => number
    minus : (x:number ,y:number) => number
}

let calc1 :Func = {
    plus(x, y) {
        return x + y
    },
    minus(x, y) {
        return x - y
    }
}
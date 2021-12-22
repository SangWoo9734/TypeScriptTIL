function func(...a: number[]) {
    console.log(a)
}
func(1,2,3,4,5,6)

//destructuring
let [var1, var2] = ['hi', 100]
let {student : var3, age : var4} :{student : boolean, age:number}= { student : true, age : 20}

function func2({student, age}){
    console.log(student, age);
}

func2({student : true, age : 20})


function getMax(...x :number[]) :number {
    let i :number = 0;
    x.forEach(x => {
        if (i <= x) i = x;
    })

    return i;
}

console.log(getMax(6,3,7,2));

type objtype = {user : string, comment : number[], admin : boolean}

function objfunc ({user, comment, admin} :objtype) {
    console.log(user, comment, admin);
}

objfunc( { user : 'kim', comment : [3,5,4], admin : false } )


type type1 = (number | string | boolean)[]

function func3( x :type1) {
    console.log(...x)
}

func3([40, 'wine', false])


//Type Narrowing
function fun4 ( a : string | undefined ) {
    if ( a && typeof a === 'string'){  //undefined가 아니고 string인 경우만 발동
        console.log(a);
    }
}

type Fish = {swim : string}
type Bird = {fly : string} // 서로 가진 속성명이 다르면 in 써봐라

function fun5 (animal :Fish | Bird) {
    if ("swim" in animal  ) { // 유사하게 Fly 속성으로 Bird 타입인지 검사가능
        animal.swim
    }
}


// 비슷한 object의 경우 literal type을 두어 Narrowing에 사용한다.
type Car = {
    wheel : '4개',
    color : string,
}

type Bike = {
    wheel : '2개',
    color : string
}

function fun6 (x : Car | Bike) {
    if (x.wheel === '4개') {
        console.log('x는 car 타입이에요');
    }
}

// never Type
function func() :never {
    // throw new Error()
    // while (1) {

    // } 
}

//public private
class User2 {
    name : string;
    constructor() {
        this.name = 'kim';
    }
}

class User3 {
    // protected x = 10;
    static x = 10;
    y = 10;
}

class NewUser extends User3 {
    doThis() {
        this.x = 20;
    }
}

let child = new User3()
console.log(child)


class User4 {
    private static x = 10;
    public static y = 20;
    static addOne(num :number) {
        User4.x += num;
    }
    static printX() {
        console.log(User4.x);
    }
}

let p3 = new User4;

User4.addOne(3)
User4.addOne(4)
User4.printX()


class Square {
    x :number;
    y :number;
    c :string;
    constructor(x :number, y :number, c :string){
        this.x = x;
        this.y = y;
        this.c = c;
    }
    draw() {
        let [xPoint, yPoint] = [Math.floor(Math.random() * 400), Math.floor(Math.random() * 400)]
        console.log(xPoint, yPoint);
        let paper = document.getElementById('paper');
        let paperOrigin = paper.innerHTML;
        let htmlcode = paperOrigin + `<div style='width:${this.x}px; height:${this.y}px; background:${this.c};position: absolute; top:${yPoint}px; right:${xPoint}px'></div>`;
        paper.innerHTML = htmlcode;
    }
}

let sq = new Square(30, 30, 'red');
sq.draw()
sq.draw()
sq.draw()
sq.draw()
sq.draw()
sq.draw()
sq.draw()
sq.draw()


// generic 타입
function 함수1<MyType>(x :MyType[]) :MyType {
    return x[0]
}

let a1 = 함수1 <number> ([4, 2])
let a2 = 함수1 <string> (['4', '2'])

console.log(a1)

// 타입 파라미터 제한두기
function func7 <MyType extends number> (x : MyType) {
    return x - 1; //불확실함
}
let a3 = func7<number>(100);



interface LengthCheck {
    length : number
}
function func8 <MyType extends LengthCheck> (x : MyType) {
    return x.length; //불확실함
}
let a4 = func8<string>('100');

function func9 <T extends LengthCheck> (x : T) {
    return x.length
}

interface Animal {
    name : string
    age : Number
}

let data = '{"name" : "dog", "age" : 1 }'
console.log(JSON.parse(data));

function func10 <T> (x :string) :T {
    return JSON.parse(data);
} 

console.log(func10<Animal>(data));

class Person2 <T>{
    name;
    Mytype;
    constructor (a :T) {
        this.name = a
    }
}

let a5 = new Person2<string>('어쩌구');

//tuple type
let dog :[string , boolean] = ['dog', true] 

function func11(...x : [number, string]) {
    console.log(x)
}

func11(111, '222');

let arr  = [1, 2, 3]
let arr2 = [4, 5]
let arr3 :[...number[]] = [...arr, ...arr2];

let arr4 :[string , number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]


function func12( ...x : [string, boolean, ...(string | number)[]]) {
    console.log(x);
}


function func13( ...x :(string | number)[]) :[string[], number[]]{
    let str :string[] = [];
    let num :number[] = [];
    x.forEach((l) => {
        if(typeof l === 'string') str.push(l)
        else num.push(l)
    })

    return [str, num]
}

console.log(func13('b', 5, 6, 8, 'a'))


//.js 파일에서 변수 읽어오기
declare let name11;

console.log(name11 + 1)

// import {Age} from './test.d'

let 이름2 :string = '김';

interface CarType {
    model : string;
    price : number;
}

class Car2 implements CarType {
    model : string;
    price : number;
    constructor(a : string) {
        this.model = a
    }
}

let newCar = new Car2("Benz");


interface StringOnly {
    [abc : string] : string
}

interface MyType {
    'font-size' : MyType | number
}

interface inter {
    [abc : string] : inter | number
}

let obj1 = {name : "kim"}
Object.keys(obj1)

// type TypeChanger<MyType> = {
//     [key in keyof MyType] : string
// }

type newType = TypeChanger<Car>

type Bus = {
    color : string,
    model : boolean,
    price : Number
}

type TypeChanger <T> = {
    [key in keyof T] : string | number
}

type newBus = TypeChanger<Bus>


type NewTypeChanger <T, S> = {
    [key in keyof T] : S
}

type reallyNewBus = NewTypeChanger<Bus, string | number >


type Age3<T> = T extends string ? string : unknown

type FirstItem<T> =  T extends any[]  ? T[0] : any;

let car :FirstItem<string[]>


type Age2<T> = T extends infer R ? string : unknown


type TypeContract<T> = T extends (infer R)[] ? R : unknown

type x = TypeContract<string[]>

// 이때 R은 string


type TypeContract2<T> = T extends (() => infer R) ? R : unknown

type a = TypeContract<() => void>

type testAge<T> = T extends [infer R, any] ? (R extends string ? string : unknown)  : unknown;


type testAge1<T> = T extends [string, ...any] ? T[0]  : unknown;

type getParamsType<T> = T extends (x : infer R) => any ? R : unknown;
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
console.log(var3);

function func(...a: number[]) {
    console.log(a)
}
func(1,2,3,4,5,6)

//destructuring
let [var1, var2] = ['hi', 100]
let {student : var3, age : var4} = { student : true, age : 20}

console.log(var3)
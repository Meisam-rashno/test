let sum = (a , b) => a + b

console.log(sum(10,23))

let arr = [23,34,45,56]

console.log(arr.map(item => item*4))

function Person(){
    this.age = 0;
    console.log(this.age)
}

let person = new Person()

let object = {
    name : 'Mediasam',
    family:'Rand',
    fullname : function(){
        return this.name +" "+ this.family;
    }


}
console.log(object.fullname())


function summ(...args){
     
    return args.reduce(function(pre , next){
        return pre+next
    })
}
console.log(summ(1,2,3,4,5,6))

let array = [22,23,25,27,29]

for ( let i of array){
    console.log(i)
}

let text = `meisam 




rashno${array}`
console.log(text)
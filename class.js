class printer {
    constructor (name,model,type){
    this.name = name;
    this.model = model;
    this.type = type;

}
 run(){
     return this.name +" "+ this.model +" "+ this.type
 }
}

class printers extends printer {
    constructor(name,model,type,color){
        super(name,model,type)
        this.color = color;
    }
    run2(){
        return this.name +" "+ this.model +" "+ this.type+" "+this.color
    }
}

let printer1 = new printer ('epson','t50','inkjet')
let printer2 = new printers ('samsung','1320','inkjetlaserjet','black&white')




class Test extends Array{
   find(value){
       let val = this.filter(item => item == value)
       return val.length == 0 ?Error : val;

   }
}
let Test1 = new Test ('canon','pixema','inkjet')


document.getElementById('content').textContent=Test1.find('inkjet')

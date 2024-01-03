class Person{
    constructor(name,age,degree,city,pincode,){
        this.name=name
        this.age=age
        this.degree=degree
        this.city=city
        this.pincode=pincode
    }

    getDetails(){
        return(`
        I am ${this.name} from ${this.city}-${this.pincode} i am ${this.age}
        i did ${this.degree} in xxx university
        `)
    }

}

const obj1=new Person('Sambath Ravi',24,'MCA','Kumbakonam',612001)
const obj2=new Person('Barath Ravi',22,'BCA','Kumbakonam',612001)

console.log(obj1.getDetails())
console.log(obj2.getDetails())
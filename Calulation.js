class Calulation{
    constructor(distance){
        this.distance=distance
        
    }

    getPrice(){
        return `uber price is per kilometer Rs.5/- your traval distance is ${this.distance} and your cost Rs.${this.distance*5}/-`
    }

}

const uber=new Calulation(46.7)

console.log(uber.getPrice())
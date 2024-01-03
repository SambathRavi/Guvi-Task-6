class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }

    getPG(Movies){
        return Movies.filter(movie=>movie.rating==='PG')
    }

}
const studios=['DC','Fox','Marvel']
const ratings=['PG','PG13','R']
let Movies=[]
for(let i=0;i<50;i++){
    Movies.push(new Movie(`movie 00${i+1}`,studios[Number.parseInt((Math.random()*3))],ratings[Number.parseInt((Math.random()*3))]))
}

const movObj1= new Movie()

const pgMovies=movObj1.getPG(Movies)
console.log(pgMovies)

const movObj2=new Movie('Casino Royale','Eon Productions','PG13')
console.log(movObj2)

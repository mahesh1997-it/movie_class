class Movie{

    title:string;
    studio:string;
    rating:string;

    Movie(value:{title,studio,rating}){
        this.title=value.title;
        this.studio=value.studio;
        this.rating=value.rating;
    }

    getPG(moviename:String){
        return  `${moviename} rating is PG`
    }


}


let a = new Movie();
a.title="Casino Royale";
a.studio="Eon Productions";
a.rating="PG13";

console.log(a.title);

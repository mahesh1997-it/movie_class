var Movie = /** @class */ (function () {
    function Movie() {
    }
    Movie.prototype.Movie = function (value) {
        this.title = value.title;
        this.studio = value.studio;
        this.rating = value.rating;
    };
    Movie.prototype.getPG = function (moviename) {
        return moviename + " rating is PG";
    };
    return Movie;
}());
var a = new Movie();
a.title = "Casino Royale";
a.studio = "Eon Productions";
a.rating = "PG13";
console.log(a.title);

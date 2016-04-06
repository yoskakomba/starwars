var moviesJSON = require('../movies.json');


// Home

exports.home = function(req, res){

	var movies = moviesJSON.movies;
	res.render('home', {
		title: "Star Wars Movie",
		movies : movies

	});

};

// movie_single
exports.movie_single = function(req, res){
	var episode_number = req.params.episode_number;
	var movies = moviesJSON.movies;
	var movie = movies[episode_number - 1];
	var title = movie.title;
	res.render('movie_single', {
		movies: movies,
		title: title
	});
};

// not found

exports.notFound = function(req, res){
	res.send("This is not the page you're looking for");
};

var seriesJSON = require('../series.json');

// Home
exports.home = function(req,res){

	var series = seriesJSON.series;

	res.render('home',{
		title: "The Defenders - Netflix Series",
		series: series
	});
};

// Series_single
exports.series_single = function(req,res){
	var defender_number = req.params.defender_number;
	var series = seriesJSON.series;

	if(defender_number >=1 && defender_number <= series.length){
		var serie= series[defender_number-1];
		var title= serie.title;
		var main_characters=  serie.main_characters;

		res.render('serie_single',{
			series: series,
			title: title,
			serie: serie,
			main_characters: main_characters
		});
	} else{
		res.render("notFound",{
			series: series,
			title: 'Page Not Found'
		});
	}

	
};

// notFound
exports.notFound = function(req,res){
	var series = seriesJSON.series;
	res.render("notFound",{
			series: series,
			title: 'Page Not Found'
		});
	//res.send("If you are looking for DC Comics this is not your page :)");
};

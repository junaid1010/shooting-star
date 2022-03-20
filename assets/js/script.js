function getStats(city1,city2) {
    fetch("https://api-nba-v1.p.rapidapi.com/teams?search="+city1, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "2d7170db45mshc002aca3b426819p1fb5b5jsn7f819f5ce9c8"
	}
})
.then(response => {
	response.json().then(function(data){
       
        fetch("https://api-nba-v1.p.rapidapi.com/teams/statistics?id=" + data.response[0].id + "&season=2021", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key": "2d7170db45mshc002aca3b426819p1fb5b5jsn7f819f5ce9c8"
            }
        })
        .then(response => {
            response.json().then(function(data){
showStats(data)
            })
        })
        .catch(err => {
            console.error(err);
        });

    });
})
.catch(err => {
	console.error(err);
});
}
getStats('atlanta',3)
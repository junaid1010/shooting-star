var getEvent = "https://www.thesportsdb.com/api/v1/json/2/searchevents.php?e=" + teamName1 + "_vs_" + teamName2;

fetch(getEvent).then(function(response) {
response.json().then(function(data) {
  console.log(data);
  });
});
 getEvent()


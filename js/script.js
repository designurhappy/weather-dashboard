


var getFeaturedRepos = function(language) {
    var apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6d6c64b3641dfb178ef7db4b5b7addb9" + language + "+is:featured&sort=help-wanted-issues";
  
    fetch(apiUrl);
  };
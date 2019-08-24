var key = 'a47de11f86cb151a9233e42109aaa428'
let cityID = '1835848'

let DATA = [
    { city: "", temp: "", maxtemp: ""}
]


  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    DATA[0].temp = data.main.temp
  })
  .catch(function() {
    // catch any errors
  });
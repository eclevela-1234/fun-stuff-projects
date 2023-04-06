var publicKey = "e4c1662a55e69d3ef234c27cb4c8144d";
var privateKey = "5b5fcc9495da6f5d45918c31fc603b231b197955";

var ts = Date.now();
var combined = ts + privateKey + publicKey;
var hash = CryptoJS.MD5(combined).toString();

var url =
  "https://gateway.marvel.com/v1/public/characters?apikey=" +
  publicKey +
  "&ts=" +
  ts +
  "&hash=" +
  hash;
console.log(url);

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (i = 0; i < 10; i++) {
      var offsetAmt = Math.floor(data.data.total * Math.random());

      var newUrl = url + "&offset=" + offsetAmt;
      fetch(newUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.data.results[0].name);
        });
    }
  });

bodyEl = $("body");
headerEl = $("<h1>");

headerEl.text("I'm a header");

bodyEl.append(headerEl);

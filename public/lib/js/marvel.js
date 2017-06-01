"use strict";

console.log('JS Linked');

const myAPIKey = '7d2d500239e06c40351cddf95e95e420';
var marvelObject;
var marvelOptions = {
  apikey: myAPIKey
}

function getMarvelData () {
  $.get("https://gateway.marvel.com:443/v1/public/characters?name=daredevil",marvelOptions).done(function(data) {
    marvelObject = data;
    console.log(marvelObject);
  }).fail(function(xhr, err, msg) {
    alert('Failed to connect!');
  });
}
getMarvelData();

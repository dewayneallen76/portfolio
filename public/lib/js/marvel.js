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
    addCharacter(marvelObject);
    console.log(marvelObject);
    console.log(marvelObject.data.results[0].thumbnail.path);
    console.log(marvelObject.data.results[0].description);
  }).fail(function(xhr, err, msg) {
    alert('Failed to connect!');
  });
}
getMarvelData();

function addCharacter(marvelObject) {
  var content = '';
  content += '<h3>' + marvelObject.data.results[0].name + '</h3>';
  content += '<p>' + marvelObject.data.results[0].description + '</p>';
  $('#addCharacter').html(content);
};

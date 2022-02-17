console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}
console.log(addToCollection('Feels Like Today', 'Rascal Flatts', '2004'));
console.log(addToCollection('Dig Your Roots', 'Florida Georgia Line', '2016'));
console.log(addToCollection('Take Care', 'Drake', '2018'));
console.log(addToCollection('Me and My Gang', 'Rascal Flatts', '2006'));
console.log(addToCollection('Live Like You Were Dying', 'Tim McGraw', '2004'));
console.log(addToCollection('Red', 'Taylor Swift', '2012'));
console.log(collection);

function showCollection(array) {
console.log('The number of albums in my collection is:', array.length);
for (let i = 0; i < array.length; i++) {
console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
  }
}
showCollection(collection);

function findByArtist(artist) {
let artistResults = [];
for (let i = 0; i < collection.length; i++) {
  if (artist === collection[i].artist) {
  artistResults.push(collection[i]);
}
}
  return artistResults;
  }
console.log(findByArtist('Florida Georgia Line'));
console.log(findByArtist('T-Pain'));
console.log(findByArtist('Rascal Flatts'));

function search(searchArtist, searchYear) {
let searchArray = [];
const searchCriteria = {
  artist: searchArtist,
  year: searchYear
}
if (searchCriteria.artist === undefined && searchCriteria.year === undefined) {
  return collection;
}
for (let i = 0; i < collection.length; i++) {
  if (collection[i].artist === searchArtist && collection[i].yearPublished === searchYear) {
    searchArray.push(collection[i]);
  }
}
return searchArray;
}
console.log(search('Ray Charles', '1957'));
console.log(search());
console.log(search('Florida Georgia Line', '2016'));

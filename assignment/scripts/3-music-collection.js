console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished, tracks) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(album);
  return album;
}
console.log(addToCollection('Feels Like Today', 'Rascal Flatts', '2004', ['Here Comes Goodbye', '4:01']));
console.log(addToCollection('Dig Your Roots', 'Florida Georgia Line', '2016', ['Long Live', '2:32']));
console.log(addToCollection('Take Care', 'Drake', '2018', ['Time Flies', '2:45']));
console.log(addToCollection('Me and My Gang', 'Rascal Flatts', '2006', ['God Blessed The Broken Road', '3:03']));
console.log(addToCollection('Live Like You Were Dying', 'Tim McGraw', '2004', ['My Next Thirty Years', '4:35']));
console.log(addToCollection('Red', 'Taylor Swift', '2012', ['White Horse', '3:38']));
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

const albumSearch = {
  artist: 'Ray Charles',
  year: '1957'
  }
  const albumMatch = {
    artist: 'Florida Georgia Line',
    year: '2016'
    }
function search(searchCriteria) {
let searchArray = [];

if (searchCriteria === undefined) {
return collection;
}
for (let i = 0; i < collection.length; i++) {
  if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
    searchArray.push(collection[i]);
  }
}
return searchArray;
}
console.log(search(albumSearch));
console.log(search());
console.log(search(albumMatch));

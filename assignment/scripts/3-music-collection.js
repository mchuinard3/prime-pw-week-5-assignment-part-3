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
console.log(addToCollection('Feels Like Today', 'Rascal Flatts', '2004', ['Here Comes Goodbye', '4:01', 'Smile', '3:08']));
console.log(addToCollection('Dig Your Roots', 'Florida Georgia Line', '2016', ['Long Live', '2:32', 'Dog', '2:02']));
console.log(addToCollection('Take Care', 'Drake', '2018', ['Time Flies', '2:45']));
console.log(addToCollection('Me and My Gang', 'Rascal Flatts', '2006', ['God Blessed The Broken Road', '3:03']));
console.log(addToCollection('Live Like You Were Dying', 'Tim McGraw', '2004', ['My Next Thirty Years', '4:35']));
console.log(addToCollection('Red', 'Taylor Swift', '2012', ['White Horse', '3:38']));
console.log(collection);

function showCollection(array) {
  console.log('The number of albums in my collection is:', array.length);
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}`);
    let j = 1;
    for (let x = 0; x < array[i].tracks.length; x+=2) {
      console.log(`${j}. ${array[i].tracks[x]}: ${array[i].tracks[x+1]}`);
      j++;
    }
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
  year: '1957',
  track: 'Cats'
  }
  const albumMatch = {
    artist: 'Florida Georgia Line',
    year: '2016',
    track: 'Dog'
  }

function search(searchCriteria) {
let searchArray = [];

  if (searchCriteria === undefined) {
    return collection;
}
for (let i = 0; i < collection.length; i++) {
  for (let j = 0; j < collection[i].tracks.length; j+=2) {
    if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year && collection[i].tracks[j] === searchCriteria.track) {
    searchArray.push(collection[i]);
  }
  }
  }
  return searchArray;
}
console.log(search(albumSearch));
console.log(search());
console.log(search(albumMatch));

/*
This code will allow the user to change properties within an object.
In this case, this is a record collection with things like artists and tracks in albums.
This demonstrates my ability to add, remove, and change properties in an object.
*/

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];     
    // remove the property if value is empty (e.g. deleting artist or tracks)
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;    
    // simple assignment for non-track properties like artist or albumTitle
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];  
    // create a new tracks array if it doesn't exist
  } else if (prop === "tracks" && value !== "") {
    records[id]["tracks"].push(value);          
    // add to existing tracks array
  } return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance'));
console.log(updateRecords(recordCollection, 2548, 'artist', ''));

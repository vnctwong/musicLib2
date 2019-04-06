function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
}

Library.prototype.addPlaylist = function (pl) {
  this.playlist.push(pl);
};

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(name, rating, length) {
  this.name = name;
  this.rating = rating;
  this.duration = length;
}

Playlist.prototype.addTrack = function (track) {
  this.tracks.push(track);
};

Playlist.prototype.overallRating = function (pl) {
  let totalRatings = 0;
  let songCount = this.tracks.length;
  this.tracks.map(song => {
    totalRatings += song.rating;
  });
  let avg = totalRatings / songCount;
  return `Overall rating is ${avg}/5`;
};

Playlist.prototype.totalDuration = function () {
  let sum = 0;
  this.tracks.map(song => {
    sum += song.duration;
  });
  return `Total duration is ${sum} seconds.`;
};

let lib1 = new Library('Rock Music', 'John');

let pl1 = new Playlist('Car Jams');
let pl2 = new Playlist('Rap Songs');
let song1 = new Track('This is America', 5, 240);
let song2 = new Track('Blue Suede Shoes', 2, 150);
let song3 = new Track('Rappers Delight', 4, 180);
let song4 = new Track('Tonight', 3, 180);

pl1.addTrack(song1);
pl1.addTrack(song3);
lib1.addPlaylist(pl1);
console.log(lib1);
console.log(pl1.totalDuration());
console.log(pl1.overallRating());

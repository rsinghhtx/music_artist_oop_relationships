function Artist(name) {
  this.name = name;
  this.songs= [];

}


Artist.prototype.addSong = function (song) {
  this.songs.push(song);
};

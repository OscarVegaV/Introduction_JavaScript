// ** Property Methods **

// This is an object that contains methods related to music.
const musicPlayer = {    
  play : function(id) {            // Property that has a function called 'play' .
    console.log(`Reproduciendo Canción con el ID ${id}`);
  },
  pause: function(){
    console.log('Pausando la canción');
  },
  /*// Method to delete a song.
  deleteSong: function(id){
  console.log(`eliminando la canción: ${id}`);
  }*/
  // method to add a song list.
  songList: function (playListName) {
    console.log(`Creando la playlIst: ${playListName}`);
  },
  // method to play the song list.
  playSongList: function (addplayListName) {
    console.log(`Reproduciendo la playlIst: ${addplayListName}`);
  }
};

// We can also add methods to the object after it has been defined.

musicPlayer.deleteSong = function (id) {
  console.log(`eliminando la canción: ${id}`);
}

console.log(musicPlayer);


musicPlayer.play(3840);        //Output: Playing song with ID 3840.
musicPlayer.pause();           // Output: Pausing the song.
musicPlayer.deleteSong(20);   // Output: Deleting song: 20.
musicPlayer.songList('Heavy Metal'); // Output: Creating the playlist: Heavy Metal.
musicPlayer.playSongList('Heavy Metal');  // Output: Playing the playlist: Heavy Metal.

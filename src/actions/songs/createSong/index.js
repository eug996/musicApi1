const insertSong = require("./queries/insertSong");

  
  const createSong = async ({ name, album_id, artist_id}) => {
      const songId = await insertSong({ name, album_id, artist_id });
      return { songId };
  };
  
  module.exports = createSong;

  
  


  
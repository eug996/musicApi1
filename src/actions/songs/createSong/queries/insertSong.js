const { submitQuery, getInsertId } = require("~root/lib/database");
  
  const insertSong = ({ name, album_id, artist_id }) => submitQuery`
      INSERT INTO Songs(name, album_id, artist_id)
      VALUES (${name}, ${album_id}, ${artist_id});
  `;
  
  module.exports = getInsertId(insertSong);
const { submitQuery} = require("~root/lib/database");
  
  const insertArtist = ({ name, genre }) => submitQuery`
      INSERT INTO Artists(name, genre)
      VALUES (${name}, ${genre});
  `;
  
  module.exports = insertArtist;
  

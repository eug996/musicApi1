const { submitQuery} = require("~root/lib/database");

const insertAlbum = ({ artistId, name, year}) => submitQuery`
  INSERT INTO Albums(artist_id, name, year)
  VALUES (${artistId}, ${name}, ${year});
`;

module.exports = insertAlbum;

  


const { submitQuery } = require("~root/lib/database");

const removeArtistById = ({ artistId }) => submitQuery`
    DELETE FROM Artists WHERE artist_id
         = ${artistId};
`;

module.exports = removeArtistById;

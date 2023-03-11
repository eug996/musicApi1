const { submitQuery } = require("~root/lib/database");

const selectArtistById = ({ artistId }) => submitQuery`
    SELECT * FROM Artists WHERE artist_id
         = ${artistId};
`;

module.exports = selectArtistById;

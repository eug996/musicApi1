const { submitQuery } = require("~root/lib/database");

const selectSongById = ({ songId }) => submitQuery`
    SELECT * FROM Songs WHERE song_id
         = ${songId};
`;

module.exports = selectSongById;


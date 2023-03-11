const { submitQuery} = require("~root/lib/database");

const selectAlbumById = ({ albumId }) => submitQuery`
    SELECT * FROM Albums WHERE album_id
         = ${albumId};
`;

module.exports = selectAlbumById;

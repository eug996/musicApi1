const { submitQuery, getFirst } = require("~root/lib/database");

const removeAlbumById = ({ albumId }) => submitQuery`
    DELETE FROM Albums WHERE album_id
         = ${albumId};
`;

module.exports = removeAlbumById;


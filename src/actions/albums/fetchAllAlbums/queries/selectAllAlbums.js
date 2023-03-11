const { submitQuery } = require("~root/lib/database");

const selectAllAlbums = () => submitQuery`
    SELECT * FROM Albums;
`;

module.exports = selectAllAlbums;

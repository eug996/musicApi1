const { submitQuery } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
    SELECT * FROM Artists;
`;

module.exports = selectAllArtists;

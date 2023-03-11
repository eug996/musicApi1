const {submitQuery} = require("~root/lib/database");

const deleteSong = ({songId}) => submitQuery`
DELETE FROM Songs
WHERE song_id = ${songId};
`;

module.exports = deleteSong;

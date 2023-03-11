
const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateArtistById = ({ artistId, genre = null, name = null }) => {
    const update = [];

    if (genre !== null) {
        update.push(sql`genre = ${genre}`);
    }

    if (name !== null) {
        update.push(sql`name = ${name}`);
    }

    if (update.length !== 0) {
        return submitQuery`
        UPDATE
          Artists
        SET
         ${update.reduce(sqlReduce)}
        WHERE
         artist_id = ${artistId};
         `;
          }
          return Promise.resolve();
};

module.exports = updateArtistById;



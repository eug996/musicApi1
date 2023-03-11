
const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateAlbumById = ({ albumId, year = null, name = null }) => {
    const update = [];

    if (year !== null) {
        update.push(sql`year = ${year}`);
    }

    if (name !== null) {
        update.push(sql`name = ${name}`);
    }

    if (update.length !== 0) {
        return submitQuery`
        UPDATE
          Albums
        SET
         ${update.reduce(sqlReduce)}
        WHERE
         album_id = ${albumId};
         `;
          }
          return Promise.resolve();
};

module.exports = updateAlbumById;



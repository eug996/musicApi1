const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateSongById = ({ albumId = null, artistId = null, songId, name = null }) => {
    const update = [];


    if (name !== null) {
        update.push(sql`name = ${name}`);
    }

    if (albumId !== null) {
      update.push(sql`album_id = ${albumId}`);
  }

  if (artistId !== null) {
    update.push(sql`artist_id = ${artistId}`);
}

    if (update.length !== 0) {
        return submitQuery`
        UPDATE
          Songs
        SET
         ${update.reduce(sqlReduce)}
        WHERE
         song_id = ${songId};
         `;
          }
          return Promise.resolve();
};

module.exports = updateSongById;

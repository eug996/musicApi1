const updateSongById = require("./queries/updateSongById");

const modifySongById = async ({artistId, albumId, songId, name }) => {
    const song = await updateSongById ({
        songId,
        artistId,
        albumId,
        name,
    });
    return { song };
};

module.exports = modifySongById;



const updateAlbumById = require("./queries/updateAlbumById");

const modifyAlbumById = async ({ albumId, year, name }) => {
    const album = await updateAlbumById ({
        albumId,
        year,
        name,
    });
    return { album };
};

module.exports = modifyAlbumById;



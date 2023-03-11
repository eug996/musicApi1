const insertArtist = require("./queries/insertAlbum");
  
  const createAlbum = async ({ name, year, artistId }) => {
      const albumId = await insertArtist({ name, year, artistId});
      return { albumId };
  };
  
  module.exports = createAlbum;
  
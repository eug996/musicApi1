const removeAlbum = require("./queries/removeAlbum");

const removeAlbumById = async ({albumId}) => {
  const response = await removeAlbum({albumId});

  return { response };
  
};

module.exports = removeAlbumById;





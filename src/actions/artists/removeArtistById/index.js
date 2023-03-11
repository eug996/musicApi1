const removeArtist = require("./queries/removeArtist");

const removeArtistById = async ({artistId}) => {
  const response = await removeArtist({artistId});

  return { response };
  
};

module.exports = removeArtistById;





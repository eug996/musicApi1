const deleteSong = require("./queries/deleteSong");

const removeSongById = async ({songId}) => {
  
  const song = await deleteSong({songId});

  return { song };
  
};

module.exports = removeSongById;










const handleAPIError = require("~root/utils/handleAPIError");
const modifySongById = require("~root/actions/songs/modifySongById");

  
  const patchSongById = async (req, res) => {
    const { songId } = req.params;
    const { name, artistId, albumId } = req.body;
  
    try {
      const { song } = await modifySongById({
        artistId,
        albumId,
        songId,
        name,
      });
  
      res.status(201).send({
        song,
      });
    } catch (err) {
      handleAPIError(res, err);
    }
  };
  
  module.exports = patchSongById;
  
  
const handleAPIError = require("~root/utils/handleAPIError");
const modifyAlbumById = require("~root/actions/albums/modifyAlbumById");

  
  const patchAlbumById = async (req, res) => {
    const { albumId } = req.params;
    const { year, name } = req.body;
  
    try {
      const { album } = await modifyAlbumById({
        albumId,
        year,
        name,
      });
  
      res.status(201).send({
        album,
      });

    } catch (err) {
      handleAPIError(res, err);
    }
  };
  
  module.exports = patchAlbumById;
  
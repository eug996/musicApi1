const handleAPIError = require("~root/utils/handleAPIError");
const removeAlbumById = require("~root/actions/albums/removeAlbumById");


const deleteAlbumById = async (req, res) => {
    const{albumId} = req.params;
  try {
    const {response} = await removeAlbumById({albumId});

    res.status(201).send({
      response
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteAlbumById;


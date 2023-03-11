const handleAPIError = require("~root/utils/handleAPIError");
const removeArtistById = require("~root/actions/artists/removeArtistById");


const deleteArtistById = async (req, res) => {
    const{artistId} = req.params;
  try {
    const {response} = await removeArtistById({artistId});

    res.status(201).send({
      response
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtistById;


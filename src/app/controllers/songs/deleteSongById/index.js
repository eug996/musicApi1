
const handleAPIError = require("~root/utils/handleAPIError");
const removeSongById = require("~root/actions/songs/removeSongById")

const deleteSongById  = async (req, res) => {
  const {songId} = req.params; 
  try {
  const { song } = await removeSongById({songId});
    res.status(200).send({
      song
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteSongById;

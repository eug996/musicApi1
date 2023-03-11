const handleAPIError = require("~root/utils/handleAPIError");
  const createSong = require("~root/actions/songs/createSong");
  
  const postSong = async (req, res) => {
      const { name, album_id, artist_id } = req.body;
  
      try {
          const { songId } = await createSong({ name, album_id, artist_id });
  
          res.status(201).send({
              songId
          });
      } catch (err) {
          handleAPIError(res, err);
      }
  };
  
  module.exports = postSong;

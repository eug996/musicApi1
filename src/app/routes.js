const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

//artists
const postArtist = require("./controllers/artists/postArtist");
const patchArtistById = require("./controllers/artists/patchArtistById")
const getAllArtists = require("./controllers/artists/getAllArtists")
const getArtistById = require("./controllers/artists/getArtistById");
const deleteArtistById = require("./controllers/artists/deleteArtistById");

//albums
const postAlbum = require("./controllers/albums/postAlbum");
const patchAlbumById = require("./controllers/albums/patchAlbumById");
const getAllAlbums = require("./controllers/albums/getAllAlbums");
const getAlbumById = require("./controllers/albums/getAlbumById");
const deleteAlbumById = require("./controllers/albums/deleteAlbumById");

//songs
const postSong = require("./controllers/songs/postSong");
const patchSongById = require("./controllers/songs/patchSongById");
const getAllSongs = require("./controllers/songs/getAllSongs")
const getSongById = require("./controllers/songs/getSongById");
const deleteSongById = require("./controllers/songs/deleteSongById");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

//artists
router.post("/artists", postArtist);

router.patch("/artist/:artistId", patchArtistById);

router.get("/artists", getAllArtists);

router.get("/artist/:artistId", getArtistById);

router.delete("/artist/:artistId", deleteArtistById);

//albums
router.post("/albums", postAlbum);

router.patch("/album/:albumId", patchAlbumById);

router.get("/albums", getAllAlbums);

router.get("/album/:albumId", getAlbumById);

router.delete("/album/:albumId", deleteAlbumById);

//songs
router.post("/songs", postSong);

router.patch("/song/:songId", patchSongById);

router.get("/songs", getAllSongs);

router.get("/song/:songId", getSongById);

router.delete("/song/:songId", deleteSongById);


module.exports = router;

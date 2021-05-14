const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model")


router.get("/movies/new", (req, res, next) => {
    Celebrity.find()
        .then((result) => {
            res.render("movies/new-movie", { celebs: result })
        })
        .catch(error)
});
router.post('/movies/create', (req, res) => {
    Movie.create(req.body)
        .then((result) => {
            res.redirect('/movies/movies')
        })
        .catch(error)
});

router.get("/movies/movies", (req, res, next) => {
    Movie.find()
        .then((result) => {
            res.render("movies/movies", { movies: result })
        })
        .catch(error)
});

router.get('/movies/:_id', (req, res) => {
    Movie.findById(req.params)
        .populate('cast')
        .then((result) => {
            res.render('movies/movie-details', { movie: result })
        })
        .catch(error)
});

router.post('/movies/:_id/delete', (req, res) => {
    Movie.findByIdAndDelete(req.params)
        .then((result) => {
            res.redirect('/movies/movies')
        })
        .catch(error)
})

router.get('/movies/:_id/edit', (req, res) => {
    Movie.findById(req.params._id)
        .then((result) => {
            res.render('movies/edit-movie', result)
        })
        .catch(error)
})
router.post('/movies/:_id/edit', (req, res) => {
    Movie.findByIdAndUpdate(req.params._id, req.body)
        .then((result) => {
            res.redirect('/movies/movies')
        })
        .catch(error)
})

module.exports = router;
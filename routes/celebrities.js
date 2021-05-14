const express = require("express");
const router = new express.Router();
const celebrityModel = require("../models/celebrity.model");

/*router.get("/", async (req, res, next) => {
  try {
    res.render("celebrities/celebrities", { celebrities: await celebrityModel.find() });
  } catch (err) {
    next(err);
  }
});*/

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new-celebrity");
})

router.post("/celebrities/create", (req, res) => {
  Celebrity.create(req.body)
    .then((result) => {
      res.render('celebrities/new-celebrity')
    })
    .catch((error) => {
      
    })
})

router.get('/celebrities', (req, res) => {
  Celebrity.find({})
    .then((result) => {
      res.render('celebrities/celebrities', { data: result })
    })
    .catch(error)
})

router.get('/celebrities/:_id', (req, res) => {
  Celebrity.findById(req.params)
    .then((result) => {
      res.render('celebrities/celebrity-details', { Celebrity: result })
    })
    .catch(error)
})

router.post('/celebrities/:_id/delete', (req, res) => {
  Celebrity.findByIdAndDelete(req.params._id)
    .then((result) => {
      res.redirect('celebrities')
    })
    .catch(error)
})

router.get('/celebrities/:_id/edit', (req, res) => {
  Celebrity.findById(req.params._id)
    .then((result) => {
      res.render('celebrities/edit-celebrity', result)
    })
    .catch(error)
})

router.post('/celebrities/:_id/edit', (req, res) => {
  Celebrity.findByIdAndUpdate(req.params._id, req.body)
    .then((result) => {
      res.redirect('celebrities')
    })
    .catch(error)
})

module.exports = router
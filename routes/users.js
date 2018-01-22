var express = require('express');
var router = express.Router();
var fakeusers = require('fake-users-package');

router.get('/', function(req, res) {
    console.log("ciao");
    res.json(fakeusers.all());
})

router.get('/reset', function(req, res) {
    res.json(fakeusers.reset());
})

router.get('/:id', function(req, res) {
    if (!isInt(req.params.id)) {
      return res.status(400).json({message:"id must be a integer"})
    }
    var user = fakeusers.getById(parseInt(req.params.id));
    if (user === null) {
      return res.status(404).json({message: "User not found"});
    }
    res.json(user);
})

router.delete('/:id', function(req, res) {
    if (!isInt(req.params.id)) {
      return res.status(400).json({message:"id must be a integer"})
    }
    var user = fakeusers.getById(parseInt(req.params.id));
    if (user === null) {
      return res.status(404).json({message: "User not found"});
    }
    res.json(fakeusers.delete(parseInt(req.params.id)));
})

router.post('/', function(req, res) {
    res.json(fakeusers.add(req.body.user));
})

router.put('/:id', function(req, res) {
    res.json(fakeusers.update(parseInt(req.params.id), req.body.user));
})

module.exports = router;

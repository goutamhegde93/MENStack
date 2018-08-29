/*
 * ///LICENSE UPCOMING///
 */

var express   = require ("express");
var introCtrl = require ("../controllers/intro.controller.js");

const router = express.Router ();

router.route ("/how_are_you")
      .get (introCtrl.howAreYou);

module.exports = router;

/*
 * ///LICENSE UPCOMING///
 */

var express     = require ("express");
var introRoute  = require ("./app/routes/intro.route.js");

var app = express ();
app.use (introRoute);

app.listen (3000);

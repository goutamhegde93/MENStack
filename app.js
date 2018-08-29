/*
 * ///LICENSE UPCOMING///
 */

var express     = require ("express");
var introRoute  = require ("./app/routes/intro.route.js");

var aestheticsConfig = require ("./config/aesthetics.config.js");

var app = express ();

app.use (aestheticsConfig.api.apiBaseUrl, introRoute);
app.listen (3000);

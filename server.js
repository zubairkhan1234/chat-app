var express = require("express")
var cors = require("cors")
var path = require("path")
var morgan = require("morgan")
var bodyParser = require("body-parser")
var socketIo = require("socket.io")
var http = require("http")


var app = express()
var PORT = process.env.PORT || 5000
ap
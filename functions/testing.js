(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import Twitter from 'twitter'
// import dotenv from 'dotenv'
// dotenv.config()

const {
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET
} = process.env;

// var client = new Twitter({
//   consumer_key: TWITTER_CONSUMER_KEY,
//   consumer_secret: TWITTER_CONSUMER_SECRET,
//   access_token_key: TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
// })

exports.handler = function (event, context, callback) {
  console.log('logging logging');
  console.log(event);
  console.log(context);
  console.log('state', event && event.payload && event.payload.state);
  console.log(TWITTER_CONSUMER_SECRET);
  console.log('hello');
  // conditions:
  // file must be called 'deploy-succeeded.js'
  // (must be a POST)
  // (must have valid jwt)
  // must pass validation
  // state = ready
  // context = production
  // title = "Create Blog "...

  //need to extract url of post:  x.substring(
  //   x.indexOf("“") + 1,
  //     x.lastIndexOf("”")
  // );

  //const slug = title.substring(title.indexOf('“') + 1, title.lastIndexOf('”'))

  // client.post(
  //   'statuses/update',
  //   {
  //     status: `I just wrote a new post on my blog, check it out here: amandabrookfield.co.uk/blog/${slug}`,
  //   },
  //   function(error, tweet, response) {
  //     if (error) return callback(error)
  //     console.log(tweet) // Tweet body.
  //     console.log(response) // Raw response object.

  //     callback(null, {
  //       statusCode: 200,
  //       body: `Posted Successfully`,
  //     })
  //   }
  // )

  callback(null, {
    statusCode: 200,
    body: `Posted Successfully`
  });
};

/***/ })
/******/ ])));
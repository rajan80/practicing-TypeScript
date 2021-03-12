/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\r\nvar generateDie = document.getElementById(\"generate-btn\");\r\nvar rollDice = document.getElementById(\"roll-btn\");\r\nvar sum = document.getElementById(\"sum-btn\");\r\nvar container = document.getElementById(\"container\");\r\nvar diceArray = [];\r\nvar Die = /** @class */ (function () {\r\n    function Die(value) {\r\n        var _this = this;\r\n        this.value = value;\r\n        this.value = value;\r\n        this.dice = document.createElement(\"div\");\r\n        this.dice.className = \"dice\";\r\n        this.roll();\r\n        container.appendChild(this.dice);\r\n        diceArray.push(this);\r\n        this.dice.addEventListener(\"click\", function () {\r\n            _this.roll();\r\n        });\r\n        this.dice.addEventListener(\"dblclick\", function () {\r\n            _this.dice.remove();\r\n        });\r\n    }\r\n    Die.prototype.roll = function () {\r\n        var randomNum = Math.floor(Math.random() * 6 + 1);\r\n        this.value = randomNum;\r\n        this.dice.innerText = this.value.toString();\r\n    };\r\n    return Die;\r\n}());\r\ngenerateDie.addEventListener(\"click\", function () {\r\n    new Die(1);\r\n});\r\nsum.addEventListener(\"click\", function () {\r\n    var diceSum = 0;\r\n    diceArray.forEach(function (die) {\r\n        diceSum = diceSum + die.value;\r\n    });\r\n    alert(\"Sum of dice is \" + diceSum);\r\n});\r\nrollDice.addEventListener(\"click\", function () {\r\n    diceArray.forEach(function (die) {\r\n        die.roll();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://diceybusiness/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;
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

eval("\r\nvar myName = \"Rajan\";\r\nconsole.log(myName);\r\nmyName = \"Ramu\";\r\nconsole.log(myName);\r\nvar numOfStates = 50;\r\nvar sumOfNumbers = 5 + 4 + (5 + 4);\r\nfunction sayHello() {\r\n    alert(\"Hello rajan\");\r\n}\r\nsayHello();\r\nfunction checkAge(name, age) {\r\n    if (age < 21) {\r\n        alert(\"Sorry \" + name + \", you aren't old enough to view this page!\");\r\n    }\r\n}\r\ncheckAge(\"ram\", 20);\r\ncheckAge(\"Sam\", 30);\r\nvar favVeggies = [\"Broccoli\", \"Squash\", \"Carrots\", \"Asparagus\"];\r\nconsole.log(favVeggies[0]);\r\nconsole.log(favVeggies[1]);\r\nconsole.log(favVeggies[2]);\r\nconsole.log(favVeggies[3]);\r\nfor (var i = 0; i < favVeggies.length; i++) {\r\n    console.log(favVeggies[i]);\r\n}\r\nvar myPet = {\r\n    name: \"bhunti\",\r\n    breed: \"Dog\",\r\n};\r\nconsole.log(myPet.breed, myPet.name);\r\nvar people = [\r\n    {\r\n        name: \"sam\",\r\n        age: 20,\r\n    },\r\n    {\r\n        name: \"Ram\",\r\n        age: 27,\r\n    },\r\n    {\r\n        name: \"Ham\",\r\n        age: 25,\r\n    },\r\n    {\r\n        name: \"Pam\",\r\n        age: 22,\r\n    },\r\n    {\r\n        name: \"Bill\",\r\n        age: 24,\r\n    },\r\n];\r\npeople[0].name;\r\nfor (var i = 0; i < people.length; i++) {\r\n    checkAge(people[i].name, people[i].age);\r\n}\r\nfunction getLength(string) {\r\n    return string.length;\r\n}\r\nvar stringLength = getLength(\"hello world\");\r\nif (stringLength % 2 === 0) {\r\n    console.log(\"The world is nice and even!\");\r\n}\r\nelse {\r\n    console.log(\"The world is an odd place!\");\r\n}\r\n\n\n//# sourceURL=webpack://kitchenSink/./app.ts?");

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
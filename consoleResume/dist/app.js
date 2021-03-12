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

/***/ "./resume.ts":
/*!*******************!*\
  !*** ./resume.ts ***!
  \*******************/
/***/ (() => {

eval("\r\nvar str = \"Rajan Shrestha\";\r\nvar result = str.toUpperCase();\r\nconsole.log(result);\r\nvar Career = 'Full Stack Developer';\r\nconsole.log(Career);\r\nvar Description = 'I love coding';\r\nconsole.log(Description);\r\nfunction displayPosition(Company, Title, Description) {\r\n    console.log('* ', Company, Title, Description);\r\n}\r\n;\r\ndisplayPosition('Amazon', 'Problem Solver', 'computer work');\r\nconsole.log(\"My Previous Experience:\");\r\ndisplayPosition('Surin West', 'Manager', 'Daily Operation');\r\ndisplayPosition('Fuel Stop', 'Manager', 'Daily Operation');\r\nconsole.log(\"My Skills:\");\r\ndisplayskills('HTMl', true);\r\ndisplayskills('Java', true);\r\ndisplayskills('javascript', true);\r\ndisplayskills('CSS', true);\r\ndisplayskills('Maven', false);\r\nfunction displayskills(mySkill, Bam) {\r\n    if (Bam == true) {\r\n        console.log(\"  BAM: \" + mySkill);\r\n    }\r\n    else if (Bam == false) {\r\n        console.log(\"*  \" + mySkill);\r\n    }\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://consoleresume/./resume.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resume.ts"]();
/******/ 	
/******/ })()
;
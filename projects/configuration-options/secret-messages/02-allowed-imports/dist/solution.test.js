"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", { enumerable: true, value: v });
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
exports.__esModule = true;
var globals_1 = require("@jest/globals");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var ts = __importStar(require("typescript"));
var filePath = path.join(
	__dirname,
	process.env.TEST_SOLUTIONS ? "tsconfig.solution.json" : "tsconfig.json"
);
var _a = ts.parseConfigFileTextToJson(
		filePath,
		fs.readFileSync(filePath).toString()
	),
	config = _a.config,
	error = _a.error;
if (error) {
	console.error(error);
	throw new Error("Could not parse TSConfig for test. See console errors.");
}
(0, globals_1.describe)("TSConfig", function () {
	(0, globals_1.test)("compilerOptions", function () {
		(0, globals_1.expect)(config.compilerOptions).toEqual(
			globals_1.expect.objectContaining({
				allowJs: true,
				esModuleInterop: true,
				resolveJsonModule: true,
			})
		);
	});
});

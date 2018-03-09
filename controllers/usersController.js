/*jslint node: true, nomen: true*/
"use strict";
module.exports = function (logger, config) {
	var funcs = {};
	
	funcs.getUsers = function (cb) {
		var userlist = ['Alice', 'Bob', 'Charlie'];
		logger.info('Returning user list');
		cb(null, userlist);
	};
	
	return funcs;
};
/*jslint node: true, nomen: true*/
"use strict";

module.exports = function (express, logger, config) {
	
	var path = require('path'),
	    router = express.Router(),
	    usersController = require(path.join('..', 'controllers', 'usersController'))(logger, config);

	/* GET users listing. */
	router.get('/', function (req, res) {
		usersController.getUsers(function (err, usersList) {
			if (err) {
				res.status(err.status).json({
					message: err.message
				});
			} else {
				res.status(200).json(usersList);
			}

		});
	});
	
	return router;
};
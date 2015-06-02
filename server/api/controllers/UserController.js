/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	getCurrentUser: function(req, res) {
		console.log(req.user);
		if (req.user) {
			res.json(req.user);
		} else {
			// user isn't logged in
			res.send(403);
		}
	}
};


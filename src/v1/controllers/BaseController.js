// const error_handler = require('../../lib/error_handler');

class BaseController {
	constructor(services, helpers) {
		// Load the services
		if (services) {
			for (let x = 0; x < services.length; x++) {
				this[services[x].className] = services[x];
			}

			// Base Service is everything so it doesn't matter what service it is
			this.BaseService = services[0];
		}

		// Load the helpers
		if (helpers) {
			for (let x = 0; x < helpers.length; x++) {
				this[helpers[x].className] = helpers[x];
			}
		}
	}
	controllerErrorHandler(e, req, res) {
		// error_handler.controllerHandler(e, req, res);

		console.log(e);
	}
}

module.exports = BaseController;

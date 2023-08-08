const BaseService = require('./BaseService');

class CustomerService extends BaseService {
	Model;
	static className = 'CustomerService';
	constructor() {
		const Model = require('../models/image.model.js');
		super(Model);

		this.Model = Model;
		this.with_relation = false;
		this.relations = {};
	}
}

module.exports = CustomerService;

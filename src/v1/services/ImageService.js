const BaseService = require('./BaseService');
const Model = require('../models/image.model.js');
class CustomerService extends BaseService {
	Model;
	static className = 'CustomerService';
	constructor() {
		super(Model);

		this.Model = Model;
		this.with_relation = false;
		this.relations = {};
	}
}

module.exports = CustomerService;

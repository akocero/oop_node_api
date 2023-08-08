const BaseService = require('./BaseService');

class CollectionService extends BaseService {
	Model;
	static className = 'CollectionService';
	constructor() {
		const Model = require('../models/collection.model.js');
		super(Model);

		this.Model = Model;
		this.with_relation = true;
		this.relations = ['coverPhoto', 'shopBanner'];
	}
}

module.exports = CollectionService;

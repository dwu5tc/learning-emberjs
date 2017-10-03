import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		const id = params.order_id; // why underscore?
		const store = this.get('store');
		return this.getStoreById(id);
	},
	store: Ember.inject.service() // no semicolon here
})

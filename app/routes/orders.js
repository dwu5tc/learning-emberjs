import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.get('store').getOrders();
/*		const store = this.get('store');
		return store.getOrders();*/
	},
	// store: Ember.inject.service('store')
	store: Ember.inject.service() // inferred 
});
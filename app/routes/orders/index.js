import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		createOrder(order) {
			this.get('store').saveOrder(order);
			this.transitionTo('orders.order', order); // transition to orders.order route, passing order as model param
		},

		addItemQuantity(lineItem, amount) {
			lineItem.incrementProperty('quantity', amount); // provided by ember
		}
	},

	model() {
		return this.get('store').newOrder();
	},

	// store: Ember.inject.service('store')
	store: Ember.inject.service() // inferred 
});

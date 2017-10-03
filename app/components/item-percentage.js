import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		toggleDetails() {
			this.toggleProperty('showDetails');
		}
	},

	percentage: Ember.computed('itemPrice', 'orderPrice', function() {
		return this.get('itemPrice') / this.get('orderPrice') * 100;
	}),

	isImportant: Ember.computed.gte('percentage', 50)
});

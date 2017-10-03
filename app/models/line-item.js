import Ember from 'ember';

export default Ember.Object.extend({
	// title: Ember.computed('product.title', function() {
	// 	return this.get('product.title');
	// })
	title: Ember.computed.alias('product.title'), // does same thing as above

	unitPrice: Ember.computed.alias('product.price'),

	price: Ember.computed('quantity', 'unitPrice', function() {
		return parseInt(this.get('quantity'), 10) * this.get('unitPrice'); // parseInt indicates base 10 as good practice
	})
});
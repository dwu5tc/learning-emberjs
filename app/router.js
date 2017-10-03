import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	// this.route('orders', { path: '/orders' });
	// this.route('orders'); // inferred
	this.route('orders', function() {
		this.route('order', { path: '/:order_id' });
	});
	this.route('idk');
});

export default Router;

// why does refreshing on http://localhost:4200/orders/some-order return blank page with errors?
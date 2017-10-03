import Ember from 'ember';
import LineItem from "p1-ember/models/line-item";
import Order from "p1-ember/models/order";
import Product from "p1-ember/models/product";

const products = [
	Product.create({ title: 'Tent', price: 10, descrption: 'This is a tent.'}),
	Product.create({ title: 'Sleeping Bag', price: 5, descrption: 'This is a sleeping bag.'}),
	Product.create({ title: 'Flashlight', price: 2, descrption: 'This is a flashlight.'}),
	Product.create({ title: 'First-Aid Kit', price: 3, descrption: 'This is a first-aid kit.'})
];

const orders = [
	Order.create({ id: '1234', name: 'Blaise Bobfish', 
		items: [
			LineItem.create({ product: products[0], quantity: 1}),
			LineItem.create({ product: products[1], quantity: 1}),
			LineItem.create({ product: products[2], quantity: 0}),
			LineItem.create({ product: products[3], quantity: 0})
		]
	}),
	Order.create({ id: '4321', name: 'Idk idkidk', 
		items: [
			LineItem.create({ product: products[0], quantity: 0}),
			LineItem.create({ product: products[1], quantity: 1}),
			LineItem.create({ product: products[2], quantity: 1}),
			LineItem.create({ product: products[3], quantity: 0})
		]
	});
];

export default Ember.Service.extend({
	getOrders() {
		return orders;
	},

	getOrderById(id) {
		const orders = this.getOrders();
		return orders.findBy('id', id); // provided by ember
	},

	getProducts() {
		return products;
	},

	newOrder() {
		return Order.create({
			items: products.map(product => {
				return LineItem.create({
					product: product
				});
			})
		});
	},

	saveOrder() {
		order.set('id', 9999);
		orders.pushObject(order); // provided by ember. triggers value-changed events
	}
});

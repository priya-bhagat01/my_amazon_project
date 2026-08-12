import {updateBillSummary} from './CheckoutBill.js';
import {cart} from './Cart.js';

//Gets previous orders from storage
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder() {
	const calculatedTotal = updateBillSummary();

	const newOrder = {
		id: crypto.randomUUID(), //Generate nique id for each placed order
		orderTime: new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric'}), //Gets date of order
		totalCost: calculatedTotal || 0,
		items: cart
    };

	orders.unshift(newOrder); //Saves each order on top of other opp to push
	localStorage.setItem('orders', JSON.stringify(orders));
};

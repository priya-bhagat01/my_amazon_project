import {products} from './Data.js';
import {deliveryOptions, calculateDeliveryDate} from './DeliveryDate.js';
import {orders, addOrder} from './OrderDetails.js'
import {cart, saveStorage, addCartItems, removeFromCart, updateQuantity, resetCart} from '../Amazonproject.js/Cart.js';
import {updateItems, cartItemPrice, cartShippingPrice, updateBillSummary} from './CheckoutBill.js';

export function calculateDeliveryProgress(orderTime, deliveryDateString) {
	const currentTime = new Date();
	const orderTimeMs = new Date(orderTime).getTime();

	const currentYear = currentTime.getFullYear();
	const fullDeliveryDateString = deliveryDateString.includes(currentYear)
      ? deliveryDateString
      : `${deliveryDateString}, ${currentYear}`;

	const deliveryTimeMs = new Date(fullDeliveryDateString).getTime();

	const progressPercentage = ((currentTime - orderTimeMs) / (deliveryTimeMs - orderTimeMs)) * 100;

	return Math.min(Math.max(progressPercentage, 0), 100);
}
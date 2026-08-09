//Get today's date
//Do calculations (7 days, 3 days, 1 day)
//Display in easy to read format

export function calculateDeliveryDate(daysFromToday) {
	const today = new Date();
	const deliveryDate = new Date(today);

	deliveryDate.setDate(today.getDate() + daysFromToday);

	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const dayName = daysOfWeek[deliveryDate.getDay()];
	const monthName = months[deliveryDate.getMonth()];
	const dayOfMonth = deliveryDate.getDate();

	const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;

	return formattedDate;
};
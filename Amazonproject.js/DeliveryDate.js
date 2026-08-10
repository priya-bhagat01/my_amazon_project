//Get today's date
//Do calculations (7 days, 3 days, 1 day)
//Display in easy to read format

export const deliveryOptions = [
	{
		id: '1',
		deliveryDays: 7,
		price: 0
    },
    {
		id: '2',
		deliveryDays: 3,
		price: 50
    },
    {
		id: '3',
		deliveryDays: 1,
		price: 100
    }];

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
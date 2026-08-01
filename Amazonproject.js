"use strict";
const products = [
{
	id: "bd984d2f-fecc-44b1-8eb6-bfb966f3b986", //(Generated uuid)
	image: 'Amazonproject.png/Socks.jpg' ,
	name: 'Black and Gray Athletic Cotton Socks - 6 Pairs' ,
	ratings: {
		stars: 4.5 ,
		count: 87
	} ,
	price: 345
} ,
{
	id: "a203cb02-b499-48ce-89ec-2e027b985975",
	image: 'Amazonproject.png/Basketball.jpg' ,
	name: 'Intermediate Size Basketball' ,
	ratings: {
		stars: 4.0 ,
		count: 127
	} ,
	price: 2000
} ,
{
	id: "6ef2dd62-984e-4af1-b207-dc4e76b94c1b",
	image: 'Amazonproject.png/Tshirt.jpg' ,
	name: 'Adults Plain Cotton T-Shirt - 2 Pack' ,
	ratings: {
		stars: 4.5 ,
		count: 56
	} ,
	price: 549
} ,
{
	id: "4a061a2a-a0e3-424f-b8a4-16b96a82f0fe",
	image: 'Amazonproject.png/Toaster.jpg' ,
	name: '2 Slot Toaster - Black' ,
	ratings: {
		stars: 5.0 ,
		count: 2197
	} ,
	price: 1999
} ,
{
	id: "c4c3f352-074c-4d9e-8e25-95a288ce9a7c",
	image: 'Amazonproject.png/Plates.jpg' ,
	name: '6 Piece White Dinner Plate Set' ,
	ratings: {
		stars: 4.0 ,
		count: 37
	} ,
	price: 559
} ,
{
	id: "20a21217-3bec-41cf-a5b0-e0a7137f53f6",
	image: 'Amazonproject.png/Baking-set.jpg' ,
	name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set' ,
	ratings: {
		stars: 4.5 ,
		count: 175
	} ,
	price: 3718
} ,
{
	id: "f1c7901a-ffa2-453d-a973-15b8d3fea5bd",
	image: 'Amazonproject.png/Sweatshirt.jpg' ,
	name: 'Plain Hooded Fleece Sweatshirt' ,
	ratings: {
		stars: 4.5 ,
		count: 317
	} ,
	price: 899
} ,
{
	id: "197afe0c-cd6b-411a-9657-57de57f9dbc9",
	image: 'Amazonproject.png/Towel.jpg' ,
	name: 'Luxury Towel Set - Graphite Gray' ,
	ratings: {
		stars: 4.5 ,
		count: 144
	} ,
	price: 3475
} ,
{
	id: "b98c0703-7299-4b3b-b12c-56738f9c3923",
	image: 'Amazonproject.png/Liquid-detergent.jpg' ,
	name: 'Liquid Laundry Detergent, 110 Loads, 82.5 F1 Oz' ,
	ratings: {
		stars: 4.5 ,
		count: 305
	} ,
	price: 2036
} ,
{
	id: "12a0e706-1996-4078-afa1-3c5de2102567",
	image: 'Amazonproject.png/Sneakers.jpg' ,
	name: 'Waterproof Knit Athletic Sneakers - Gray' ,
	ratings: {
		stars: 4.0 ,
		count: 89
	} ,
	price: 1499
} , 
{
	id: "909a2614-fcc9-4dfe-b247-470dfdeecd1e",
	image: 'Amazonproject.png/Women-chiffon-beachwear.jpg' ,
	name: "Women's Chiffon Beachwear Cover Up - Black" ,
	ratings: {
		stars: 4.5 ,
		count: 235
	} ,
	price: 790
} ,
{
	id: "76647a83-5685-4be8-b143-4d502dc0b6d7",
	image: 'Amazonproject.png/Sunglasses.jpg' ,
	name: 'Round Sunglasses' ,
	ratings: {
		stars: 4.5 ,
		count: 30
	} ,
	price: 1099
} ,

{
	id: "aa2b55e0-10ee-424e-942f-d84815dd1a5b",
	image: 'Amazonproject.png/Sandals.jpg' ,
	name: "Women's Two Strap Buckle Sandals - Tan" ,
	ratings: {
		stars: 4.5 ,
		count: 562
	} ,
	price: 1299
} ,
{
	id: "b1695ace-ca8d-4e8e-899f-898da83a3b19",
	image: 'Amazonproject.png/Curtain.jpg' ,
	name: 'Blackout Curtains Set 4-Pack - Beige' ,
	ratings: {
		stars: 4.5 ,
		count: 232
	} ,
	price: 2499
} ,
{
	id: "7bb008a1-779c-457b-a4d7-6e402d54c8c9",
	image: 'Amazonproject.png/Shorts.jpg' ,
	name: "Men's Slim-Fit Summer Shorts" ,
	ratings: {
		stars: 4.0 ,
		count: 160
	} ,
	price: 989
} ,
{
	id: "58864295-92dc-463a-8fa3-ac1476e02c1a",
	image: 'Amazonproject.png/Electric-hot-water-kettle.jpg' ,
	name: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter' ,
	ratings: {
		stars: 5.0 ,
		count: 846
	} ,
	price: 1250
} ,
{
	id: "ab625c65-4599-429a-a13d-dd2990f483c9",
	image: 'Amazonproject.png/Facial-tissue.jpg' ,
	name: 'Ultra Soft Tissue 2-Ply - 18 Box' ,
	ratings: {
		stars: 4.0 ,
		count: 99
	} ,
	price: 220
} ,
{
	id: "1371018f-e825-48d1-a918-ae17b5724328",
	image: 'Amazonproject.png/Sunhat.jpg' ,
	name: 'Straw Lifeguard Sun Hat' ,
	ratings: {
		stars: 4.0 ,
		count: 215
	} ,
	price: 1926
} ,
{
	id: "fe53902e-6134-4db6-853e-9f47ec0e28b9",
	image: 'Amazonproject.png/Earrings.jpg' ,
	name: 'Sterling Silver Sky Flower Stud Earrings' ,
	ratings: {
		stars: 4.5 ,
		count: 52
	} ,
	price: 3633
} ,
{
	id: "3a7f5ff1-075a-4939-889e-65095a57b8a7",
	image: 'Amazonproject.png/Hoodie.jpg' ,
	name: "Women's Stretch Popover Hoodie" ,
	ratings: {
		stars: 4.5 ,
		count: 2465
	} ,
	price: 1104	
} ,
{
	id: "7f19d210-1846-4b19-936c-d6c793adf1a5",
	image: 'Amazonproject.png/Bathroom-rug.jpg' ,
	name: 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey' ,
	ratings: {
		stars: 4.5 ,
		count: 119
	} ,
	price: 3114
} ,
{
	id: "d1f73a5d-ce9f-4c7d-94af-860df451b8ab",
	image: 'Amazonproject.png/Knit-ballet-flat.jpg' ,
	name: "Women's Knit Ballet Flat" ,
	ratings: {
		stars: 4.0 ,
		count: 326
	} ,
	price: 999
} ,
{
	id: "9fe7c835-beb0-45a7-8c8d-ab6464f62477",
	image: 'Amazonproject.png/Tshirt-blue.jpg' ,
	name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt" ,
	ratings: {
		stars: 4.5 ,
		count: 2556
	} ,
	price: 1499
} ,
{
	id: "79aa082a-afe2-4215-b3a8-b04d1f9764e0",
	image: 'Amazonproject.png/Trashcan.jpg' ,
	name: 'Trash Can with Foot Pedal - Brushed Stainless Steel' ,
	ratings: {
		stars: 4.5 ,
		count: 2286
	} ,
	price: 1939
} , 
{
	id: "9505811e-538c-44c8-848b-3e4a67bcfdb1",
	image: 'Amazonproject.png/Duvet-cover.jpg' ,
	name: 'Duvet Cover Set with Zipper Closure' ,
	ratings: {
		stars: 4.0 ,
		count: 456
	} ,
	price: 1899
} ,
{
	id: "62ca0b0b-9838-485d-81cb-6f2fa6057c26",
	image: 'Amazonproject.png/Beanie.jpg' ,
	name: "Women's Chunky Cable Beanie - Gray" ,
	ratings: {
		stars: 5.0 ,
		count: 83
	} ,
	price: 3427
} ,
{
	id: "5029001b-187c-43ea-b100-5c407b8b1ae3",
	image: 'Amazonproject.png/Pants.jpg' ,
	name: "Men's Classic-fit Pleated Chino Pants" ,
	ratings: {
		stars: 4.5 ,
		count: 9017
	} ,
	price: 1190
} ,
{
	id: "f0c09b4a-3af6-4a1d-b903-2c5ad4aac6e6",
	image: 'Amazonproject.png/Shoes.jpg' ,
	name: "Men's Athletic Sneaker" ,
	ratings: {
		stars: 4.0 ,
		count: 229
	} ,
	price: 4295
} ,
{
	id: "ad606227-5af4-4c5f-b7f8-d06446b0dd0e",
	image: 'Amazonproject.png/Sunglasses-green.jpg' ,
	name: "Men's Navigator Sunglasses Pilot" ,
	ratings: {
		stars: 4.5 ,
		count: 42
	} ,
	price: 1274
} ,
{
	id: "65d3f089-4456-403e-a8bf-1ac4f92a9e2d",
	image: 'Amazonproject.png/Cooking-set.jpg' ,
	name: 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces' ,
	ratings: {
		stars: 4.5 ,
		count: 511
	} ,
	price: 28924
} ,
{
	id: "49c2d41e-70bc-4ed8-88fc-e100fb4396d7",
	image: 'Amazonproject.png/Mirror.jpg' ,
	name: 'Vanity Mirror with Heavy Base - Chrome' ,
	ratings: {
		stars: 4.5 ,
		count: 130
	} ,
	price: 1197
} ,
{
	id: "a26afc68-4e04-4d49-8e52-a2e5f3f42481",
	image: 'Amazonproject.png/Jogger.jpg' ,
	name: "Women's Fleece Jogger Sweatpant" ,
	ratings: {
		stars: 4.5 ,
		count: 248
	} ,
	price: 1299
} ,
{
	id: "fb8211a3-e746-448d-bd37-96e100777e5c",
	image: 'Amazonproject.png/Wire-earrings.jpg' ,
	name: 'Double Oval Twist French Wire Earrings - Gold' ,
	ratings: {
		stars: 4.5 ,
		count: 117
	} ,
	price: 2399
} ,
{
	id: "4392247f-6d72-4c72-aab1-b766b835f4a3",
	image: 'Amazonproject.png/Airtight-containers.jpg' ,
	name: 'Round Airtight Food Storage Containers - 5 Piece' ,
	ratings: {
		stars: 4.0 ,
		count: 126
	} ,
	price: 299
} ,
{
	id: "23918569-d4a9-4706-864f-189c2c42f2d7",
	image: 'Amazonproject.png/Coffeemaker.jpg' ,
	name: 'Coffeemaker with Glass Carafe and Reusable - 25 Oz Black' ,
	ratings: {
		stars: 4.5 ,
		count: 1211
	} ,
	price: 30579
} ,
{
	id: "82d08c6f-46e7-4ca1-8b4f-16610c6cf15d",
	image: 'Amazonproject.png/Curtains-black.jpg' ,
	name: 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels' ,
	ratings: {
		stars: 4.5 ,
		count: 363
	} ,
	price: 5272
} , 
{
	id: "e3dcd6e0-c69c-4efb-a327-355f8101c003",
	image: 'Amazonproject.png/Bath-towels.jpg' ,
	name: '100% Cotton Bath Towels - 2 Pack, Light Teal' ,
	ratings: {
		stars: 4.5 ,
		count: 93
	} ,
	price: 798
} ,
{
	id: "c4da82b7-1961-4a31-8a0f-9edbf8a06248",
	image: 'Amazonproject.png/Sneakers-pink.jpg' ,
	name: 'Waterproof Knit Athletic Sneakers - Pink' ,
	ratings: {
		stars: 4.0 ,
		count: 89
	} ,
	price: 7499
} ,
{
	id: "27e21109-2e09-4326-9071-1af23993335c",
	image: 'Amazonproject.png/Blender.jpg' ,
	name: 'Countertop Blender - 64oz, 1400 Watts' ,
	ratings: {
		stars: 4.0 ,
		count: 3
	} ,
	price: 7612
} ,
{
	id: "e4ff9965-d247-4f97-bdce-c8ac6df9b945",
	image: 'Amazonproject.png/Bowl-set.jpg' ,
	name: '10-Piece Mixing Bowl Set with Lids - Floral' ,
	ratings: {
		stars: 5.0 ,
		count: 679
	} ,
	price: 5006
} ,
{
	id: "5d079729-9470-4ed9-a9ba-d96b062dfc02",
	image: 'Amazonproject.png/Paper-towels.jpg' ,
	name: '2-Ply Kitchen Paper Towels - 30 Pack' ,
	ratings: {
		stars: 4.5 ,
		count: 1045
	} ,
	price: 375
} ,
{
	id: "01417ed0-6469-47e4-a726-99165fd57752",
	image: 'Amazonproject.png/Hoodie-red.jpg' ,
	name: "Men's Full-Zip Hooded Fleece Sweatshirt" ,
	ratings: {
		stars: 4.5 ,
		count: 3157
	} ,
	price: 1275
}];

let productsHTML = '';

products.forEach((product) => {
	productsHTML += `
		<div class="main-page">
			<div class="items">
				<img class="mainPageItems" src="${product.image}">
		    </div>
		    <div class="itemDetails">
				<p class="main-page-title limit-lines">${product.name}</p>
			</div>
			<div class="price-rating">
				<img class="ratings" src="Amazonproject.png/Rating-${(product.ratings.stars)*10}.jpg">
				<div class="rating-no">${product.ratings.count}</div>
			    <p class="screen-price">₹${product.price}</p>
			</div>
			<div class="selectItems">
				<select class="noOfItems" data-product-id="${product.id}">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
		    </div>
		    <div class="space"></div>
		    <div class="added-message" data-product-id="${product.id}">
		        <!-- <img class="added-to-cart" src="Amazonproject.png/Checkmark.jpg">
		        Added -->
		    </div>
		    <div class="addingItems">
		    	<button class="cartButton" data-product-id="${product.id}">Add To Cart</button>
		    </div>
		</div>
	`
});

// 1. Get the ID of the thing clicked.
// 2. Search the existing list to see if we already have it.
// 3. IF found     → Increase its count.
// 4. IF NOT found → Push a new object into the list.
// const cart = [];

document.querySelector('.Amazon-home-page')
 .innerHTML = productsHTML;

// 1. Get the ID of the thing clicked.
// 2. Search the existing list to see if we already have it.
// 3. IF found     → Increase its count.
// 4. IF NOT found → Push a new object into the list.

const cart =[];
let messageTimeouts;

document.querySelectorAll('.cartButton')
 .forEach((button) => {
 	button.addEventListener(('click') , () => {
 		const productId = button.dataset.productId; // Get the ID from the button's dataset

 		//Use DOM to get Added message when clicked on Add to Cart
		const message = document.querySelector(`.added-message[data-product-id="${productId}"]`);
		//Add class to message using .classList.add() then style to opacity 1
		message.innerHTML = `<img class="added-to-cart" src="Amazonproject.png/Checkmark.jpg">
		        Added`;
		message.classList.add('style-message');

		//use clearTimeout to add 2 seconds timeout for multiple clicks
		if (messageTimeouts) {
			clearTimeout(messageTimeouts);
		}

		//use setTimeout and make message disappear
		messageTimeouts = setTimeout(() => {
			message.classList.remove('style-message');
		}, 2000);

		//use DOM to get select element (noOfItems)
		//get value selected in noOfItems (use .'value' property)
		// when updating cart quantity use value instead of 1

		const selectedQuantity = document.querySelector(`.noOfItems[data-product-id="${productId}"]`); 
		//"Find the <select> with class .noOfItems whose data-product-id attribute is equal to
		const selectedValue = Number(selectedQuantity.value);

 		let matchingItem; 

 		cart.forEach((item) => {	// Loop through cart to find if it already exists
	 		if (productId === item.productId) {
	 			matchingItem = item;
	 		};
 		});

 		if (matchingItem) {
 			matchingItem.quantity += selectedValue ;
 		} else {
 			cart.push({
 				productId: productId, 
 				quantity: selectedValue
 			});
 		} 

 		let cartQuantity = 0;

 		cart.forEach((item) => {
 			cartQuantity += item.quantity;
 		});

 		document.querySelector('.cartCount')
 		 .innerHTML = cartQuantity;
 	});
});
//Use DOM to get Added message when clicked on Add to Cart
const message = document.querySelector('.added-message');
//Add class to message using .classList.add() then style to opacity 1
message.classList.add('style-message');
"use strict";
const products = [
{
	image: 'Amazonproject.png/Socks.jpg' ,
	name: 'Black and Gray Athletic Cotton Socks - 6 Pairs' ,
	ratings: {
		stars: 4.5 ,
		count: 87
	} ,
	price: 345
} ,
{
	image: 'Amazonproject.png/Basketball.jpg' ,
	name: 'Intermediate Size Basketball' ,
	ratings: {
		stars: 4.0 ,
		count: 127
	} ,
	price: 2000
} ,
{
	image: 'Amazonproject.png/Tshirt.jpg' ,
	name: 'Adults Plain Cotton T-Shirt - 2 Pack' ,
	ratings: {
		stars: 4.5 ,
		count: 56
	} ,
	price: 549
} ,
{
	image: 'Amazonproject.png/Toaster.jpg' ,
	name: '2 Slot Toaster - Black' ,
	ratings: {
		stars: 5.0 ,
		count: 2197
	} ,
	price: 1999
} ,
{
	image: 'Amazonproject.png/Plates.jpg' ,
	name: '6 Piece White Dinner Plate Set' ,
	ratings: {
		stars: 4.0 ,
		count: 37
	} ,
	price: 559
} ,
{
	image: 'Amazonproject.png/Baking-set.jpg' ,
	name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set' ,
	ratings: {
		stars: 4.5 ,
		count: 175
	} ,
	price: 3718
} ,
{
	image: 'Amazonproject.png/Sweatshirt.jpg' ,
	name: 'Plain Hooded Fleece Sweatshirt' ,
	ratings: {
		stars: 4.5 ,
		count: 317
	} ,
	price: 899
} ,
{
	image: 'Amazonproject.png/Towel.jpg' ,
	name: 'Luxury Towel Set - Graphite Gray' ,
	ratings: {
		stars: 4.5 ,
		count: 144
	} ,
	price: 3475
} ,
{
	image: 'Amazonproject.png/Liquid-detergent.jpg' ,
	name: 'Liquid Laundry Detergent, 110 Loads, 82.5 F1 Oz' ,
	ratings: {
		stars: 4.5 ,
		count: 305
	} ,
	price: 2036
} ,
{
	image: 'Amazonproject.png/Sneakers.jpg' ,
	name: 'Waterproof Knit Athletic Sneakers - Gray' ,
	ratings: {
		stars: 4.0 ,
		count: 89
	} ,
	price: 1499
} , 
{
	image: 'Amazonproject.png/Women-chiffon-beachwear.jpg' ,
	name: "Women's Chiffon Beachwear Cover Up - Black" ,
	ratings: {
		stars: 4.5 ,
		count: 235
	} ,
	price: 790
} ,
{
	image: 'Amazonproject.png/Sunglasses.jpg' ,
	name: 'Round Sunglasses' ,
	ratings: {
		stars: 4.5 ,
		count: 30
	} ,
	price: 1099
} ,

{
	image: 'Amazonproject.png/Sandals.jpg' ,
	name: "Women's Two Strap Buckle Sandals - Tan" ,
	ratings: {
		stars: 4.5 ,
		count: 562
	} ,
	price: 1299
} ,
{
	image: 'Amazonproject.png/Curtain.jpg' ,
	name: 'Blackout Curtains Set 4-Pack - Beige' ,
	ratings: {
		stars: 4.5 ,
		count: 232
	} ,
	price: 2499
} ,
{
	image: 'Amazonproject.png/Shorts.jpg' ,
	name: "Men's Slim-Fit Summer Shorts" ,
	ratings: {
		stars: 4.0 ,
		count: 160
	} ,
	price: 989
} ,
{
	image: 'Amazonproject.png/Electric-hot-water-kettle.jpg' ,
	name: 'Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter' ,
	ratings: {
		stars: 5.0 ,
		count: 846
	} ,
	price: 1250
} ,
{
	image: 'Amazonproject.png/Facial-tissue.jpg' ,
	name: 'Ultra Soft Tissue 2-Ply - 18 Box' ,
	ratings: {
		stars: 4.0 ,
		count: 99
	} ,
	price: 220
} ,
{
	image: 'Amazonproject.png/Sunhat.jpg' ,
	name: 'Straw Lifeguard Sun Hat' ,
	ratings: {
		stars: 4.0 ,
		count: 215
	} ,
	price: 1926
} ,
{
	image: 'Amazonproject.png/Earrings.jpg' ,
	name: 'Sterling Silver Sky Flower Stud Earrings' ,
	ratings: {
		stars: 4.5 ,
		count: 52
	} ,
	price: 3633
} ,
{
	image: 'Amazonproject.png/Hoodie.jpg' ,
	name: "Women's Stretch Popover Hoodie" ,
	ratings: {
		stars: 4.5 ,
		count: 2465
	} ,
	price: 1104	
} ,
{
	image: 'Amazonproject.png/Bathroom-rug.jpg' ,
	name: 'Bathroom Bath Rug Mat 20 x 31 Inch - Grey' ,
	ratings: {
		stars: 4.5 ,
		count: 119
	} ,
	price: 3114
} ,
{
	image: 'Amazonproject.png/Knit-ballet-flat.jpg' ,
	name: "Women's Knit Ballet Flat" ,
	ratings: {
		stars: 4.0 ,
		count: 326
	} ,
	price: 999
} ,{
	image: 'Amazonproject.png/Tshirt-blue.jpg' ,
	name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt" ,
	ratings: {
		stars: 4.5 ,
		count: 2556
	} ,
	price: 1499
} ,
{
	image: 'Amazonproject.png/Trashcan.jpg' ,
	name: 'Trash Can with Foot Pedal - Brushed Stainless Steel' ,
	ratings: {
		stars: 4.5 ,
		count: 2286
	} ,
	price: 1939
} , 
{
	image: 'Amazonproject.png/Duvet-cover.jpg' ,
	name: 'Duvet Cover Set with Zipper Closure' ,
	ratings: {
		stars: 4.0 ,
		count: 456
	} ,
	price: 1899
} ,
{
	image: 'Amazonproject.png/Beanie.jpg' ,
	name: "Women's Chunky Cable Beanie - Gray" ,
	ratings: {
		stars: 5.0 ,
		count: 83
	} ,
	price: 3427
} ,
{
	image: 'Amazonproject.png/Pants.jpg' ,
	name: "Men's Classic-fit Pleated Chino Pants" ,
	ratings: {
		stars: 4.5 ,
		count: 9017
	} ,
	price: 1190
} ,
{
	image: 'Amazonproject.png/Shoes.jpg' ,
	name: "Men's Athletic Sneaker" ,
	ratings: {
		stars: 4.0 ,
		count: 229
	} ,
	price: 4295
} ,
{
	image: 'Amazonproject.png/Sunglasses-green.jpg' ,
	name: "Men's Navigator Sunglasses Pilot" ,
	ratings: {
		stars: 4.5 ,
		count: 42
	} ,
	price: 1274
} ,
{
	image: 'Amazonproject.png/Cooking-set.jpg' ,
	name: 'Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces' ,
	ratings: {
		stars: 4.5 ,
		count: 511
	} ,
	price: 28924
} ,
{
	image: 'Amazonproject.png/Mirror.jpg' ,
	name: 'Vanity Mirror with Heavy Base - Chrome' ,
	ratings: {
		stars: 4.5 ,
		count: 130
	} ,
	price: 1197
} ,
{
	image: 'Amazonproject.png/Jogger.jpg' ,
	name: "Women's Fleece Jogger Sweatpant" ,
	ratings: {
		stars: 4.5 ,
		count: 248
	} ,
	price: 1299
} ,
{
	image: 'Amazonproject.png/Wire-earrings.jpg' ,
	name: 'Double Oval Twist French Wire Earrings - Gold' ,
	ratings: {
		stars: 4.5 ,
		count: 117
	} ,
	price: 2399
} ,
{
	image: 'Amazonproject.png/Airtight-containers.jpg' ,
	name: 'Round Airtight Food Storage Containers - 5 Piece' ,
	ratings: {
		stars: 4.0 ,
		count: 126
	} ,
	price: 299
} ,{
	image: 'Amazonproject.png/Coffeemaker.jpg' ,
	name: 'Coffeemaker with Glass Carafe and Reusable - 25 Oz Black' ,
	ratings: {
		stars: 4.5 ,
		count: 1211
	} ,
	price: 30579
} ,
{
	image: 'Amazonproject.png/Curtains-black.jpg' ,
	name: 'Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels' ,
	ratings: {
		stars: 4.5 ,
		count: 363
	} ,
	price: 5272
} , 
{
	image: 'Amazonproject.png/Bath-towels.jpg' ,
	name: '100% Cotton Bath Towels - 2 Pack, Light Teal' ,
	ratings: {
		stars: 4.5 ,
		count: 93
	} ,
	price: 798
} ,
{
	image: 'Amazonproject.png/Sneakers-pink.jpg' ,
	name: 'Waterproof Knit Athletic Sneakers - Pink' ,
	ratings: {
		stars: 4.0 ,
		count: 89
	} ,
	price: 7499
} ,
{
	image: 'Amazonproject.png/Blender.jpg' ,
	name: 'Countertop Blender - 64oz, 1400 Watts' ,
	ratings: {
		stars: 4.0 ,
		count: 3
	} ,
	price: 7612
} ,
{
	image: 'Amazonproject.png/Bowl-set.jpg' ,
	name: '10-Piece Mixing Bowl Set with Lids - Floral' ,
	ratings: {
		stars: 5.0 ,
		count: 679
	} ,
	price: 5006
} ,
{
	image: 'Amazonproject.png/Paper-towels.jpg' ,
	name: '2-Ply Kitchen Paper Towels - 30 Pack' ,
	ratings: {
		stars: 4.5 ,
		count: 1045
	} ,
	price: 375
} ,
{
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
				<select class="noOfItems">
					<option value="1">1</option>
					<option value="1">2</option>
					<option value="1">3</option>
					<option value="1">4</option>
					<option value="1">5</option>
					<option value="1">6</option>
					<option value="1">7</option>
					<option value="1">8</option>
					<option value="1">9</option>
					<option value="1">10</option>
				</select>
		    </div>
		    <div class="addingItems">
		    	<button class="cartButton">Add To Cart</button>
		    </div>
		</div>
	`
});

document.querySelector('.Amazon-home-page')
 .innerHTML = productsHTML;
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
	image: 'Amazonproject.png/Basketball.jpg' ,
	name: 'Intermediate Size Basketball' ,
	ratings: {
		stars: 4.0 ,
		count: 127
	} ,
	price: 2000
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
	image: 'Amazonproject.png/Basketball.jpg' ,
	name: 'Intermediate Size Basketball' ,
	ratings: {
		stars: 4.0 ,
		count: 127
	} ,
	price: 2000
} ,{
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
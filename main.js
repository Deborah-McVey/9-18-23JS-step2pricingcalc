/* STEP 2: PRICING CALCULATOR
Aim: Create a JavaScript calculator that takes in a price and quantity and displays the total

| ./pricing-calculator.html |

[ ] Build out the HTML
Create an input + label for the price
Create an input + label for the quantity
Below the form, create a place to display the total price
<!-- * MAIN CONTENT * -->
<main class="container">
	<h1>Pricing Calculator!</h1>

	<!-- User Input Form -->
	<form class="pricing-form">
		<!-- Price -->
		<div>
			<label for="price">Price</label>
			<input type="number" name="price" id="price" value="50" min="0" />
		</div>

		<!-- Quantity -->
		<div>
			<label for="quantity">Quantity <span class="quantity-label"></span></label>
			<input type="range" name="quantity" id="quantity" value="1" min="1" max="25" step="1" />
		</div>
	</form>

	<!-- Data Display -->
	<section class="data-display"><p class="total-price"></p></section>
</main>

| ./pricing-calculator.js |

[ ] Establish the Element Selectors
Create a variable for the price input
Create a variable for the quantity input
Create a variable for the total price display
// * ========== HTML Element Selectors ========== * \\
const priceInput = document.querySelector('#price');
const quantityInput = document.querySelector('#quantity');
const totalPriceDisplay = document.querySelector('.total-price');

[ ] Initiate the Event Listeners
Create an event listener for the price input change that calls the calculateTotalCost function
Create an event listener for the quantity input change that calls the calculateTotalCost function
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Calculate Total Cost When Price Input Changes
priceInput.addEventListener('input', calculateTotalCost);

// EVENT LISTENER: Calculate Total Cost When Quantity Input Changes
quantityInput.addEventListener('input', calculateTotalCost);

[ ] Declare the Functions
Create a variable that holds the total price
Check this value in the console
Display this total to the webpage
// * ========== Function Declarations ========== * \\
// FUNCTION: Calculate total Cost
function calculateTotalCost() {
	const total = priceInput.value * quantityInput.value;
	totalPriceDisplay.innerText = `$${total.toFixed(2)}`;
}

[ ] Generate the Total Cost on Application Start
// * ========== Application Start ========== * \\
// Calcualte the Total Cost When the Application Starts
calculateTotalCost();

[ ] Construct a Quantity Label
Create a variable that represents the quantity label paragraph
Create a function that uses the quantity inputs value to set the innerText
Add an event listener to the input that updates the quantity label
Call the function on application load
// * ========== HTML Element Selectors ========== * \\
// . . .
const quantityLabel = document.querySelector('.quantity-label');

// * ========== Function Declarations ========== * \\
// . . .

// FUNCTION: Update Quantity Label
function updateQuantityLabel() {
	const quantity = quantityInput.value;
	quantityLabel.innerText = quantity;
}

// * ========== Event Listeners ========== * \\
// . . .

// EVENT LISTENER: Update Quantity Label When Quantity Input Changes
quantityInput.addEventListener('input', updateQuantityLabel);

// * ========== Application Start ========== * \\
// . . .

// Update the Quantity Label When the Application Starts
updateQuantityLabel();

Check: Ensure the math is correct

Does the total price show $100 for a price of $50 and a quantity of 2?
Does the total price show $625 for a price of $25 and a quantity of 25? */

const priceInput = document.querySelector('#price');
const quantityInput = document.querySelector('#quantity');
const totalPriceDisplay = document.querySelector('.total-price');

priceInput.addEventListener('input', calculateTotalCost);
quantityInput.addEventListener('input', calculateTotalCost);

function calculateTotalCost() {
	const total = priceInput.value * quantityInput.value;
	totalPriceDisplay.innerText = `$${total.toFixed(2)}`;
}

calculateTotalCost();

const quantityLabel = document.querySelector('.quantity-label');

function updateQuantityLabel() {
	const quantity = quantityInput.value;
	quantityLabel.innerText = quantity;
}

quantityInput.addEventListener('input', updateQuantityLabel);

updateQuantityLabel();
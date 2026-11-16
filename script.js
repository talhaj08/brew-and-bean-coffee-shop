// 1. Order Now Button Alert (for index.html)
function placeOrder() {
    window.alert("Thank you for choosing Brew & Bean! Please select your items at the counter or visit our Contact page to place an online order.");
    console.log("Order Now button clicked by user.");
}

// 2. Interactive Menu Item Selector (for index.html table rows)
function selectMenuItem(itemName, price) {
    window.alert("You selected: " + itemName + " (" + price + "). Click 'Order Now' to proceed!");
    console.log("Menu item selected:", itemName, price);
}

// 3. Contact / Inquiry Form Submission (for contact.html)
function submitContactForm(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const name = document.getElementById("customer-name").value;
    const item = document.getElementById("favorite-drink").value;

    window.alert("Thank you, " + name + "! Your request regarding '" + item + "' has been received. We will get back to you shortly.");
    console.log("Form submitted by:", name, "| Topic/Drink:", item);

    // Clear the form fields after submission
    document.getElementById("contact-form").reset();
}

// 4. Daily Special Greeting (runs automatically when the page loads)
window.onload = function() {
    console.log("Brew & Bean Coffee Shop website loaded successfully.");
};
function toggleDarkLight() {
    var body = document.body;
    var button = document.getElementById('modeButton');
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      button.innerHTML = '☀️ Light Mode'; // Moon icon for dark mode
    } else {
      button.innerHTML = '🌙 Dark Mode'; // Sun icon for light mode
    }
  }


function openCartNav() {
    document.getElementById("myCartSidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeCartNav() {
    document.getElementById("myCartSidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

function addToCart(productName) {
    let cartItems = document.getElementById("cartItems");
    let existingItem = document.querySelector(`li[data-product='${productName}']`);

    if (existingItem) {
        // Increment count if the item is already in the cart
        let countElement = existingItem.querySelector('.count');
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
    } else {
        // Add new item to the cart if not already present
        let listItem = document.createElement("li");
        listItem.setAttribute("data-product", productName);
        listItem.innerHTML = `${productName} <span class="count">1</span>`;
        cartItems.appendChild(listItem);
    }
}
  




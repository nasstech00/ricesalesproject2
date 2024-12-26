function navigateTo(page) {
    window.location.href = page;
}


// NIN Validation Simulation
document.getElementById('nin').addEventListener('input', function () {
    const ninValidationMessage = document.getElementById('nin-validation');
    const ninValue = this.value;

    if (ninValue.length === 11 && !isNaN(ninValue)) {
        ninValidationMessage.textContent = "NIN Validated Successfully!";
        ninValidationMessage.style.color = "green";
    } else {
        ninValidationMessage.textContent = "Invalid NIN. Must be 11 digits.";
        ninValidationMessage.style.color = "red";
    }
});

// GPS Coordinates Capture Simulation
function captureGPS() {
    const gpsDisplay = document.getElementById('gps-coordinates');
    // Simulating GPS coordinates
    gpsDisplay.textContent = "Coordinates: 13.0059, 5.2476"; // Example: Sokoto coordinates
}

document.getElementById('purchaseButton').addEventListener('click', function () {
    processPurchase();
});

function processPurchase() {
    const nin = document.getElementById('nin').value;
    const riceType = document.getElementById('riceType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerBag = riceType === "50kg" ? 20000 : 8000; // Example prices: 50kg = 20,000; 17kg = 8,000
    const totalPrice = pricePerBag * quantity;

    if (!nin || !riceType || isNaN(quantity) || quantity <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Show receipt
    document.getElementById('receipt-nin').textContent = nin;
    document.getElementById('receipt-rice-type').textContent = riceType;
    document.getElementById('receipt-quantity').textContent = quantity;
    document.getElementById('receipt-total').textContent = `₦${totalPrice.toLocaleString()}`;

    document.getElementById('receipt').style.display = 'block';
}

// Print Receipt
function printReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
}

document.getElementById('purchaseButton').addEventListener('click', function () {
    processPurchase();
});

function processPurchase() {
    const nin = document.getElementById('nin').value;
    const riceType = document.getElementById('riceType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerBag = riceType === "50kg" ? 20000 : 8000; // Example prices: 50kg = 20,000; 17kg = 8,000
    const totalPrice = pricePerBag * quantity;

    if (!nin || !riceType || isNaN(quantity) || quantity <= 0) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Show receipt
    document.getElementById('receipt-nin').textContent = nin;
    document.getElementById('receipt-rice-type').textContent = riceType;
    document.getElementById('receipt-quantity').textContent = quantity;
    document.getElementById('receipt-total').textContent = `₦${totalPrice.toLocaleString()}`;

    document.getElementById('receipt').style.display = 'block';
}

// Print Receipt
function printReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
}


//navigation
function n() {
    window.location.href = "purchase.html";
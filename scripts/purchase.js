// Purchase Processing


function toggleBuyerType() {
    const buyerType = document.getElementById('buyerType').value;
    const civilServantFields = document.getElementById('civil-servant-fields');

    if (buyerType === "civilServant") {
        civilServantFields.style.display = "block";
    } else {
        civilServantFields.style.display = "none";
    }
}

function processPurchase() {
    const buyerType = document.getElementById('buyerType').value;
    const computerNumber = document.getElementById('computerNumber').value;
    const nin = document.getElementById('nin').value;
    const riceType = document.getElementById('riceType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerBag = riceType === "50kg" ? 20000 : 8000; // Example prices: 50kg = 20,000; 17kg = 8,000
    const totalPrice = pricePerBag * quantity;

    if (!buyerType || !nin || !riceType || isNaN(quantity) || quantity <= 0) {
        alert("Please fill in all required fields.");
        return;
    }

    if (buyerType === "civilServant" && !computerNumber) {
        alert("Civil servants must provide their Computer Number.");
        return;
    }

    // Display receipt
    document.getElementById('receipt-buyer-type').textContent = buyerType === "civilServant" ? "Civil Servant" : "Non Civil Servant";
    document.getElementById('receipt-computer-number').textContent = buyerType === "civilServant" ? computerNumber : "N/A";
    document.getElementById('receipt-nin').textContent = nin;
    document.getElementById('receipt-rice-type').textContent = riceType;
    document.getElementById('receipt-quantity').textContent = quantity;
    document.getElementById('receipt-total').textContent = `₦${totalPrice.toLocaleString()}`;

    document.getElementById('receipt').style.display = 'block';
}

function printReceipt() {
    const receiptContent = document.getElementById('receipt').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = receiptContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.href ="profile.html";
}

// Simulated user data for demo purposes
const user = {
    name: "Muhammadu Bello",
    phone: "07033488949",
    address: "Sultan atiku road Kofar atiku area, Sokoto",
    gender: "Male",
    nin: "98762440967",
    purchaseHistory: [
        { riceType: "50kg", quantity: 2, date: "2024-12-01", total: 40000 },
        { riceType: "17kg", quantity: 1, date: "2024-12-10", total: 8000 },
    ],
    totalDebts: 15000,
};

// Populate user profile
document.getElementById('profile-name').textContent = user.name;
document.getElementById('profile-phone').textContent = user.phone;
document.getElementById('profile-address').textContent = user.address;
document.getElementById('profile-gender').textContent = user.gender;
document.getElementById('profile-nin').textContent = user.nin;

// Populate purchase history
const purchaseHistoryList = document.getElementById('purchase-history-list');
user.purchaseHistory.forEach((purchase) => {
    const li = document.createElement('li');
    li.textContent = `${purchase.date}: ${purchase.quantity} x ${purchase.riceType} bags - ₦${purchase.total.toLocaleString()}`;
    purchaseHistoryList.appendChild(li);
});

// Display total debts
document.getElementById('total-debts').textContent = user.totalDebts.toLocaleString();

// Navigate to purchase page
function navigateToPurchase() {
    window.location.href = "purchase.html";
}


function navigateTodashboard(){
    window.location.href = "dashboard.html"
}

// Log out function
function logout() {
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to the home page
}

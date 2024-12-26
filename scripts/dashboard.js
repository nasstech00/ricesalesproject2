// Sample Data
const buyers = [
    { name: "Salisu Danladi", phone: "07033488949", nin: "98762440967", address: "No 3 Sultan Atiku Road", lga: "Sokoto south" },
    { name: "Jane Smith", phone: "08123456789", nin: "98765432109", address: "456 High St", lga: "Sokoto South" },
    { name: "Asabe Muhammad ", phone: "08036802343", nin: "20112012024", address: "No 3 Sama Road, sokoto", lga: "Wamakko" },
];

const salesData = {
    today: 50000,
    week: 350000,
    month: 1200000,
    byLGA: [
        { lga: "Sokoto North", totalSales: 700000 },
        { lga: "Sokoto South", totalSales: 500000 },
         { lga: "Wamakko", totalSales: 430000 },
          { lga: "dange shuni", totalSales: 440000 },
    ],
    salesOverTime: [20000, 50000, 100000, 200000, 300000, 350000, 400000],
};

// Populate sales summary
document.getElementById("sales-today").textContent = salesData.today.toLocaleString();
document.getElementById("sales-week").textContent = salesData.week.toLocaleString();
document.getElementById("sales-month").textContent = salesData.month.toLocaleString();

// Populate sales by LGA
const lgaSalesList = document.getElementById("lga-sales-list");
salesData.byLGA.forEach((lgaSale) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${lgaSale.lga}</td>
        <td>₦${lgaSale.totalSales.toLocaleString()}</td>
    `;
    lgaSalesList.appendChild(tr);
});

// Display sales graph
const ctx = document.getElementById("salesChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [{
            label: "Sales Over Time",
            data: salesData.salesOverTime,
            backgroundColor: "rgba(0, 128, 0, 0.2)",
            borderColor: "rgba(0, 128, 0, 1)",
            borderWidth: 2,
        }],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Search buyer
function searchBuyer() {
    const query = document.getElementById("search-input").value.trim();
    const results = buyers.filter(
        (buyer) => buyer.phone === query || buyer.nin === query
    );

    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Clear previous search results

    if (results.length > 0) {
        results.forEach((buyer) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>Name:</strong> ${buyer.name}</p>
                <p><strong>Phone:</strong> ${buyer.phone}</p>
                <p><strong>NIN:</strong> ${buyer.nin}</p>
                <p><strong>Address:</strong> ${buyer.address}</p>
                <p><strong>LGA:</strong> ${buyer.lga}</p>
            `;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.innerHTML = "<p>No buyer found.</p>";
    }
}

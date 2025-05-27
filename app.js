// —— 1. Data model ——
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
const save = () =>
  localStorage.setItem("expenses", JSON.stringify(expenses));

// —— 2. Grab DOM elements ——
const nameInput     = document.getElementById("name");
const amountInput   = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const list          = document.getElementById("list");
const total         = document.getElementById("total");

// —— 3. Debug: confirm script is loaded ——
console.log("🔥 app.js loaded");

// —— 4. Form submit handler ——
document
  .getElementById("expense-form")
  .addEventListener("submit", e => {
    e.preventDefault();
    console.log("📝 submit fired:", nameInput.value, amountInput.value, categoryInput.value);

    const name = nameInput.value.trim();
    const amt  = +amountInput.value;
    const cat  = categoryInput.value;
    if (!name || amt <= 0) return alert("Enter valid data");

    expenses.push({ id: Date.now(), name, amt, cat });
    console.log("expenses array now:", expenses);
    save();
    render();
    e.target.reset();
  });

// —— 5. Render list & delete ——
function renderList() {
  console.log("Rendering list", expenses);
  list.innerHTML = expenses
    .map(x =>
      `<li>
         ${x.name} – $${x.amt.toFixed(2)}
         <button onclick="remove(${x.id})">✕</button>
       </li>`
    )
    .join("");
}

function remove(id) {
  expenses = expenses.filter(x => x.id !== id);
  save();
  render();
}

// —— 6. Render Chart.js doughnut ——
let chart;
function renderChart() {
  const totals = {};
  expenses.forEach(x => {
    totals[x.cat] = (totals[x.cat] || 0) + x.amt;
  });

  const data = {
    labels: Object.keys(totals),
    datasets: [{ data: Object.values(totals) }]
  };

  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: "doughnut",
    data,
    options: { plugins: { legend: { position: "bottom" } } }
  });
}

// —— 7. Master render() ——
function render() {
  console.log("🔄 render()", expenses);
  renderList();
  renderChart();
  total.textContent = expenses.reduce((sum, x) => sum + x.amt, 0).toFixed(2);
}

// —— 8. Initial draw on page load ——
render();

// app.js (add at bottom)

// Restore on load
const dmToggle = document.getElementById("dark-mode-toggle");
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  dmToggle.checked = true;
}

// Toggle handler
dmToggle.addEventListener("change", e => {
  document.body.classList.toggle("dark-mode", e.target.checked);
  localStorage.setItem("darkMode", e.target.checked);
});

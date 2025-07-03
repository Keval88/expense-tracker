
# Real-Time Expense Tracker

 front-end-only expense tracking app built with HTML, CSS, and JavaScript, featuring real-time data visualization using Chart.js and state persistence via `localStorage`.

## 🌐 Live Demo
👉 [View Live on Netlify](https://jolly-parfait-661f0a.netlify.app)

## ✨ Features

- 📌 Add and delete expenses
- 📊 Real-time doughnut chart with Chart.js
- 💾 Automatically saves data in your browser (localStorage)
- 🌙 Toggle between Light and Dark mode
- 📱 Fully responsive design for mobile and desktop

## 🛠 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/keval88/expense-tracker.git
   cd expense-tracker
   ```

2. **Open the app**
   - Just open the `index.html` file in any browser
   - Or use VS Code's Live Server extension for local testing

## 🧪 How to Use

- Fill in the expense name, amount, and category
- Click **Add** to log the expense
- View your total and category breakdown in the chart
- Click the ✕ button to remove any item
- Use the toggle to switch between Dark and Light mode

## 📂 Project Structure

```
expense-tracker/
├── index.html        # Main HTML structure
├── styles.css        # All styling
├── app.js            # JavaScript logic and chart rendering
└── .github/
    └── workflows/
        └── ci.yml    # GitHub Actions CI setup (optional)
```

## 🌍 Deployment

This project is hosted on [Netlify](https://www.netlify.com/):
1. Push your code to GitHub
2. Sign in to Netlify and link your GitHub repo
3. Set build settings (or leave blank for static site)
4. Click **Deploy Site**
5. Copy and share the Netlify URL

---

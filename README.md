
# Real-Time Expense Tracker

A beginner-friendly, front-end-only expense tracking app built with HTML, CSS, and JavaScript, featuring real-time data visualization using Chart.js and state persistence via `localStorage`.

## 🚀 Features

- **Add & Delete Expenses**: Simple form to log expenses with name, amount, and category.
- **Real-Time Chart**: Doughnut chart updates instantly as expenses are added or removed.
- **Persistent Storage**: All data is saved in browser `localStorage` to survive page reloads.
- **Responsive UI**: Mobile-friendly design using CSS Flexbox and media queries.
- **Dark Mode Toggle**: Switch between light and dark themes; preference saved in `localStorage`.
- **CI Linting**: Automated HTML/CSS/JS linting via GitHub Actions.
- **Deployable**: Ready for GitHub Pages deployment.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/keval88/expense-tracker.git
   cd expense-tracker
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Use VS Code Live Server extension (`Go Live`) to launch a local dev server.

3. **Interact**
   - Add an expense (name, amount, category) and click **Add**.
   - Watch the chart and total update in real time.
   - Toggle dark mode using the switch in the top.

## 📂 File Structure

```
expense-tracker/
├── index.html           # Main HTML structure
├── styles.css           # Styling and responsive rules
├── app.js               # Core JavaScript logic
└── .github/
    └── workflows/
        └── ci.yml       # GitHub Actions linting workflow
``` 

## 📊 Usage Details

- **Adding an Expense**: Fill in the form and press **Add**. The list, chart, and total will update instantly.
- **Deleting an Expense**: Click the ✕ button next to an entry.
- **Dark Mode**: Toggle the switch; your preference is saved in `localStorage`.

## 📦 Deployment

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Add expense tracker"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to **Settings → Pages** in your repo.
   - Select **main** branch and **root** folder.
   - Save and visit `https://keval88.github.io/expense-tracker/`.

## 🔧 Customization

- **Add Categories**: Edit the `<select>` in `index.html` and update CSS if needed.
- **Chart Options**: Tweak `renderChart()` in `app.js` to adjust chart type, animation, or legends.
- **Styling**: Modify `styles.css` to change colors, spacing, or typography.

---


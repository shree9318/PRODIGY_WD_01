# Stopwatch Application

A modern, responsive stopwatch web application built with HTML, CSS, and JavaScript. Features a WhatsApp-inspired design theme with full timer functionality and lap recording capabilities.

## Features

- ⏱️ **Timer Functionality**: Start, pause, resume, and reset stopwatch
- 🏁 **Lap Recording**: Record and display lap times in ascending order
- ⌨️ **Keyboard Shortcuts**: 
  - `Space` - Start/Pause/Resume
  - `R` - Reset stopwatch
  - `L` - Record lap (when running)
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **WhatsApp Theme**: Clean, modern design with WhatsApp-inspired colors
- 🔄 **Auto-pause**: Automatically pauses timer when tab is hidden

## File Structure

```
PRODIGY_WD_02/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and design
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .vscode/
    └── launch.json     # VS Code debugging configuration
```

## Getting Started

### Method 1: Direct Opening
1. Open `index.html` in your web browser
2. The stopwatch will load and be ready to use

### Method 2: Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"
3. The app will open at `http://localhost:5500`

### Method 3: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000
```

## Usage

1. **Start Timer**: Click "Start" button or press `Space`
2. **Record Laps**: Click "Lap" button or press `L` while timer is running
3. **Pause/Resume**: Click "Pause"/"Resume" button or press `Space`
4. **Reset**: Click "Reset" button or press `R`
5. **View Laps**: Lap times appear below the timer in chronological order

## Design Features

- **Color Scheme**: WhatsApp-inspired green theme
- **Typography**: Clean, modern fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: High contrast and keyboard navigation support
- **Mobile Responsive**: Optimized for all screen sizes

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox and transitions
- **JavaScript ES6+**: Modern JavaScript features and best practices

### Key Functions
- `formatTime()`: Converts milliseconds to MM:SS.MS format
- `updateDisplay()`: Updates the timer display every 10ms
- `toggleStartPause()`: Handles start/pause/resume functionality
- `recordLap()`: Records and displays lap times
- `resetStopwatch()`: Resets timer and clears lap data

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Debugging

The project includes VS Code debugging configuration:

1. Open VS Code
2. Go to Debug panel (Ctrl+Shift+D)
3. Select "Launch Chrome against localhost" configuration
4. Set breakpoints in `script.js`
5. Start debugging session

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Testing thoroughly
5. Submitting a pull request

## License

This project is open source and available under the MIT License.

## Author

Created as part of the Prodigy Infotech internship program - Task WD_02

---

**Enjoy using the stopwatch! 🚀**

# 📔 Habit Tracker Application

A modern React-based Habit Tracker application for building and tracking daily habits. This application implements the US-01 user story with a clean, accessible UI.

## ✨ Features

### Core Functionality (US-01)
- ✅ **Add Habits**: Form to define personal habits with an input field
- ✅ **State Management**: Habits stored in React state array
- ✅ **Confirmation Messages**: Success notifications when habits are added
- ✅ **Undo Button**: Remove the last added habit with one click
- ✅ **Clean UI**: Modern purple gradient design with smooth animations
- ✅ **Accessibility**: Full WCAG AA compliance

### Additional Features
- 📝 **Character Counter**: Real-time character count (max 100 characters)
- 🎨 **Modern Design**: Purple-to-pink gradient theme with responsive layout
- ⌨️ **Keyboard Support**: Enter key support for quick habit submission
- 🔄 **Loading States**: Visual feedback during form submission
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Numbered Habits**: Visual badges with habit count
- ⏰ **Timestamps**: Each habit shows creation time
- ♿ **Accessible**: ARIA labels, semantic HTML, screen reader support

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Irunelopez/Software-engineering-lab6.git

# Navigate to the project
cd Software-engineering-lab6

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm start
```

The application will open in your browser at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── HabitTracker.js          # Main container component
│   ├── HabitTracker.css
│   ├── HabitForm.js              # Form for adding habits
│   ├── HabitForm.css
│   ├── ConfirmationMessage.js    # Success/undo notifications
│   ├── ConfirmationMessage.css
│   ├── HabitList.js              # Display habits list
│   └── HabitList.css
├── App.js                        # Root component
├── App.css
├── index.js                      # React entry point
└── index.css                     # Global styles
```

## 🎯 Component Overview

### HabitTracker.js
Main orchestrator component that manages:
- Habit state array
- Confirmation message displays
- Undo functionality
- Component composition

### HabitForm.js
Provides the form interface for adding habits:
- Text input with max 100 characters
- Character counter with visual warnings
- Submit button with loading state
- Keyboard support (Enter key)
- Full ARIA accessibility

### ConfirmationMessage.js
Displays feedback messages:
- Success confirmation when habit is added
- Undo confirmation when habit is removed
- Auto-dismisses after 3 seconds
- Color-coded for different message types

### HabitList.js
Shows the list of all habits:
- Numbered habit badges
- Habit name and creation timestamp
- Empty state message
- Undo button to remove last habit
- Smooth animations

## ♿ Accessibility Features

- **WCAG AA Compliant**: Meets Web Content Accessibility Guidelines level AA
- **ARIA Labels**: Proper aria-label and aria-describedby attributes
- **Semantic HTML**: Uses proper HTML5 semantic elements
- **Keyboard Navigation**: Full keyboard support with Enter key submission
- **Focus Indicators**: Clear visual focus states on all interactive elements
- **Screen Reader Support**: Proper roles, live regions, and announcements
- **Color Contrast**: AA+ contrast ratios throughout the application
- **Touch Friendly**: Adequate button sizes and touch targets

## 🎨 Design System

### Color Palette
- **Primary Gradient**: #667eea to #764ba2 (Purple)
- **Success**: #28a745 (Green)
- **Undo/Warning**: #ffc107 (Yellow)
- **Danger**: #ff6b6b (Red)
- **Neutral**: #333, #666, #999 (Grayscale)

### Typography
- **Font Family**: System fonts (SF Pro Display, Roboto, etc.)
- **Heading Size**: 2.5rem (h1)
- **Body Size**: 1rem
- **Small Text**: 0.85rem

### Spacing
- **Base Unit**: 4px
- **Standard Gaps**: 8px, 12px, 16px, 20px, 24px

## 🧪 Testing

To run tests (if configured):
```bash
npm test
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for Software Engineering Lab 6

## 🔗 Links

- [GitHub Repository](https://github.com/Irunelopez/Software-engineering-lab6)
- [React Documentation](https://react.dev)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

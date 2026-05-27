# Habit Tracker Application 

This repository contains an iterative implementation of a **Habits Tracking Application** built using **React**, **JavaScript**, and **Tailwind CSS**. The development was guided entirely by GitHub Copilot prompts, demonstrating the power of AI-assisted development for building feature-rich applications incrementally.

**GitHub Repository Link:** https://github.com/Irunelopez/Software-engineering-lab6.git

---

## Team Members
Carme Castellón, Ainhoa Jimenez, Yihan Jin, Joan Redondo, Livia Fernández, Iago Fontanals, Irune López

---

## Implemented User Stories & Criteria

We selected the **Habits Tracking** specification and implemented all 4 User Stories:

**US-01 (Define Habits):** Users can define personal routines with an undo option and system confirmation messages.

**US-02 (Mark Completed):** Users can check off habits to track goals with undo capabilities.

**US-03 (Compliance Calendar):** Visual interface showing habit completion history over time with system confirmation.

**US-04 (Delete Habits):** Users can clean up old habits to keep only the relevant ones, with a safety-net undo action.

**Global Criteria:** All data persists locally via `localStorage` to ensure it remains accessible afterward.

---

## Iterative Copilot Prompts & Git Commit History

We developed this application progressively across 4 distinct versions to refine the logic and meet all acceptance criteria seamlessly:

### Commit 1: Core Layout & Defining Habits (US-01)
* **Prompt given to Copilot:**
  > "Create a React functional component for a Habit Tracker application. For US-01, implement a form to define a personal habit (input field for habit name). Store the habits in a React state array. Display the habits in a list below the form. Add an 'Undo Last Habit' button that removes the most recently added habit from the list. When a habit is successfully added, show a brief confirmation message (e.g., 'Habit added successfully'). Ensure the UI is clean and accessible with proper ARIA labels."

### Commit 2: Completion Tracking (US-02)
* **Prompt given to Copilot:**
  > "Modify the existing React habit tracker to support US-02. Next to each habit in the list, add a checkbox or button to mark it as completed for the day. If marked completed, show a temporary toast notification confirming the action. Also show a timestamp of when the habit was marked completed. Allow users to click the checkbox again to mark the habit as incomplete, which should display an 'undo' toast notification. Ensure all interactions are accessible."

### Commit 3: Compliance Calendar Visualization (US-03)
* **Prompt given to Copilot:**
  > "Extend the application to implement US-03. Add a simple calendar grid or a 7-day weekly history view component underneath the habit list to visualize progress. When a habit is marked completed, toggle the respective day's visual indicator (e.g., green for completed, gray for missed). Provide a success message when the calendar view renders/updates, and make sure any completion undo actions immediately update this calendar view."

### Commit 4: Habit Deletion & LocalStorage Persistence (US-04)
* **Prompt given to Copilot:**
  > "Finalize the application with US-04. Add a 'Delete' button (trash icon) next to each habit to remove old habits entirely from the view. Include an immediate 'Undo Delete' banner or button that restores the deleted habit within a short time window (e.g., 5 seconds). Make sure all habits and their completion status are saved to localStorage, and the app automatically retrieves this data when the page is reloaded. Add a 'Clear All Data' option in the footer for users to reset their habit list if desired."

---

## Key Features Implemented

### ✅ US-01: Define Habits
- Form input for creating new habits
- Real-time habit list display
- Undo last habit with confirmation message
- Automatic timestamp recording
- Accessibility support with ARIA labels

### ✅ US-02: Mark Completed
- Checkbox/button interface for marking habits complete
- Toast notifications on completion/incompletion
- Timestamp display for completed habits
- Real-time visual feedback
- Toggle functionality for undoing completion

### ✅ US-03: Compliance Calendar
- 7-day weekly history grid visualization
- Color-coded indicators (green ✓ for completed, gray ○ for missed)
- Real-time calendar updates when habits are marked complete
- Immediate undo reflection on calendar
- Success confirmation message on updates
- Responsive design across all devices
- Full accessibility with ARIA labels

### ✅ US-04: Delete Habits
- Delete button (trash icon) for individual habits
- Undo delete functionality with 5-second window
- Delete confirmation feedback
- LocalStorage persistence for all habit data
- Clear all data option for reset functionality

---

## Application Screenshots

*Replace the image placeholders below with your actual screenshot paths once saved in your repository (e.g., inside a `public/screenshots/` folder).*

### 1. Dashboard View & Habit Definition (US-01)
<div align="center">
  <img src="path/to/your/dashboard-screenshot.png" alt="Main Dashboard Interface" width="80%" style="border: 1px solid #ddd; border-radius: 8px;" />
  <p><em>Figure 1: The main interface showing the form to add habits and active tracking lists.</em></p>
</div>

<br />

### 2. Marking Completion & History Tracking (US-02 & US-03)
<div align="center">
  <img src="path/to/your/calendar-screenshot.png" alt="Completion and Calendar View" width="80%" style="border: 1px solid #ddd; border-radius: 8px;" />
  <p><em>Figure 2: Habits checked off for the day reflecting changes directly onto the active compliance calendar grid.</em></p>
</div>

<br />

### 3. Action Reversal & System Feedback (Undo Actions)
<div align="center">
  <img src="path/to/your/undo-screenshot.png" alt="Undo Action Banner" width="80%" style="border: 1px solid #ddd; border-radius: 8px;" />
  <p><em>Figure 3: Visual feedback toast showing successful actions with a fully functional 'Undo' button.</em></p>
</div>

---

## Lessons Learned on the Use of Copilot

1. **Context is King:** Copilot works exponentially better when you explicitly quote or frame the functional requirements (like "Acceptance Criteria: Must be able to undo"). Vague prompts lead to incomplete or incorrect implementations. Always be specific about what you need.

2. **The Value of Iteration:** Generating a whole app in one prompt often leads to breaking bugs or missing details. Feeding prompts step-by-step per User Story mirrors real-world Agile sprints and produces cleaner, more maintainable code. Breaking down features by acceptance criteria is key.

3. **Refactoring & State Consistency:** Copilot excels at drafting UI elements, but sometimes requires specific prompting to ensure states stay unified (e.g., tying the completion status to the calendar display). Always review the generated code for state management issues and provide corrective feedback in follow-up prompts.

4. **Accessibility from the Start:** Including ARIA labels, semantic HTML, and keyboard navigation in the initial prompt saves time on refactoring later. Copilot can generate accessible code if you explicitly ask for it.

5. **Testing & Documentation:** While Copilot can generate tests and documentation, it's best to review and customize these outputs. Always validate that the generated tests actually cover the acceptance criteria.

---

## File Structure

```
src/
├── components/
│   ├── HabitTracker.js          # Main container component
│   ├── HabitTracker.css         # Main styling
│   ├── HabitForm.js             # Form for adding habits
│   ├── HabitForm.css            # Form styling
│   ├── HabitList.js             # List of habits with completion
│   ├── HabitList.css            # List styling
│   ├── ComplianceCalendar.js    # Calendar visualization (US-03)
│   ├── ComplianceCalendar.css   # Calendar styling
│   ├── ConfirmationMessage.js   # Toast notifications
│   └── ConfirmationMessage.css  # Toast styling
├── App.js
├── App.css
├── index.js
└── index.css

docs/
└── US-03-COMPLIANCE-CALENDAR.md # Detailed implementation guide

README.md                          # This file
package.json                       # Dependencies and scripts
```

---

## Technical Stack

- **React** 18.x - UI library for building components
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling with flexbox, grid, and animations
- **LocalStorage API** - Data persistence
- **ARIA & Semantic HTML** - Web accessibility

---

## How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Irunelopez/Software-engineering-lab6.git
   cd Software-engineering-lab6
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE 11 (partial support with polyfills)

---

## Future Enhancements

### Phase 2
- [ ] Multi-week calendar view (4 weeks of history)
- [ ] Habit completion streak tracking
- [ ] Goal-based tracking (e.g., "Run 5 miles")
- [ ] Habit categories with color coding
- [ ] Statistics dashboard with charts

### Phase 3
- [ ] Mobile app integration (React Native)
- [ ] User accounts and cloud sync
- [ ] Social features (share habits, compare streaks)
- [ ] Notifications and reminders
- [ ] Habit templates for quick setup

---

## Contributing

This project was developed as a collaborative learning exercise in Software Engineering. To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## Acknowledgments

- **GitHub Copilot** for providing AI-assisted code generation
- **React Documentation** for comprehensive framework guidance
- **Web Accessibility Guidelines (WCAG 2.1)** for accessibility standards
- Our team members for collaborative development and testing

---

## Contact

For questions or suggestions about this project, please open an issue on the [GitHub repository](https://github.com/Irunelopez/Software-engineering-lab6/issues).

---

**Last Updated:** May 27, 2026
**Version:** 1.0.0

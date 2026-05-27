# Habit Tracker Application (Seguiment d'Hàbits)

This repository contains an iterative implementation of a **Habits Tracking Application** built using **React**, **JavaScript**, and **Tailwind CSS**. The development was guided entirely by **GitHub Copilot** based on a set of 4 agile user stories and strict acceptance criteria.

**GitHub Repository Link:** [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME)

---

## 👥 Team Members
* [Your Name / Team Member Names]

---

## 📋 Implemented User Stories & Criteria

We selected the **Habits Tracking** specification and implemented all 4 User Stories:
* **US-01 (Define Habits):** Users can add personal routines with an undo option and system confirmation messages.
* **US-02 (Mark Completed):** Users can check off habits to track goals with undo capabilities.
* **US-03 (Compliance Calendar):** Visual grid interface showing habit completion history over time.
* **US-04 (Delete Habits):** Users can clean up old habits with a safety-net undo action.
* **Global Criteria:** All data persists locally via `localStorage` to ensure it remains accessible afterward.

---

## 🚀 Iterative Copilot Prompts & Git Commit History

We developed this application progressively across 4 distinct versions to refine the logic and meet all acceptance criteria seamlessly:

### 🔹 Commit 1: Core Layout & Defining Habits (US-01)
* **Prompt given to Copilot:**
  > "Create a React functional component for a Habit Tracker application. For US-01, implement a form to define a personal habit (input field for habit name). Store the habits in a React state array. Include a confirmation message when a habit is added and a 'Undo' button/action to remove the last added habit if necessary. Ensure the UI is clean and accessible."

### 🔹 Commit 2: Completion Tracking (US-02)
* **Prompt given to Copilot:**
  > "Modify the existing React habit tracker to support US-02. Next to each habit in the list, add a checkbox or button to mark it as completed for the day. If marked completed, show a temporary toast or text confirmation message. Implement an 'Undo' option that lets the user uncheck it and reverts the state. Ensure all state updates persist correctly in the component."

### 🔹 Commit 3: Compliance Calendar Visualization (US-03)
* **Prompt given to Copilot:**
  > "Extend the application to implement US-03. Add a simple calendar grid or a 7-day weekly history view component underneath the habit list. When a habit is marked completed, toggle the respective day's visual indicator (e.g., green for completed, gray for missed) to visualize progress. Provide a success message when the calendar view renders/updates, and make sure any completion undo actions immediately update this calendar view."

### 🔹 Commit 4: Habit Deletion & LocalStorage Persistence (US-04)
* **Prompt given to Copilot:**
  > "Finalize the application with US-04. Add a 'Delete' button (trash icon) next to each habit to remove old habits entirely. Include an immediate 'Undo Delete' banner or button that restores the habit if clicked within a few seconds. To fulfill the criteria 'All data must be saved correctly and remain accessible afterward' across all stories, add a `useEffect` hook to automatically save and load the habits state from `localStorage`."

---

## 📸 Application Screenshots

### 1. Dashboard View & Habit Definition (US-01)
![Main Dashboard Interface](public/screenshots/dashboard.png)
*Description: The main interface showing the form to add habits and active tracking lists.*

### 2. Marking Completion & History Tracking (US-02 & US-03)
![Completion and Calendar View](public/screenshots/calendar.png)
*Description: Habits checked off for the day reflecting changes directly onto the active compliance calendar grid.*

### 3. Action Reversal & System Feedback (Undo Actions)
![Undo Action Banner](public/screenshots/undo_action.png)
*Description: Visual feedback toast showing successful actions with a fully functional 'Undo' button.*

---

## 💡 Lessons Learned on the Use of Copilot

1. **Context is King:** Copilot works exponentially better when you explicitly quote or frame the functional requirements (like "Acceptance Criteria: Must be able to undo"). If you don't mention the exact constraints, it defaults to standard implementations omitting safety actions like 'Undo'.
2. **The Value of Iteration:** Generating a whole app in one prompt often leads to breaking bugs or missing details. Feeding prompts step-by-step per User Story mirrors real-world Agile sprints and results in much higher code accuracy.
3. **Refactoring & State Consistency:** Copilot excels at drafting UI elements, but sometimes requires specific prompting to ensure states stay unified (e.g., tying the completion status toggle instantly to the calendar grid and triggering `localStorage` writes synchronously).

import React from 'react';
import './HabitList.css';

function HabitList({ habits, onUndo, onToggleCompletion }) {
  if (habits.length === 0) {
    return (
      <div className="empty-state" role="status" aria-label="No habits yet">
        <span className="empty-icon">🎯</span>
        <h2>No habits yet!</h2>
        <p>Start by adding your first habit above to begin your journey.</p>
      </div>
    );
  }

  return (
    <div
      className="habits-list-container"
      role="region"
      aria-label="Your habits list"
    >
      <div className="list-header">
        <h2>Your Habits</h2>
        <span className="list-count" aria-live="polite">
          {habits.length} habit{habits.length !== 1 ? 's' : ''}
        </span>
      </div>

      <ul className="habits-list" role="list">
        {habits.map((habit, index) => (
          <li
            key={habit.id}
            className={`habit-item ${habit.completed ? 'completed' : ''}`}
            role="listitem"
          >
            <div className="habit-badge">{index + 1}</div>
            <div className="habit-details">
              <h3 className="habit-name">{habit.name}</h3>
              <p
                className="habit-time"
                aria-label={`Created at ${habit.createdAt}`}
              >
                ⏰ {habit.createdAt}
              </p>
              {habit.completed && habit.completedAt && (
                <p className="habit-completed-time">
                  ✓ Completed at {habit.completedAt}
                </p>
              )}
            </div>
            <button
              className={`completion-checkbox ${habit.completed ? 'checked' : ''}`}
              onClick={() => onToggleCompletion(habit.id)}
              aria-label={`Mark ${habit.name} as ${habit.completed ? 'incomplete' : 'completed'}`}
              aria-pressed={habit.completed}
              title={habit.completed ? 'Mark as incomplete' : 'Mark as completed'}
            >
              {habit.completed ? (
                <>
                  <span className="checkmark">✓</span>
                </>
              ) : (
                <>
                  <span className="empty-checkbox"></span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>

      {habits.length > 0 && (
        <div className="undo-section">
          <button
            className="undo-btn"
            onClick={onUndo}
            aria-label={`Remove last habit: ${habits[habits.length - 1].name}`}
          >
            <span className="undo-icon">↩️</span>
            Undo Last Habit
          </button>
          <p className="undo-hint">Click to remove the last added habit</p>
        </div>
      )}
    </div>
  );
}

export default HabitList;

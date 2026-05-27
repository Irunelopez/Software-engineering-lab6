import React, { useState } from 'react';
import HabitForm from './HabitForm';
import ConfirmationMessage from './ConfirmationMessage';
import HabitList from './HabitList';
import './HabitTracker.css';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastAddedHabit, setLastAddedHabit] = useState('');
  const [showUndoConfirm, setShowUndoConfirm] = useState(false);
  const [completionToast, setCompletionToast] = useState(null);
  const [undoCompletionToast, setUndoCompletionToast] = useState(null);

  const handleAddHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      createdAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      completed: false,
      completedAt: null,
    };

    setHabits([...habits, newHabit]);
    setLastAddedHabit(habitName);
    setShowConfirmation(true);

    // Auto-hide confirmation message after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  const handleToggleHabitCompletion = (habitId) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) => {
        if (habit.id === habitId) {
          const isCompleting = !habit.completed;
          const updatedHabit = {
            ...habit,
            completed: isCompleting,
            completedAt: isCompleting
              ? new Date().toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : null,
          };

          // Show toast notification
          if (isCompleting) {
            setCompletionToast({
              habitName: habit.name,
              habitId: habitId,
            });

            // Auto-hide toast after 3 seconds
            setTimeout(() => {
              setCompletionToast(null);
            }, 3000);
          } else {
            setUndoCompletionToast({
              habitName: habit.name,
              habitId: habitId,
            });

            // Auto-hide undo toast after 2 seconds
            setTimeout(() => {
              setUndoCompletionToast(null);
            }, 2000);
          }

          return updatedHabit;
        }
        return habit;
      })
    );
  };

  const handleUndo = () => {
    if (habits.length > 0) {
      const removedHabit = habits[habits.length - 1];
      setHabits(habits.slice(0, -1));
      setShowUndoConfirm(true);

      // Auto-hide undo confirmation message after 2 seconds
      setTimeout(() => {
        setShowUndoConfirm(false);
      }, 2000);
    }
  };

  const completedCount = habits.filter((h) => h.completed).length;

  return (
    <div
      className="habit-tracker-container"
      role="main"
      aria-label="Habit Tracker Application"
    >
      <div className="tracker-card">
        <header className="tracker-header">
          <h1>📔 Habit Tracker</h1>
          <p className="subtitle">Build better habits, one day at a time</p>
          {habits.length > 0 && (
            <div className="progress-indicator" aria-live="polite">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${habits.length > 0 ? (completedCount / habits.length) * 100 : 0}%`,
                  }}
                  role="progressbar"
                  aria-valuenow={completedCount}
                  aria-valuemin="0"
                  aria-valuemax={habits.length}
                />
              </div>
              <p className="progress-text">
                {completedCount} of {habits.length} completed
              </p>
            </div>
          )}
        </header>

        {showConfirmation && (
          <ConfirmationMessage
            habitName={lastAddedHabit}
            type="success"
            onClose={() => setShowConfirmation(false)}
          />
        )}

        {showUndoConfirm && (
          <ConfirmationMessage
            habitName={habits.length > 0 ? habits[habits.length - 1].name : ''}
            type="undo"
            onClose={() => setShowUndoConfirm(false)}
          />
        )}

        {completionToast && (
          <ConfirmationMessage
            habitName={completionToast.habitName}
            type="completed"
            onClose={() => setCompletionToast(null)}
          />
        )}

        {undoCompletionToast && (
          <ConfirmationMessage
            habitName={undoCompletionToast.habitName}
            type="undoCompleted"
            onClose={() => setUndoCompletionToast(null)}
          />
        )}

        <HabitForm onAddHabit={handleAddHabit} habitCount={habits.length} />

        <div className="habits-section">
          <HabitList
            habits={habits}
            onUndo={handleUndo}
            onToggleCompletion={handleToggleHabitCompletion}
          />
        </div>
      </div>
    </div>
  );
}

export default HabitTracker;

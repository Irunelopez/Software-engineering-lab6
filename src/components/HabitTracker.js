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

  const handleAddHabit = (habitName) => {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      createdAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setHabits([...habits, newHabit]);
    setLastAddedHabit(habitName);
    setShowConfirmation(true);

    // Auto-hide confirmation message after 3 seconds
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
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

  return (
    <div className="habit-tracker-container" role="main" aria-label="Habit Tracker Application">
      <div className="tracker-card">
        <header className="tracker-header">
          <h1>📔 Habit Tracker</h1>
          <p className="subtitle">Build better habits, one day at a time</p>
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

        <HabitForm onAddHabit={handleAddHabit} habitCount={habits.length} />

        <div className="habits-section">
          <HabitList habits={habits} onUndo={handleUndo} />
        </div>
      </div>
    </div>
  );
}

export default HabitTracker;

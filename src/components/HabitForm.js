import React, { useState } from 'react';
import './HabitForm.css';

function HabitForm({ onAddHabit, habitCount }) {
  const [habitName, setHabitName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const MAX_CHARS = 100;
  const charCount = habitName.length;
  const isNearLimit = charCount > 80;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (habitName.trim() === '') {
      alert('Please enter a habit name');
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      onAddHabit(habitName.trim());
      setHabitName('');
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit(e);
    }
  };

  return (
    <div className="habit-form-wrapper">
      <form className="habit-form" onSubmit={handleSubmit} role="form" aria-label="Add new habit form">
        <div className="form-group">
          <label htmlFor="habit-input" className="form-label">
            Define Your Habit
          </label>
          <div className="input-wrapper">
            <input
              id="habit-input"
              type="text"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value.slice(0, MAX_CHARS))}
              onKeyPress={handleKeyPress}
              placeholder="e.g., Morning jog, Read for 30 minutes, Drink 8 glasses of water..."
              className="habit-input"
              disabled={isLoading}
              aria-label="Habit name input"
              aria-describedby="char-count"
              maxLength={MAX_CHARS}
            />
          </div>
          <div className="form-footer">
            <span
              id="char-count"
              className={`char-count ${isNearLimit ? 'warning' : ''}`}
              aria-live="polite"
              aria-atomic="true"
            >
              {charCount} / {MAX_CHARS}
            </span>
            {habitCount > 0 && (
              <span className="habit-counter" aria-live="polite">
                {habitCount} habit{habitCount !== 1 ? 's' : ''} added
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className={`submit-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading || habitName.trim() === ''}
          aria-busy={isLoading}
          aria-label={isLoading ? 'Adding habit' : 'Add habit'}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Adding...
            </>
          ) : (
            <>
              <span className="btn-icon">➕</span>
              Add Habit
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default HabitForm;

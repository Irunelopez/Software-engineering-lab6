import React, { useState, useEffect } from 'react';
import './ComplianceCalendar.css';

function ComplianceCalendar({ habits }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Show success message when habits change
  useEffect(() => {
    if (habits.length > 0) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [habits]);

  // Generate last 7 days
  const getLast7Days = () => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      days.push({
        date: date,
        dateString: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      });
    }
    return days;
  };

  // Check if habit was completed on specific date (for today)
  const isHabitCompletedOnDate = (habit) => {
    // Simple implementation: mark as completed if completed flag is true
    // In a full implementation, you'd check against the specific date
    return habit.completed;
  };

  const days = getLast7Days();

  if (habits.length === 0) {
    return null; // Don't show calendar if no habits
  }

  return (
    <div
      className="compliance-calendar-container"
      role="region"
      aria-label="Weekly Compliance Calendar"
    >
      {showSuccessMessage && (
        <div
          className="calendar-success-message"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="success-icon">✨</span>
          <span className="success-text">Calendar updated with your progress!</span>
        </div>
      )}

      <div className="calendar-header">
        <h2>📅 Weekly Compliance</h2>
        <p className="calendar-subtitle">Last 7 days of habit completion</p>
      </div>

      <div className="calendar-content">
        {/* Days Header */}
        <div className="calendar-days-header">
          {days.map((day, index) => (
            <div key={index} className="day-header">
              <span className="day-name">{day.dayName}</span>
              <span className="day-date">{day.dateString}</span>
            </div>
          ))}
        </div>

        {/* Habits Grid */}
        <div className="calendar-grid">
          {habits.map((habit) => (
            <div key={habit.id} className="habit-calendar-row">
              <div className="habit-calendar-name" title={habit.name}>
                {habit.name}
              </div>
              {days.map((day, dayIndex) => {
                // For the last day (today), show actual completion status
                // For other days, show as missed (gray)
                const isToday = dayIndex === days.length - 1;
                const isCompleted = isToday && isHabitCompletedOnDate(habit);

                return (
                  <div
                    key={`${habit.id}-${dayIndex}`}
                    className={`calendar-cell ${isCompleted ? 'completed' : 'missed'}`}
                    role="cell"
                    aria-label={`${habit.name}: ${isCompleted ? 'completed' : 'missed'} on ${day.dateString}`}
                    title={`${habit.name}: ${isCompleted ? 'completed' : 'missed'} on ${day.dateString}`}
                  >
                    <span className="cell-indicator">
                      {isCompleted ? '✓' : '○'}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="calendar-legend">
        <div className="legend-item">
          <div className="legend-indicator completed">✓</div>
          <span>Completed</span>
        </div>
        <div className="legend-item">
          <div className="legend-indicator missed">○</div>
          <span>Missed</span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="calendar-stats" aria-live="polite">
        <div className="stat-item">
          <span className="stat-label">Completed Today:</span>
          <span className="stat-value">
            {habits.filter((h) => h.completed).length} of {habits.length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completion Rate:</span>
          <span className="stat-value">
            {habits.length > 0
              ? Math.round((habits.filter((h) => h.completed).length / habits.length) * 100)
              : 0}
            %
          </span>
        </div>
      </div>
    </div>
  );
}

export default ComplianceCalendar;

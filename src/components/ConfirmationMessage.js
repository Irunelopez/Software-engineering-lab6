import React, { useEffect } from 'react';
import './ConfirmationMessage.css';

function ConfirmationMessage({ habitName, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const messageConfig = {
    success: {
      icon: '✅',
      title: 'Habit Added!',
      message: `"${habitName}" has been added to your habit list.`,
      className: 'confirmation-success',
    },
    undo: {
      icon: '↩️',
      title: 'Habit Removed',
      message: `"${habitName}" has been removed from your list.`,
      className: 'confirmation-undo',
    },
    completed: {
      icon: '🎉',
      title: 'Habit Completed!',
      message: `Great job! "${habitName}" marked as completed for today.`,
      className: 'confirmation-completed',
    },
    undoCompleted: {
      icon: '↩️',
      title: 'Completion Undone',
      message: `"${habitName}" has been marked as incomplete.`,
      className: 'confirmation-undo-completed',
    },
  };

  const config = messageConfig[type] || messageConfig.success;

  return (
    <div
      className={`confirmation-message ${config.className}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="confirmation-content">
        <span className="confirmation-icon">{config.icon}</span>
        <div className="confirmation-text">
          <h3 className="confirmation-title">{config.title}</h3>
          <p className="confirmation-detail">{config.message}</p>
        </div>
      </div>
      <button
        className="confirmation-close"
        onClick={onClose}
        aria-label="Close confirmation message"
      >
        ×
      </button>
    </div>
  );
}

export default ConfirmationMessage;

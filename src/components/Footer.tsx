import React from 'react';

type Filter = 'all' | 'active' | 'completed';

interface Props {
  itemsLeft: number;
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({ itemsLeft, currentFilter, onFilterChange, onClearCompleted }) => {
  return (
    <div className="todo-footer">
      <span>{itemsLeft} items left</span>
      <div className="filters">
        {(['all', 'active', 'completed'] as Filter[]).map(f => (
          <button
            key={f}
            className={`filters ${currentFilter === f ? 'active' : ''}`}
            onClick={() => onFilterChange(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button className="clear-btn" onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
};
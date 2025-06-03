import React from 'react';
import { Todo } from '../types/todo';
import '../styles/todo-item.scss';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
  return (
    <li className="todo-item" onClick={() => onToggle(todo.id)}>
      <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
        {todo.completed && (
          <svg
            className="checkmark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.title}</span>
    </li>
  );
};

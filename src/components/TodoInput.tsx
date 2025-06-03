import React, { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

export const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input

        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
    </form>
  );
};

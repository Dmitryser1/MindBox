import React, { useEffect } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { useTodos } from './hooks/useTodos';

const App: React.FC = () => {



  
  const {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    setFilter,
    itemsLeft,
    currentFilter
  } = useTodos();

  
  return (
    <div className="todo-app">
      <h1 className="todo-header">ToDo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
      <Footer
        itemsLeft={itemsLeft}
        currentFilter={currentFilter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default App;
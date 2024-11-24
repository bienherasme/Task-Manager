import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    setTasks([...tasks, { id: uuidv4(), text, completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        onEdit={handleEdit}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;

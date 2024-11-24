import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;

    if (editingTask) {
      editTask({ ...editingTask, text: taskText });
    } else {
      addTask(taskText);
    }
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;

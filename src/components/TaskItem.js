import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, toggleComplete, onEdit, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div>
        <button onClick={() => onEdit(task)}>
          <FaEdit />
        </button>
        <button onClick={() => onDelete(task.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

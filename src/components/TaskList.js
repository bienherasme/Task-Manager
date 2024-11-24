import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

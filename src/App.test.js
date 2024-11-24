import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Task Manager App", () => {
  test("renders the app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Task Manager/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("allows a user to add a new task", () => {
    render(<App />);
    
    const inputElement = screen.getByPlaceholderText(/Enter a task/i);
    const addButton = screen.getByText(/Add Task/i);

    // Add a new task
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    // Check if the task appears
    const taskElement = screen.getByText("New Task");
    expect(taskElement).toBeInTheDocument();
  });
});

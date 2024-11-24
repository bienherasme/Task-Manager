
# Task Manager

A simple and interactive task management application built with **React**. This application allows users to add, edit, delete, and mark tasks as completed. It's designed to be lightweight, user-friendly, and highly functional.

---

## Features

- **Add Tasks**: Quickly add new tasks with a single input.
- **Edit Tasks**: Update the text of existing tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Complete Tasks**: Mark tasks as completed with a single click.
- **Dynamic UI**: Responsive and interactive user interface built with React.
- **State Management**: Efficient use of React's `useState` for task handling.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bienherasme/Task-Manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
task-manager/
├── public/                # Static public assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── TaskForm.js    # Form for adding/editing tasks
│   │   ├── TaskList.js    # List of tasks
│   │   ├── TaskItem.js    # Individual task item
│   ├── styles/            # Custom CSS for styling
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
```

---

## Technologies Used

- **React**: Component-based UI library.
- **React Icons**: Icons for buttons and UI elements.
- **CSS**: Custom styling for layout and design.

---

## Future Improvements

- Add task categories or labels for better organization.
- Implement task deadlines with reminders.
- Connect to a backend for data persistence.
- Add drag-and-drop functionality for task reordering.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

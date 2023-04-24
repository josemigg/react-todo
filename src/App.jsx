import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";

const INITIAL_TASKS = [
  {
    id: 1,
    text: "Do coding challenges",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Do another thing",
    isCompleted: true,
  },
];

function App() {
  const [myTasks, setMyTasks] = useState(INITIAL_TASKS);

  const addTask = (text) => {
    const newTasksArray = [
      {
        id: new Date().getTime(),
        text,
        isCompleted: false,
      },
      ...myTasks,
    ];
    setMyTasks(newTasksArray);
  };

  const onTaskChecked = (taskId) => {
    console.log(taskId);
    const newTaskArray = myTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setMyTasks(newTaskArray);
  };

  return (
    <div className="app">
      <div className="logo">#TODO</div>
      <div className="filters">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <AddTask addTask={addTask} />
      <div className="tasks">
        {myTasks.map((task) => (
          <div key={task.id} className="task">
            <input
              type="checkbox"
              checked={task.isCompleted}
              onClick={() => onTaskChecked(task.id)}
            />
            <span className={task.isCompleted ? "completed" : ""}>
              {task.text}
            </span>
            <button>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

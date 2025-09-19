import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title:"Laundry", description: "Wash and fold clothes", deadline: "Tomorrow" },
      { id: 3, title:"Grocery Shopping", description: "Buy ingredients for dinner", deadline: "Friday" }
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;
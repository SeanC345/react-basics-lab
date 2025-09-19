import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { title: "Dishes", deadline: "Today", description: "Empty dishwasher" },
      { title: "Laundry", deadline: "Tomorrow", description: "Fold laundry and put away" },
      { title: "Tidy", deadline: "Today", description: "Tidy up living room" }
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
        />
      ))}
    </div>
  );
}

export default App;
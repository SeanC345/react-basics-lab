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
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description}/>
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description}/>
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description}/>
    </div>
  );
}

export default App;
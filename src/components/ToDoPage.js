import React, { useState } from "react";

const bodyStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const inputStyle = {
  padding: "15px",
  fontSize: "20px",
  borderRadius: "10px 0 0 10px",
  minWidth: "500px",
};

const buttonStyle = {
  padding: "15px 25px",
  fontSize: "20px",
  borderRadius: "0 10px 10px 0",
};

const taskStyle = {
  fontSize: "20px",
  border: "1px solid black",
  padding: "15px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const deleteStyle = {
  padding: "10px 25px",
  fontSize: "15px",
};

function ToDoPage() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const writeTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTaskList((currTaskList) => [...currTaskList, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    setTaskList((currTaskList) =>
      currTaskList.filter((task, index) => index !== indexToDelete)
    );
  };

  return (
    <div style={bodyStyle}>
      <div>
        <h1>ToDo App</h1>

        <div>
          <input
            onChange={writeTask}
            style={inputStyle}
            value={task}
            type="text"
            placeholder="Enter your task"
          />
          <button onClick={addTask} style={buttonStyle}>
            Add
          </button>
        </div>

        <div>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Tasks</p>

          {taskList.length === 0 ? (
            <p>No task added</p>
          ) : (
            <div>
              {taskList.map((currTask, index) => (
                <div style={taskStyle} key={index}>
                  {currTask}
                  <button onClick={() => deleteTask(index)} style={deleteStyle}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoPage;

import { useState, useRef } from "react";

import SideBar from "./components/SideBar";
import Content from "./components/Content";
import Form from "./components/Form";
import SelectedTask from "./components/SelectedTask";

let app_data = [];

function App() {
  const [newProject, setNewProject] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(0);
  const formRef = useRef();
  const taskRef = useRef();
  function handleClick() {
    //Click Add project or Set new Project
    setNewProject(true);
    setSelectedTask(() => {
      return;
    });
  }

  function cancelHandle() {
    // Cancel button in Form
    setNewProject(false);
  }

  function handleSubmit(e) {
    //form submit
    e.preventDefault();
    const data = formRef.current.save();
    app_data = [data, ...app_data];

    setNewProject((newProject) => {
      newProject = false;
      return newProject;
    });
  }

  function saveTasks(e) {
    const temp = taskRef.current.saveTask();
    const task = temp[0];
    const taskSelected = temp[1];
    const foundData = app_data.find(
      (data) => data.title === taskSelected.title
    );
    foundData.task = [task, ...foundData.task];
    console.log(app_data);
    const updatedData = JSON.parse(JSON.stringify(foundData));
    setSelectedTask(() => {
      return updatedData;
    });
    // setCounter((prev) => prev + 1);
    // console.log(selectedTask);
  }

  function clearTasks(task, taskSelected) {
    const foundData = app_data.find(
      (data) => data.title === taskSelected.title
    );
    // console.log(task, app_data);

    // console.log(app_data, task, taskSelected);

    const ind = foundData.task.indexOf(task);

    foundData.task.splice(ind, 1);
    console.log(foundData);
    const updatedData = JSON.parse(JSON.stringify(foundData));
    setSelectedTask(() => {
      return updatedData;
    });
  }

  function handleTaskClick(task) {
    // console.log(task);
    setNewProject(false);
    setSelectedTask(() => {
      return task;
    });
  }

  function deleteProject(taskSelected) {
    const ind = app_data.indexOf((data) => data.title === taskSelected.title);
    // console.log([...app_data]);
    app_data.splice(ind, 1);
    setCounter((prev) => prev + 1);
    setSelectedTask(() => {
      return;
    });
    setNewProject(false);
  }

  // console.log(app_data);

  return (
    <main className="h-screen mt-32 flex gap-8">
      {counter >= 0 && (
        <SideBar
          app_data={app_data}
          handleClick={handleClick}
          handleTaskClick={handleTaskClick}
        />
      )}
      {!newProject && !selectedTask && <Content handleClick={handleClick} />}
      {newProject && !selectedTask && (
        <Form
          ref={formRef}
          cancelHandle={cancelHandle}
          handleSubmit={handleSubmit}
        />
      )}
      {selectedTask && (
        <SelectedTask
          ref={taskRef}
          saveTasks={saveTasks}
          taskSelected={selectedTask}
          clearTasks={clearTasks}
          deleteProject={deleteProject}
        />
      )}
    </main>
  );
}

export default App;

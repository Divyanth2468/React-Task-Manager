import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const SelectedTask = forwardRef(function SelectedTask(
  { taskSelected, saveTasks, clearTasks, deleteProject },
  ref
) {
  console.log(taskSelected);
  // console.log("tasks component", taskSelected);

  // const [tasks, setTasks] = useState([]);
  const [input, setInputChange] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const taskRef = useRef();

  useImperativeHandle(ref, () => ({
    saveTask() {
      return [taskRef.current.value, taskSelected];
    },
  }));

  // function addTask() {
  //   setTasks([taskRef.current.value, ...tasks]);
  // }

  // function handleClear(task) {
  //   const ind = tasks.indexOf(task);
  //   const tempTasks = [...tasks];
  //   tempTasks.splice(ind, 1);
  //   setTasks(tempTasks);
  // }

  function closeDialog() {
    setShowDialog(false);
  }

  function handleAddTask() {
    if (!taskRef.current.value) {
      setShowDialog(true);
    } else {
      saveTasks();
      setInputChange("");
    }
  }

  return (
    <div className="w-3/4 flex flex-col items-start p-40">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {taskSelected.title}
        </h1>
        <button
          onClick={() => deleteProject(taskSelected)}
          className="text-stone-600 hover:text-stone-950 text-xl"
        >
          Delete
        </button>
      </div>

      <p className="mb-2 text-stone-400">{taskSelected.date}</p>
      <p className="mt-8 text-stone-600 whitespace-pre-wrap mb-4">
        {taskSelected.description}
      </p>

      <hr className="h-px rounded my-8 border-8 w-full bg-stone-700" />

      <h2 className="text-3xl font-bold text-stone-700 mb-4">Tasks</h2>

      <div className="w-full flex items-center mb-4">
        <input
          required
          ref={taskRef}
          value={input}
          onChange={(e) => setInputChange(e.target.value)}
          className="w-[20rem] p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
        <button
          onClick={handleAddTask}
          className="text-stone-500 px-4 py-2 rounded-md"
        >
          Add Task
        </button>
      </div>

      {showDialog && (
        <dialog
          open
          className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
          <h2 className="text-lg font-bold">Input Required</h2>
          <p>Please enter a task before adding.</p>
          <button onClick={closeDialog} className="mt-4 text-stone-600">
            Close
          </button>
        </dialog>
      )}

      <ul className="w-full p-4 mt-4">
        {taskSelected &&
          taskSelected.task.length > 0 &&
          taskSelected.task.map((task, key) => {
            return (
              <li
                key={key}
                className="flex justify-between my-4 text-stone-800 rounded-md bg-stone-100 w-full p-8"
              >
                {task}
                <button
                  onClick={() => clearTasks(task, taskSelected)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
});
export default SelectedTask;

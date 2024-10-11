import AddProjectButton from "./AddProjectButton";

export default function SideBar({ app_data, handleClick, handleTaskClick }) {
  const data = app_data;

  return (
    <div className="bg-stone-900 w-1/5 p-4 rounded-r-2xl box-border flex flex-col">
      <div className="flex flex-col w-full mt-24 items-center justify-center">
        <h1 className="mb-8 font-bold uppercase md:text-3xl text-stone-200">
          Your Projects
        </h1>
        <AddProjectButton handleClick={handleClick} />
        <ul className="mt-8 text-stone-400 text-xl">
          {data.length > 0 &&
            data.map((task, key) => (
              <li key={key} className="flex justify-between my-4">
                <button
                  onClick={() => handleTaskClick(task)}
                  className="text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800"
                >
                  {task.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

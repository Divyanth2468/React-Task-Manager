import CreateNewProject from "./CreateNewProjectButton";

export default function Content({ handleClick }) {
  return (
    <div className="w-3/4 flex flex-col justify-center items-center">
      <div className="-mt-60 flex flex-col items-center">
        <img className="w-32 h-32 object-contain mx-auto" src="logo.png" />
        <h2 className="text-2xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">
          Select a Project or get started with a new one
        </p>
        <CreateNewProject handleClick={handleClick} />
      </div>
    </div>
  );
}

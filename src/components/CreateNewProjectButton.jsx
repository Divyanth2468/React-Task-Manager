export default function CreateNewProject({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 rounded-md text-xl bg-stone-800 text-stone-200 hover:text-white hover:bg-stone-950"
    >
      Create new project
    </button>
  );
}

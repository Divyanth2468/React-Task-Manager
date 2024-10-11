export default function AddProjectButton({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-xs md:text-2xl rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      + Add Project
    </button>
  );
}

export default function FormButtons({ cancel, save, cancelHandle }) {
  return (
    <menu className="text-lg flex items-center justify-end gap-4 my-4">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          cancelHandle();
        }}
        className="text-stone-800 hover:text-stone-950"
      >
        {cancel}
      </button>
      <button
        type="submit"
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >
        {save}
      </button>
    </menu>
  );
}

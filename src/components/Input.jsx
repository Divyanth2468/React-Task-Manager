import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type, input }, ref) {
  return (
    <label className="text-lg font-bold uppercase text-stone-500">
      {label}
      {input !== "textarea" && (
        <input
          ref={ref}
          // required
          type={type}
          name={label}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
      {input === "textarea" && (
        <textarea
          ref={ref}
          // required
          type={type}
          name={label}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </label>
  );
});

export default Input;

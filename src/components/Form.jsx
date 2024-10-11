import { useRef, forwardRef, useImperativeHandle } from "react";

import Input from "./Input";
import FormButtons from "./FormButtons";

const Form = forwardRef(function Form({ cancelHandle, handleSubmit }, ref) {
  // console.log(handleSubmit);

  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const dateRef = useRef("");

  useImperativeHandle(ref, () => ({
    save() {
      const data = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        date: dateRef.current.value ? dateRef.current.value : "11/11/24",
        task: [],
      };
      return data;
    },
  }));

  return (
    <div className="w-3/4 flex flex-col items-center justify-center">
      <form className="-mt-60 text-left align-middle" onSubmit={handleSubmit}>
        <FormButtons cancel="Cancel" save="Save" cancelHandle={cancelHandle} />
        <Input ref={titleRef} label="Title" type="text" input="input" />
        <Input
          ref={descriptionRef}
          label="Description"
          type="text"
          input="textarea"
        />
        <Input ref={dateRef} label="Date" type="date" input="date" />
      </form>
    </div>
  );
});
export default Form;

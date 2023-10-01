import { useState } from "react";

const MyForm = () => {
  const [obj, setObj] = useState({ firstName: "", lastName: "" });
  const onchangeHandler = (event) => {
    setObj((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div className="flex flex-col h-[600px] justify-center items-center">
      <form className="flex flex-col gap-5">
        <input
          className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={onchangeHandler}
        ></input>
        <input
          className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={onchangeHandler}
        ></input>
        <button className="bg-red-600 py-2 px-8">GREET ME</button>
      </form>
    </div>
  );
};

export default MyForm;

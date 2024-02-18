import { FaSignature } from "react-icons/fa";

const Input = () => {
 return (
  <div className="flex flex-col justify-center items-center pt-28 pb-16 ">
   <h3 className="text-6xl capitalize my-8 flex gap-4 text-blue-700">
    what you think today ?
   </h3>

   <div className="flex w-3/5 justify-center items-center ">
    <form
     action=""
     className="flex w-full items-center justify-between drop-shadow-lg">
     <input
      className="bg-white border border-gray-400 w-full flex-grow p-6 rounded-tl-md rounded-bl-md placeholder-white placeholder:text-2xl placeholder:capitalize"
      type="text"
      placeholder="add your note here .."
     />
     <button
      type="submit"
      className="w-[120px] text-2xl bg-blue-700 p-5 capitalize text-white rounded-tr-md rounded-br-md hover:bg-blue-800 ">
      add
     </button>
    </form>
   </div>
  </div>
 );
};

export default Input;

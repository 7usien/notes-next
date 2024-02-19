import { FaSignature } from "react-icons/fa";
import * as actions from "@/actions";
const Input = () => {
 return (
  <div className="flex flex-col justify-center items-center pt-28 pb-16">
   <h3 className="text-6xl capitalize my-8 flex gap-4 text-blue-700">
    what you think today?
   </h3>

   <div className="flex w-3/5 justify-center items-center">
    <form
     action={actions.addNoteAction}
     className="flex w-full flex-col items-center justify-between drop-shadow-lg">
     {/* Title and Date (1st Row) */}
     <div className="grid grid-cols-2 gap-4 w-full ">
      <div className="w-full">
       <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
        Title
       </label>
       <input
        type="text"
        name="title"
        placeholder="note title .."
        className="bg-gray-100 border border-gray-400 w-full p-6 rounded-tl-md rounded-bl-md placeholder:text-2xl placeholder:capitalize"
       />
      </div>
      <div className="w-full">
       <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
        Date and Time
       </label>
       <input
        type="datetime-local"
        name="data"
        id="date"
        className="bg-gray-100 border border-gray-400 w-full p-6 rounded-tl-md rounded-bl-md"
       />
      </div>
     </div>

     {/* Note (2nd Row) */}
     <div className="w-full mt-4">
      <label htmlFor="note" className="block text-gray-700 font-medium mb-2">
       Note
      </label>
      <input
       type="text"
       name="note"
       placeholder="note content"
       className="bg-gray-100 border border-gray-400 w-full p-6 rounded-tl-md rounded-bl-md placeholder:text-2xl placeholder:capitalize"
      />
     </div>

     {/* Image and Tags (3rd Row) */}
     <div className="grid grid-cols-2 gap-4 w-full mt-4">
      <div className="w-full">
       <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
        Thumbnail
       </label>
       <input
        type="file"
        name="image"
        id="image"
        className="bg-gray-100 border border-gray-400 w-full p-6 rounded-tl-md rounded-bl-md"
       />
      </div>
      <div className="w-full">
       <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
        Tags
       </label>
       <input
        type="text"
        name="tags"
        id="tags"
        className="bg-gray-100 border border-gray-400 w-full p-6 rounded-tl-md rounded-bl-md placeholder:text-2xl placeholder:capitalize"
       />
      </div>
     </div>

     <button
      type="submit"
      className="w-[120px] text-2xl bg-blue-600 p-5 capitalize text-white rounded hover:bg-yellow-500 mt-4">
      add
     </button>
    </form>
   </div>
  </div>
 );
};

export default Input;

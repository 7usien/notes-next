import { db } from "@/db";
import { FaRegCalendarAlt, FaEye, FaTags } from "react-icons/fa";

interface Iparams {
 params: {
  id: string;
 };
}
const showNotePage = async (props: Iparams) => {
 const id = props.params.id;

 const noteById = await db.note.findFirst({
  where: {
   id: parseInt(id),
  },
 });

 return (
  <div className="m-auto w-2/3 py-6">
   <h2 className="text-4xl text-center text-blue-900"> {noteById?.title} 
  

   `</h2>
   <span className="flex justify-center items-center"><button>Edit</button> | <button>Delete</button></span>
   <ul className="flex gap-3 justify-center border-b pb-3 text-gray-600">
    <li className="flex gap-1 items-center">
     <FaRegCalendarAlt />
     {noteById?.date}
    </li>
    <li className="flex gap-1 items-center">
     <FaEye /> 2022
    </li>
    <li className="flex gap-1 items-center"> {noteById?.icon}</li>
    <li className="flex gap-1 items-center">
     <FaTags /> {noteById?.tags}
    </li>
   </ul>

   <div className=" text-center text-2xl  p-4 rounded my-6">
    {noteById?.note}
   </div>
  </div>
 );
};

export default showNotePage;

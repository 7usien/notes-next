import { FaStickyNote } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const Item = ({ id, title, note, date, icon, tags }) => {
 return (
  <>
   <div className="flex justify-between  border p-4 bg-blue-100 rounded">
    <h2 className="flex items-center gap-2">
     <FaStickyNote />
     {title}
    </h2>

    <span className="text-xs text-blue-500 block">
     <FaEye className="inline" /> 20 | {date}
    </span>
   </div>
  </>
 );
};

export default Item;

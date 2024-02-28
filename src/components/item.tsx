import Link from "next/link";
import { FaStickyNote } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const Item = ({ id, title, note, date, icon, tags }) => {
 return (
  <>
   <div className="flex justify-between  border border-blue-100 p-4 bg-blue-50 rounded shadow-blue-200 shadow-sm">
    <Link href={`/notes/${id}`}>
     <h2 className="flex items-center gap-2">
      <FaStickyNote />
      {title}
     </h2>
    </Link>

    <span className="text-xs text-blue-500 block">
     <FaEye className="inline" /> 20 | {date}
    </span>
   </div>
  </>
 );
};

export default Item;

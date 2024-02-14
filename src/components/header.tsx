import {
 FaHome,
 FaList,
 FaScroll,
 FaRegCommentAlt,
 FaRegUser,
} from "react-icons/fa";

const Header = () => {
 return (
  <div className="w-full border-b">
   <div className="flex justify-between items-center max-w-5xl mx-auto py-3">
    <h3 className="flex text-3xl gap-4 items-center text-blue-700">
     <FaScroll />
     D.Notes
    </h3>

    <nav>
     <ul className="flex gap-6 text-gray-600">
      <li>
       <FaHome className="inline mr-2" />
       Home
      </li>
      <li>
       <FaList className="inline mr-2" />
       About
      </li>
      <li>
       <FaRegCommentAlt className="inline mr-2" />
       Contact
      </li>
      <li>
       <FaRegUser className="inline mr-2" />
       Sign-in
      </li>
     </ul>
    </nav>
   </div>
  </div>
 );
};

export default Header;

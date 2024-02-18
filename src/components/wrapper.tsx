import { FaClipboardCheck } from "react-icons/fa";


const Wrapper = ({ children, title }) => {
 return(
 <>
  {title && (
   <div className="max-w-5xl m-auto">
     <h3 className="text-3xl capitalize text-gray-700 mb-8">
      
      {title}</h3>
   </div>
  )}
  <div className="w-full grid grid-cols-2 max-w-5xl m-auto  gap-6">
   {children}
  </div>
  
 </>)
};

export default Wrapper;

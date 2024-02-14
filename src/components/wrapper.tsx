import React from "react";



const Wrapper = ({ children, title }) => {
 return <div className="w-full grid grid-cols-2 max-w-5xl m-auto gap-6">

 {title && <div></div>} 
  {children}
 
 </div>;
};

export default Wrapper;

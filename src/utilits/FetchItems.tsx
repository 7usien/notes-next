"use client";

import Item from "@/components/item";
import { useEffect, useState } from "react";

const FetchItems = ({notes}) => {

 const [mynotes, setMyNotes] = useState([]);

 useEffect(() => {
  
  setMyNotes(notes)
  
 },[notes])

 return (
  <>
   {mynotes.map((mynote)=><Item key={mynote.id} {...mynote} />)}
   

  </>
 );
};

export default FetchItems;

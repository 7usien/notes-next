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
   {mynotes.length > 0 ? mynotes.map((mynote)=><Item key={mynote.id} {...mynote} />) : <h2 className="text-center text-2xl bg-orange-400 border border-orange-400 p-2">thers is not notes yet .. please add one !</h2>}
   

  </>
 );
};

export default FetchItems;

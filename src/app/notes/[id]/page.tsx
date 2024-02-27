import { db } from "@/db";
import React from "react";

interface Iparams {
 params: {
  id: string;
 };
}
const showNotePage = async (props: Iparams) => {
 const id = props.params.id;

 const getNoteById = await db.note.findFirst({
  where: {
   id: parseInt(id),
  },
 });

 return (
  <div className="m-auto w-2/3">
   <h2>note title : {getNoteById?.title}</h2>
   <ul>
    <li>date : {getNoteById?.date}</li>
    <li>views : </li>
    <li>icon : {getNoteById?.icon}</li>
   </ul>

   <div>note here : {getNoteById?.note}</div>
  </div>
 );
};

export default showNotePage;

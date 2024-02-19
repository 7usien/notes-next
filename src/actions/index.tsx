"use server";

import { db } from "@/db";
import { notFound } from "next/navigation";

export async function addNoteAction(formData:FormData) {
 console.log(formData);

 // //!use server action > use server

 // //* valid data from user 
 const title = formData.get('title') as string;
 const note = formData.get('note') as string;
 const image = formData.get('image') as string;
 const tags= formData.get('tags') as string;
 
 const AddNote = await db.note.create({
  data: {
   title,
   note,
   image,
   tags
  }
 })

 if (!AddNote) {
  notFound();
 }
 

 // //^ create a new note inside our DB
 
 // //&& redirect to Home

}

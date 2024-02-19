"use server";

import { db } from "@/db";
import { notFound } from "next/navigation";

export async function addNoteAction(formData:FormData) {
 console.log(formData);

 // //!use server action > use server

 // //* valid data from user 
 let title = formData.get('title') as string;
 let note = formData.get('note') as string;
 let image = formData.get('image') as string;
 let tags= formData.get('tags') as string;
 
 let AddedNote = await db.note.create({
  data: {
   title,
   note,
   date,
   image,
   tags
  }
 })
 console.log(AddedNote)

 if (!AddedNote) {
  notFound();
 }
 

 // //^ create a new note inside our DB
 

}

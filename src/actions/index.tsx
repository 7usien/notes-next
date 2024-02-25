"use server";

import { db } from "@/db";
import { notFound } from "next/navigation";

interface IAddNoteTypes {
 title: string;
 note: string;
 date: string;
 image: string;
 tags: string[];
}

export async function addNoteAction(formData: FormData) {
 const title = formData.get("title") as string;
 const note = formData.get("note") as string;
 const image = formData.get("image") as string;
 const date = formData.get("date") as string;
 const tags = formData.get("tags") as string;
 
 const AddedNote = await db.note.create({
  data: {
   title,
   note,
   image,
   date,
   tags,
  },
 });


 console.log(AddedNote)

 if (!AddedNote) {
  notFound();
 }
}

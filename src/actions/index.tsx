"use server";

import Loader from "@/components/Loader";
import { db } from "@/db";
import { notFound, redirect } from "next/navigation";

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
 const icon = formData.get("icon") as string;
 const date = formData.get("date") as string;
 const tags = formData.get("tags") as string;

 const AddedNote = await db.note.create({
  data: {
   title,
   note,
   icon,
   date,
   tags,
  },
 });

 if (!AddedNote) {
  notFound();
 }

 redirect("/");
}

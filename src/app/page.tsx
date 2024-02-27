import Input from "@/components/input";

import Wrapper from "@/components/wrapper";
import { db } from "@/db";
import FetchItems from "@/utilits/FetchItems";
export default async function Home() {
 const notes = await db.note.findMany({
  orderBy: {
  createdAt:'asc'
 }
 });

 return (
  <div>
   <Input />

   <Wrapper title="your latest notes >">
    <FetchItems notes={notes} />
   </Wrapper>
  </div>
 );
}

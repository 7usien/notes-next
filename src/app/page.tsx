import Input from "@/components/input";
import Item from "@/components/item";
import Wrapper from "@/components/wrapper";

export default function Home() {
 return (
  <div>
   <Input />

   <Wrapper title="your latest notes >">
    <Item />
    <Item />
    <Item />
    <Item />
   </Wrapper>
  </div>
 );
}

// import { Demo } from "./components/Demo";
import { getList } from "../service/common";
export default async function About() {
  const { data } = await getList();
  console.log(data, "erwrewr1");
  return (
    <div>
      {/* <Demo name="Demo"></Demo> */}
      {data.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
}

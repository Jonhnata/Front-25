import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
return (

  <section>
    <h1>Amazing scientists</h1>
    <Profile/>
    <Profile/>
    <Profile/>
    <hr/>
    <TodoList/>
  </section>
)
   
}

import { Profile } from "./Profile";

export default function Page() {
  return (
    <main style={{ textAlign: "center" }}>
      <h1>Site criado para a disciplina Programação Front-End</h1>
      <Profile person={{ name: "Jonhnata" }} />
    </main>
  );
}

import { Avatar } from "./Avatar";

export function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
      <h2>{props.person.name}</h2>
    </div>
  );
}

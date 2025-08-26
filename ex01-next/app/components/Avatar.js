export function Avatar({ person }) {
  return (
    <img
      className="avatar"
      public="/ei.jpg"   
      alt={person.name}
      width={150}
      height={150}
    />
  );
}

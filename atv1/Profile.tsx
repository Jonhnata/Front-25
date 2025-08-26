import Image from "next/image";

export default function Profile() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Image
        src="/foto.jpg"
        alt="Minha foto"
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      />
      <h2>Jonhnata</h2>
      <p>Sou estudante de programação e apaixonado por tecnologia. 🚀</p>
      <p>Busco sempre aprender e evoluir na área de Front-End.</p>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="profile-container">
      <img
        src="https://via.placeholder.com/150"
        alt="Sua foto"
        className="profile-photo"
      />
      <h2 className="profile-name">Seu Nome</h2>
      <p className="profile-bio">
        Escreva aqui sua mini biografia. Use 2 a 3 frases para descrever quem você é e o que gosta de fazer.
        Este componente está pronto para ser reutilizado em qualquer página do seu site.
      </p>
    </div>
  );
} 
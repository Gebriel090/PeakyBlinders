export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} color="#505050" />

      {/* Luz principal: Um poste de rua simulado (Spotlight) */}
      <spotLight
        position={[3, 5, 2]}
        angle={0.5}
        penumbra={0.5}
        intensity={20}
        castShadow
        shadow-bias={-0.0001}
        color="#fff0d6" // Luz amarelada vintage
      />

      {/* Luz de recorte (Rim Light) para separar o Tommy do fundo */}
      <spotLight
        position={[-2, 3, -2]}
        intensity={5}
        color="#4a6fa5" // Um tom azulado frio para contraste
      />
    </>
  );
}

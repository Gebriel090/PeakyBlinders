"use client";

import { useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Image as DreiImage,
  SpotLight,
  Cloud,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Thunder from "./Thunder";

export default function HeroScene() {
  const scroll = useScroll();
  const { width } = useThree((state) => state.viewport);
  const groupRef = useRef<THREE.Group>(null);
  const imageRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const r1 = scroll.range(0, 1);

    // MOVIMENTO DE CÂMERA (Zoom Infinito no Olho)
    if (groupRef.current) {
      // A câmera avança até "atravessar" a imagem
      state.camera.position.z = 5 - r1 * 8;
    }

    // Parallax Suave
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    state.camera.position.x += (mouseX * 0.2 - state.camera.position.x) * delta; // Reduzi a intensidade
    state.camera.position.y += (mouseY * 0.2 - state.camera.position.y) * delta;

    // Fade da Imagem Principal
    if (imageRef.current) {
      const material = imageRef.current.material as THREE.Material;
      if (material) {
        material.transparent = true;
        // A imagem some completamente quando o scroll chega na metade da "viagem"
        // para dar espaço aos cards que virão depois
        material.opacity = 1 - scroll.range(0.5, 0.3);
      }
      imageRef.current.scale.setScalar(1 + r1 * 0.8);
    }
  });

  return (
    <group ref={groupRef}>
      <Thunder />

      {/* 1. Imagem Principal (Sem nada atrás) */}
    

      {/* 2. Iluminação Dramática */}
      <SpotLight
        position={[5, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={30}
        color="#b91c1c"
        distance={20}
        attenuation={10}
        anglePower={5}
      />

      <SpotLight
        position={[-5, 2, 2]}
        angle={0.5}
        penumbra={1}
        intensity={10}
        color="#0a0a0a" // Luz de preenchimento quase negra
        distance={20}
      />

      {/* 3. Fumaça (Apenas ambiente, sem formas de cards) */}
      <group position={[0, -2, 1]}>
        <Cloud
          opacity={0.4}
          speed={0.1}
          bounds={[15, 2, 2]}
          segments={20}
          color="#1a0505" // Fumaça avermelhada muito escura
        />
      </group>

      <Sparkles
        count={100}
        scale={8}
        size={2}
        speed={0.4}
        opacity={0.5}
        color="#ff5500"
        position={[0, 0, 2]}
      />
    </group>
  );
}

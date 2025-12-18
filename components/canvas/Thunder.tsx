"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function Thunder() {
  const lightRef = useRef<THREE.PointLight>(null);

  const [flash, setFlash] = useState({
    active: false,
    duration: 0,
    timer: 0,
  });

  useFrame((state, delta) => {
    if (!lightRef.current) return;

    if (!flash.active) {
      // Chance aleatória de trovão
      if (Math.random() < 0.008) {
        setFlash({
          active: true,
          duration: 0.1 + Math.random() * 0.2,
          timer: 0,
        });
      }
      lightRef.current.intensity = 0;
    } else {
      flash.timer += delta;
      if (flash.timer > flash.duration) {
        setFlash((prev) => ({ ...prev, active: false }));
        lightRef.current.intensity = 0;
      } else {
        // Flash estroboscópico
        lightRef.current.intensity = (Math.random() > 0.5 ? 1 : 0) * 100;
        lightRef.current.position.x = (Math.random() - 0.5) * 30;
      }
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 20, -5]}
      color="#a3c4ff" // Azul pálido frio para contraste
      distance={50}
      decay={2}
    />
  );
}

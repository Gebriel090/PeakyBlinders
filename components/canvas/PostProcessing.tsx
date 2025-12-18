"use client";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

// 👇 A SOLUÇÃO DEFINITIVA:
// Convertemos os componentes para 'any' para o TypeScript parar de reclamar
// sobre o tipo de retorno ser 'undefined'.
const NoiseAny = Noise as any;
const VignetteAny = Vignette as any;

export default function PostProcessing() {
  return (
    <EffectComposer disableNormalPass>
      <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />

      {/* Usamos a versão convertida aqui. Sem erro, sem @ts-ignore. */}
      <NoiseAny
        opacity={0.15}
        premultiply
        blendFunction={BlendFunction.OVERLAY}
      />

      <VignetteAny eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}

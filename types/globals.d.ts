declare module "*.css";
// global.d.ts
declare module "@react-three/postprocessing" {
  import * as React from "react";

  export const EffectComposer: React.ComponentType<any>;
  export const Bloom: React.ComponentType<any>;
  export const Noise: React.ComponentType<any>;
  export const Vignette: React.ComponentType<any>;
}

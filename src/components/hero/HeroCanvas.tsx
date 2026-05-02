"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 3, 8]}
        intensity={1.2}
        color="#ddd6fe"
      />
      <pointLight position={[-4, -2, 4]} intensity={1.4} color="#38bdf8" />
      <Float speed={2.2} rotationIntensity={0.55} floatIntensity={0.85}>
        <Sphere args={[1.05, 64, 64]}>
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={0.35}
            distort={0.38}
            speed={2.4}
            roughness={0.18}
            metalness={0.55}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.45} floatIntensity={0.65}>
        <Torus
          args={[0.52, 0.16, 32, 96]}
          position={[1.55, -0.45, 0.35]}
          rotation={[0.6, 0.9, 0.2]}
        >
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#0369a1"
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.12}
          />
        </Torus>
      </Float>
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative h-[min(380px,48vh)] w-full max-w-xl">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="!absolute inset-0"
      >
        <Scene />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-[40%] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.22),transparent_62%)]" />
    </div>
  );
}

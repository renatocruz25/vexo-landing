"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Trail,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

/* ----------------------------------------------------------------------- */
/* Core: o logo VEXO flutuando no centro, com material distorcido e glow   */
/* ----------------------------------------------------------------------- */

function VexoCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core glowing icosahedron representing the VEXO mark */}
      <mesh ref={meshRef} scale={0.62}>
        <icosahedronGeometry args={[1.15, 1]} />
        <MeshDistortMaterial
          color="#2563EB"
          emissive="#2563EB"
          emissiveIntensity={0.6}
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
      {/* Inner accent core */}
      <mesh scale={0.34}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#22C55E"
          emissive="#22C55E"
          emissiveIntensity={1.2}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      {/* Point light from inside the core */}
      <pointLight color="#2563EB" intensity={4} distance={8} decay={2} />
      <pointLight color="#22C55E" intensity={1.6} distance={5} decay={2} />
    </group>
  );
}

/* ----------------------------------------------------------------------- */
/* Holographic rings - the "Arena Core" signature element                  */
/* ----------------------------------------------------------------------- */

function ArenaRing({
  radius,
  tube,
  color,
  speed,
  tilt,
  opacity = 0.5,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  tilt: [number, number, number];
  opacity?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, tube, 16, 120]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
        transparent
        opacity={opacity}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

/* ----------------------------------------------------------------------- */
/* Orbiting elements: rankings (cubes), trophies, charts, creators, marcas */
/* ----------------------------------------------------------------------- */

type OrbitItemType = "rank" | "trophy" | "chart" | "creator" | "brand";

function OrbitItem({
  radius,
  speed,
  offset,
  type,
  size,
  yOffset,
}: {
  radius: number;
  speed: number;
  offset: number;
  type: OrbitItemType;
  size: number;
  yOffset: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = yOffset + Math.sin(t * 1.4) * 0.4;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.012;
    }
  });

  const color = useMemo(() => {
    switch (type) {
      case "rank":
        return "#2563EB";
      case "trophy":
        return "#22C55E";
      case "chart":
        return "#60A5FA";
      case "creator":
        return "#A78BFA";
      case "brand":
        return "#22C55E";
      default:
        return "#2563EB";
    }
  }, [type]);

  const geometry = useMemo(() => {
    switch (type) {
      case "rank":
        return <octahedronGeometry args={[size, 0]} />;
      case "trophy":
        return <coneGeometry args={[size * 0.7, size * 1.4, 6]} />;
      case "chart":
        return <boxGeometry args={[size, size * 1.4, size * 0.15]} />;
      case "creator":
        return <sphereGeometry args={[size * 0.8, 16, 16]} />;
      case "brand":
        return <torusGeometry args={[size * 0.7, size * 0.18, 8, 24]} />;
      default:
        return <boxGeometry args={[size, size, size]} />;
    }
  }, [type, size]);

  return (
    <group ref={ref}>
      <Trail
        width={1.2}
        length={4}
        color={color}
        attenuation={(t) => t * t * 0.5}
      >
        <mesh ref={meshRef}>
          {geometry}
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.7}
            roughness={0.25}
            metalness={0.7}
            transparent
            opacity={0.92}
          />
        </mesh>
      </Trail>
    </group>
  );
}

/* ----------------------------------------------------------------------- */
/* Mouse-reactive group: tilts the whole arena slightly toward the cursor  */
/* ----------------------------------------------------------------------- */

function MouseGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const x = state.pointer.x;
    const y = state.pointer.y;
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      x * 0.35,
      0.04
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -y * 0.2,
      0.04
    );
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      x * viewport.width * 0.02,
      0.05
    );
  });

  return <group ref={ref}>{children}</group>;
}

/* ----------------------------------------------------------------------- */
/* Main scene                                                                */
/* ----------------------------------------------------------------------- */

function ArenaScene() {
  const orbitItems: { type: OrbitItemType; radius: number; speed: number; offset: number; size: number; yOffset: number }[] =
    useMemo(
      () => [
        { type: "rank", radius: 3.4, speed: 0.35, offset: 0, size: 0.26, yOffset: 0.6 },
        { type: "trophy", radius: 4.1, speed: -0.28, offset: 1.5, size: 0.32, yOffset: -0.4 },
        { type: "chart", radius: 3.7, speed: 0.22, offset: 3.2, size: 0.34, yOffset: 0.9 },
        { type: "creator", radius: 4.4, speed: -0.32, offset: 4.6, size: 0.24, yOffset: -0.8 },
        { type: "brand", radius: 3.9, speed: 0.4, offset: 2.1, size: 0.28, yOffset: 0.1 },
        { type: "rank", radius: 4.6, speed: -0.18, offset: 5.4, size: 0.22, yOffset: 1.1 },
        { type: "creator", radius: 3.3, speed: 0.3, offset: 0.8, size: 0.2, yOffset: -1.1 },
      ],
      []
    );

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#94A3B8" />
      <fog attach="fog" args={["#030712", 8, 20]} />

      <MouseGroup>
        <group position={[0, 2.2, 0]} scale={0.42}>
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
            <VexoCore />
          </Float>

          <ArenaRing radius={2.4} tube={0.012} color="#2563EB" speed={0.12} tilt={[Math.PI / 2.3, 0, 0]} opacity={0.45} />
          <ArenaRing radius={2.9} tube={0.008} color="#22C55E" speed={-0.08} tilt={[Math.PI / 2.6, 0.3, 0]} opacity={0.3} />
          <ArenaRing radius={3.5} tube={0.006} color="#60A5FA" speed={0.06} tilt={[Math.PI / 2.1, -0.2, 0.1]} opacity={0.2} />

          {orbitItems.map((item, i) => (
            <OrbitItem key={i} {...item} />
          ))}
        </group>
      </MouseGroup>

      <Sparkles
        count={120}
        scale={9}
        size={1.5}
        speed={0.3}
        color="#2563EB"
        opacity={0.6}
      />
      <Sparkles
        count={60}
        scale={7}
        size={2}
        speed={0.2}
        color="#22C55E"
        opacity={0.4}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0.4, 8.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ArenaScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

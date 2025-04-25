
import { OrbitControls, Plane, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const GhibliImage = () => {
  const texture = useTexture("/images/textures/girl.jpeg");

  return (
    <Plane args={[5, 5]} position={[0, 0, 0]}>
      <meshBasicMaterial map={texture} transparent />
    </Plane>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <GhibliImage />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;


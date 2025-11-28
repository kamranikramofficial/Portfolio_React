import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, position = [0, 0, 0] }) => {
  //  Ensure a valid URL is always used
  const safeUrl = useMemo(() => {
    if (typeof imgUrl === "string" && imgUrl.trim() !== "") {
      return imgUrl;
    } else {
      console.warn(" BallCanvas: Missing or invalid imgUrl. Using placeholder instead.");
      return "/placeholder.png"; // Must exist in /public
    }
  }, [imgUrl]);

  //  Safely load texture
  const [decal] = useTexture([safeUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/*  Geometry guaranteed valid */}
  <mesh position={position} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/*  Render Decal only when texture is valid */}
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}   //  FIXED invalid rotation
            scale={1}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

// export the inner Ball mesh so other canvases can reuse a single WebGL context
export { Ball };

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      className="w-full h-full"
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={0.9} // Scale of the decal for responsiveness
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [canvasSize, setCanvasSize] = useState({ width: 150, height: 150 });

  useEffect(() => {
    const updateCanvasSize = () => {
      if (window.innerWidth <= 768) {
        // Mobile
        setCanvasSize({ width: 100, height: 100 });
      } else if (window.innerWidth <= 1024) {
        // Tablet
        setCanvasSize({ width: 130, height: 130 });
      } else {
        // Desktop
        setCanvasSize({ width: 150, height: 150 });
      }
    };

    // Initialize the size and add a listener
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  return (
    <div
      style={{
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
        margin: "auto",
      }}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%",
          height: "100%",
          background: "black", // Background color for canvas
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;

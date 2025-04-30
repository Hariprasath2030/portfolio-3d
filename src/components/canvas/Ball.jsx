import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, scale }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.9}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [canvasSize, setCanvasSize] = useState({ width: 150, height: 150 });
  const [ballScale, setBallScale] = useState(2.5);

  useEffect(() => {
    const updateResponsiveValues = () => {
      if (window.innerWidth <= 768) {
        setCanvasSize({ width: 100, height: 100 });
        setBallScale(1.8);
      } else if (window.innerWidth <= 1024) {
        setCanvasSize({ width: 130, height: 130 });
        setBallScale(2.2);
      } else {
        setCanvasSize({ width: 150, height: 150 });
        setBallScale(2.5);
      }
    };

    updateResponsiveValues();
    window.addEventListener("resize", updateResponsiveValues);
    return () => window.removeEventListener("resize", updateResponsiveValues);
  }, []);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
        margin: "auto",
      }}
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%",
          height: "100%",
          background: "black",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} scale={ballScale} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;

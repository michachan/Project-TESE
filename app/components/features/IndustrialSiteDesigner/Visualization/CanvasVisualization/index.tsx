import { Container } from '@chakra-ui/react';
import {
  Box,
  Environment,
  Instance,
  Instances,
  Lightformer,
  OrbitControls,
  RoundedBox,
} from '@react-three/drei';
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { throttle } from 'lodash';
import { useMemo, useRef, useState } from 'react';

import { useStore } from '@/app/lib/store';
import { greedyBalancing } from '@/app/utils/greedyBalancing';

// TODO: lift containers on hover
// function Box(props: ThreeElements['mesh']) {
//   const ref = useRef<THREE.Mesh>(null!);
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   useFrame((state, delta) => (ref.current.rotation.x += delta));
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   );
// }

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  // <Instances position={[0, -1.02, 0]}>
  <Instances position={[0, 0, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#999" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ':' + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper
      args={[100, 100, '#515151', '#515151']}
      position={[0, -0.01, 0]}
    />
  </Instances>
);

export const CanvasVisualization = () => {
  const state = useStore();
  const { flattenedPlots } = greedyBalancing(state, 10, 100);

  return (
    <Container height="500px">
      <Canvas
        shadows
        orthographic
        camera={{ position: [10, 20, 20], zoom: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={-0.1}
          zoomSpeed={0.4}
          maxZoom={200}
          enablePan={true}
          dampingFactor={0.05}
        />
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.1} />
        <directionalLight
          castShadow
          position={[20, 60, 20]}
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, 10, -10]}
          />
        </directionalLight>

        {flattenedPlots.map((plot, index) => {
          const scaledWidth = plot.dimensions.width / 10;
          const scaledLength = plot.dimensions.length / 10;

          return (
            <RoundedBox
              key={index}
              args={[scaledWidth - 0.2, 1, scaledLength - 0.2]}
              position={[
                -plot.plot.x - scaledWidth / 2,
                0.5,
                -plot.plot.y - scaledLength / 2,
              ]}
              material-color={plot.plot.color}
            >
              <meshPhongMaterial color={plot.plot.color} />
            </RoundedBox>
          );
        })}

        <Grid />
      </Canvas>
    </Container>
  );
};

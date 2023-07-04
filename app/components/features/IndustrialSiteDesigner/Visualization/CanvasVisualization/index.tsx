import { Container } from '@chakra-ui/react';
import {
  Box,
  Environment,
  Instance,
  Instances,
  Lightformer,
  OrbitControls,
} from '@react-three/drei';
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import { throttle } from 'lodash';
import { useMemo, useRef, useState } from 'react';

import { useStore } from '@/app/lib/store';
import { greedyBalancing } from '@/app/utils/greedyBalancing';

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
    <gridHelper args={[100, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
  </Instances>
);

export const CanvasVisualization = () => {
  const state = useStore();
  const { flattenedPlots } = greedyBalancing(state, 10, 100);

  // const throttledCalculation = useMemo(() => throttle(drawChart, 1_500), []);

  return (
    <Container height="500px">
      <Canvas
        shadows
        orthographic
        camera={{ position: [10, 20, 20], zoom: 10 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          autoRotate={false}
          autoRotateSpeed={-0.1}
          zoomSpeed={0.25}
          // minZoom={20}
          maxZoom={140}
          enablePan={true}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={1.6}
        />
        <color attach="background" args={['#000']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {flattenedPlots.map((plot, index) => {
          console.log({ plot, index });
          const scaledWidth = plot.dimensions.width / 10;
          const scaledLength = plot.dimensions.length / 10;

          console.log({
            scaledWidth,
            scaledLength,
            x: plot.plot.x,
            y: plot.plot.y,
          });

          return (
            <Box
              key={index}
              args={[scaledWidth, 1, scaledLength]}
              position={[
                -plot.plot.x - scaledWidth / 2,
                0.5,
                -plot.plot.y - scaledLength / 2,
              ]}
              material-color={plot.plot.color}
            />
          );
        })}
        {/* </Environment> */}

        <Grid />
      </Canvas>
    </Container>
  );
};

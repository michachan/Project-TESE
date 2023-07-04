import { Container } from '@chakra-ui/react';
import { OrbitControls, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { ThreeDimensionalVisualizationBaseProps } from './3dVisualization.types';
import { ThreeDimensionGrid } from './grid';

export const ThreeDimensionalVisualizationBase: React.FC<
  ThreeDimensionalVisualizationBaseProps
> = ({ flattenedPlots }) => {
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
              key={`${plot.name}_${index}`}
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

        <ThreeDimensionGrid />
      </Canvas>
    </Container>
  );
};

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

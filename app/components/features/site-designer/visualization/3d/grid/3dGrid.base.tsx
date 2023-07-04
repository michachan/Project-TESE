import { Instance, Instances } from '@react-three/drei';

/**
 * Major credits for grid design - https://codesandbox.io/s/lxvqek?file=/src/App.js:3163-3168
 * @param param0
 * @returns
 */
export const ThreeDimensionalGridBase = ({
  number = 23,
  lineWidth = 0.026,
  height = 0.5,
}) => (
  // Renders a grid and crosses as instances
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

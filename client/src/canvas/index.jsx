import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import CamerRig from "./CamerRig";
import BackDrop from "./BackDrop";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CamerRig>
        {/* <BackDrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CamerRig>
    </Canvas>
  );
};

export default CanvasModel;

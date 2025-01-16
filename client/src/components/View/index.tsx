import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Box } from './Box'
import {FC} from "react";


interface ViewProps {
    boxData: number[][] | null;
}


export const View: FC<ViewProps> = ({ boxData }) => {
    return (
        <Canvas camera={{ position: [2,2,2], near: 0.1, far: 1000 }}>
            <OrbitControls />
            {boxData && <Box verticesList={boxData} />}
        </Canvas>
    );
};

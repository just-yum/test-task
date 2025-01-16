import {FC} from "react";
import {BufferGeometry, BufferAttribute, EdgesGeometry, LineSegments, LineBasicMaterial, DoubleSide } from "three";

interface BoxProps {
    verticesList: number[][]
}

const index = [
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    0, 1, 5, 0, 5, 4,
    1, 2, 6, 1, 6, 5,
    2, 3, 7, 2, 7, 6,
    3, 0, 4, 3, 4, 7
]
export const Box: FC<BoxProps> = ({ verticesList }) => {
    const object = new BufferGeometry();

    const flatArray = new Float32Array(verticesList.flat());
    object.setAttribute('position', new BufferAttribute(flatArray, 3));
    object.setIndex(index);

    const edges = new EdgesGeometry(object);
    const lineMaterial = new LineBasicMaterial({ color: "red" });
    const lineSegments = new LineSegments(edges, lineMaterial);

    return (
        <mesh>
            <primitive object={object} attach="geometry" />
            <meshStandardMaterial color="grey" roughness={0.45} metalness={0.2} wireframe side={DoubleSide} />
            <primitive object={lineSegments}/>
        </mesh>
    );
};

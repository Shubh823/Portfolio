import React from 'react';
import { Float, useGLTF } from '@react-three/drei';

const NarutoModel = (props) => {
    const { scene } = useGLTF('/models/naruto_figurine_with_black_spikes_and_orange_clo.glb'); // Ensure the path is correct

    return(
        <Float floatIntensity={1}>
            <primitive object={scene} {...props} />
        </Float>
    );
};

export default NarutoModel;

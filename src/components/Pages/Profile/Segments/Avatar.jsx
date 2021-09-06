import './../../../styles/profiles.css';

import React, {useRef, Suspense} from 'react';
import { useGLTF, OrbitControls, OrthographicCamera} from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
  const cam = useRef();
  const { scene } = useGLTF("img/demo-avatar.glb")
  return (
    <>
      <primitive object={scene}/>
    </>
  )
}


// class Avatar extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             uinfo: this.props.uinfo
//         }
//     }

//     render () {
//         return (
//             <div className="avarat-inner">
//                 show avatar
//             </div>
//         )
//     }
// }

export function Avatar(props) {
  
  return (
    <div style = {{height:"800px", width: "359px", backgroundColor:"#ae2c6c"}}>
      <Canvas camera={{position: [0, 0, 300], fov: 1, near: 0.1}}>
        
        <ambientLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default Avatar
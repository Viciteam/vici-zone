import './../../../styles/profiles.css';

import React, {useRef, Suspense} from 'react';

function Model() {
  const ref = useRef()
  // const cam = PerspectiveCamera({filmOffset: 1});
  // const { scene } = useGLTF("img/demo-avatar.glb");
  return (
    <>
      <primitive object={scene} ref={ref}/>
    </>
  )
}

function PPEPerson() {
  let fbx = useFBX('img/PPE.fbx')
  return <primitive object={fbx} dispose={null} />
}

// function toConvertToMesh() {
// 	const group = useRef()
// 	const { nodes, materials } = useGLTF('/donut48.gltf')

// 	const [colour, setColour] = useState("#ED91AD")

// 	return (
// 	<group ref={group} {...props} dispose={null}>
// 		<mesh geometry={nodes.Donut.geometry} material={nodes.Donut.material} position={[-0.0037, 0.0251, -0.0048]}>
// 			<mesh onClick={()=>{ colour==="#ED91AD" ? setColour("#93c572") : setColour("#ED91AD")}} geometry={nodes.Icing.geometry} material={nodes.Icing.material} material-color={colour}/>
// 		</mesh>
// 		<mesh
// 			geometry={nodes.SurfSphere001.geometry}
// 			material={nodes.SurfSphere001.material}
// 			position={[0.0619, 0.0463, -0.014]}
// 			rotation={[0.8888, -0.848, 2.0698]}
// 			scale={[0.2261, 0.2592, 0.2496]}
// 		/>
// 		{/* THERE's MORE STUFF HERE THAT I DELETED JUST FOR BREVITY */}
// 	</group>
// 	)
// }


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
      <Canvas camera={{position: [0, 0, 300], fov: 0.5, near: 1, far: 1000, aspect: 9/16}}>
        
        <ambientLight position={[0, 0, 100]} intensity={1.2} />
        
        <Suspense fallback={null}>
          
            <Model />
          
        </Suspense>
        
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

export default Avatar
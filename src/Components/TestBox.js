import {Canvas } from '@react-three/fiber';
import React from 'react'


function Box(){

    return(
<mesh>

<boxBufferGeometry attach= "geometry"></boxBufferGeometry>
<meshLambertMaterial attach = "material"  color = "hotpink"></meshLambertMaterial>
</mesh>

    )

}
function TestBox() {
  return (
    <Canvas></Canvas>
  )
}

export default TestBox
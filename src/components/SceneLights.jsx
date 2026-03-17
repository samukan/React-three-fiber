export function SceneLights({ warningOn }) {
  return (
    <>
      <ambientLight intensity={0.34} color="#7384a0" />

      <spotLight
        position={[5, 7, 5]}
        angle={0.45}
        penumbra={0.45}
        intensity={1.25}
        color="#d6e7ff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight position={[0, 2.6, 3.1]} intensity={1} color="#2fd6ff" distance={11} />
      <pointLight
        position={[2.2, 1.8, -0.4]}
        intensity={warningOn ? 1.3 : 0}
        color="#ffb347"
        distance={7}
      />
    </>
  )
}

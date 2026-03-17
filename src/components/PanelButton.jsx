import { useState } from 'react'

export function PanelButton({ position, color, active, onToggle }) {
  const [hovered, setHovered] = useState(false)

  const capHeight = active ? 0.1 : 0.18

  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.09, 32]} />
        <meshStandardMaterial color="#161d29" roughness={0.43} metalness={0.58} />
      </mesh>

      <mesh
        position={[0, capHeight, 0]}
        castShadow
        receiveShadow
        onClick={(event) => {
          event.stopPropagation()
          onToggle()
        }}
        onPointerOver={() => {
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = 'default'
        }}
      >
        <cylinderGeometry args={[0.24, 0.26, 0.16, 32]} />
        <meshStandardMaterial
          color={active ? color : '#2c3547'}
          emissive={active ? color : '#1a2434'}
          emissiveIntensity={active ? 0.82 : hovered ? 0.24 : 0.08}
          roughness={0.3}
          metalness={0.24}
        />
      </mesh>
    </group>
  )
}

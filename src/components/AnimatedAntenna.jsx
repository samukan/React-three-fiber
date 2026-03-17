import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function AnimatedAntenna({ isPowered, isScanning }) {
  const rootRef = useRef(null)
  const dishRef = useRef(null)
  const ringRef = useRef(null)
  const coreRef = useRef(null)

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime()

    if (rootRef.current) {
      rootRef.current.rotation.y += delta * (isPowered ? 0.65 : 0.14)
    }

    if (dishRef.current) {
      dishRef.current.rotation.x = -0.3 + Math.sin(time * (isScanning ? 2.2 : 1.1)) * 0.16
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (isScanning ? 1.4 : 0.35)
    }

    if (coreRef.current) {
      const pulse = isPowered
        ? 0.52 + Math.sin(time * (isScanning ? 4 : 2)) * 0.2
        : 0.08
      coreRef.current.material.emissiveIntensity = pulse
    }
  })

  return (
    <group ref={rootRef} position={[0, 0.55, -0.25]}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.45, 0.55, 0.2, 24]} />
        <meshStandardMaterial color="#1f2733" roughness={0.36} metalness={0.5} />
      </mesh>

      <mesh position={[0, 0.43, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#37465e" roughness={0.35} metalness={0.42} />
      </mesh>

      <group ref={dishRef} position={[0, 0.9, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <coneGeometry args={[0.45, 0.34, 24]} />
          <meshStandardMaterial color="#2c3748" roughness={0.28} metalness={0.46} />
        </mesh>
      </group>

      <mesh ref={ringRef} position={[0, 0.82, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.56, 0.03, 16, 48]} />
        <meshStandardMaterial
          color="#2fd6ff"
          emissive="#2fd6ff"
          emissiveIntensity={isScanning ? 0.62 : 0.16}
          roughness={0.24}
          metalness={0.32}
        />
      </mesh>

      <mesh ref={coreRef} position={[0, 0.58, 0]} castShadow>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color="#8cff66"
          emissive="#8cff66"
          emissiveIntensity={isPowered ? 0.5 : 0.08}
          roughness={0.26}
          metalness={0.2}
        />
      </mesh>
    </group>
  )
}

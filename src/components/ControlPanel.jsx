import { AnimatedAntenna } from './AnimatedAntenna'
import { PanelButton } from './PanelButton'

const buttonConfig = [
  { key: 'power', color: '#2fd6ff', position: [-1.25, 0.34, 1.05] },
  { key: 'scan', color: '#8cff66', position: [0, 0.34, 1.05] },
  { key: 'warning', color: '#ffb347', position: [1.25, 0.34, 1.05] },
]

export function ControlPanel({ controls, onToggle }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6, 0.5, 4]} />
        <meshStandardMaterial color="#1f2733" roughness={0.62} metalness={0.25} />
      </mesh>

      <mesh position={[0, 0.22, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.5, 0.2, 3.5]} />
        <meshStandardMaterial color="#283446" roughness={0.52} metalness={0.28} />
      </mesh>

      <mesh position={[0, 0.36, 0.55]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.14, 1.4]} />
        <meshStandardMaterial color="#2b394d" roughness={0.48} metalness={0.32} />
      </mesh>

      <AnimatedAntenna isPowered={controls.power} isScanning={controls.scan} />

      {buttonConfig.map((button) => (
        <PanelButton
          key={button.key}
          position={button.position}
          color={button.color}
          active={controls[button.key]}
          onToggle={() => onToggle(button.key)}
        />
      ))}

      <mesh position={[2.3, 0.42, -0.9]} castShadow>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial
          color={controls.warning ? '#ffb347' : '#3a3f4c'}
          emissive={controls.warning ? '#ffb347' : '#3a3f4c'}
          emissiveIntensity={controls.warning ? 1.05 : 0.05}
          roughness={0.3}
          metalness={0.35}
        />
      </mesh>
    </group>
  )
}

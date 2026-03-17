import { useState } from 'react'
import { ControlPanel } from './ControlPanel'
import { SceneLights } from './SceneLights'

const initialControls = {
  power: true,
  scan: true,
  warning: false,
}

export function ControlPanelScene() {
  const [controls, setControls] = useState(initialControls)

  const toggleControl = (key) => {
    setControls((current) => ({ ...current, [key]: !current[key] }))
  }

  return (
    <>
      <SceneLights warningOn={controls.warning} />

      <group position={[0, -0.45, 0]}>
        <ControlPanel controls={controls} onToggle={toggleControl} />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#0b121d" roughness={0.94} metalness={0.06} />
      </mesh>
    </>
  )
}

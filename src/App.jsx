import { Canvas } from '@react-three/fiber'
import './App.css'
import { ControlPanelScene } from './components/ControlPanelScene'

function App() {
  return (
    <div className="app">
      <header className="hud">
        <p className="eyebrow">React Three Fiber Lab</p>
        <h1>Sci-Fi Control Panel</h1>
        <p className="instructions">
          Click the panel buttons to toggle power, scanner, and warning modes.
        </p>
      </header>

      <main className="scene-shell" aria-label="Interactive sci-fi control panel">
        <Canvas shadows camera={{ position: [0, 3.2, 8], fov: 45 }} dpr={[1, 1.75]}>
          <color attach="background" args={['#09111b']} />
          <fog attach="fog" args={['#09111b', 7, 18]} />
          <ControlPanelScene />
        </Canvas>
      </main>

      <footer className="legend">
        <span className="legend-item">
          <span className="legend-dot power"></span> Power
        </span>
        <span className="legend-item">
          <span className="legend-dot scan"></span> Scanner
        </span>
        <span className="legend-item">
          <span className="legend-dot warning"></span> Warning
        </span>
      </footer>
    </div>
  )
}

export default App

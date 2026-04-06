import { OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

function DataNode({ position, color = '#8fb8ff', size = 0.18, pulse = 1 }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    ref.current.scale.setScalar(size + Math.sin(state.clock.elapsedTime * pulse + position[0]) * 0.03)
    ref.current.rotation.y = state.clock.elapsedTime * 0.45
  })

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.35} metalness={0.2} />
    </mesh>
  )
}

function ServerRack({ position }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.1
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[1.2, 2.2, 0.6]} />
        <meshStandardMaterial color="#0f1d2b" roughness={0.85} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.65, 0.32]}>
        <boxGeometry args={[0.95, 0.22, 0.05]} />
        <meshStandardMaterial color="#1d3550" emissive="#4f81c7" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.15, 0.32]}>
        <boxGeometry args={[0.95, 0.22, 0.05]} />
        <meshStandardMaterial color="#1d3550" emissive="#8fb8ff" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[0, -0.35, 0.32]}>
        <boxGeometry args={[0.95, 0.22, 0.05]} />
        <meshStandardMaterial color="#1d3550" emissive="#5ae0b3" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, -0.82, 0.32]}>
        <boxGeometry args={[0.95, 0.22, 0.05]} />
        <meshStandardMaterial color="#1d3550" emissive="#f0b87a" emissiveIntensity={0.12} />
      </mesh>
    </group>
  )
}

function DataStream() {
  const points = useMemo(
    () => [
      [-4.5, 1.2, -1.2],
      [-2.5, 0.6, -0.4],
      [-0.4, 0.2, 0.2],
      [1.5, -0.1, 0.8],
      [3.5, -0.5, 1.2],
    ],
    [],
  )

  return (
    <group>
      {points.map((point, index) => (
        <DataNode key={index} position={point} size={0.16 + index * 0.01} pulse={0.8 + index * 0.2} />
      ))}
    </group>
  )
}

function CircuitPlane() {
  const segments = useMemo(
    () => [
      [-2.6, -0.6, -0.2],
      [-1.1, -0.3, 0.1],
      [0.7, -0.1, 0.2],
      [2.2, 0.15, 0.45],
    ],
    [],
  )

  return (
    <group>
      {segments.map((segment, index) => (
        <mesh key={index} position={segment}>
          <boxGeometry args={[1.6, 0.04, 0.04]} />
          <meshStandardMaterial color="#274463" emissive="#8fb8ff" emissiveIntensity={0.12} />
        </mesh>
      ))}
    </group>
  )
}

function BackendStage({ theme }) {
  const isLight = theme === 'light'

  return (
    <>
      <fog attach="fog" args={[isLight ? '#dfe9fb' : '#06131f', 7, 20]} />
      <ambientLight intensity={isLight ? 0.9 : 0.55} color={isLight ? '#f5f8ff' : '#9bb7cb'} />
      <directionalLight position={[4, 7, 5]} intensity={isLight ? 1.35 : 1.2} color={isLight ? '#ffffff' : '#e6f0ff'} />
      <pointLight position={[-3, 1, 2]} intensity={isLight ? 1.0 : 1.3} color={isLight ? '#2c5fb8' : '#8fb8ff'} distance={14} />
      <pointLight position={[3.5, -1, 2]} intensity={isLight ? 0.75 : 0.9} color={isLight ? '#5aa97f' : '#5ae0b3'} distance={12} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]}>
        <planeGeometry args={[32, 32, 24, 24]} />
        <meshStandardMaterial color={isLight ? '#e7effc' : '#07131f'} roughness={1} metalness={0.05} wireframe={false} />
      </mesh>

      <gridHelper args={[30, 30, isLight ? '#c6d5ea' : '#13314d', isLight ? '#dce7f5' : '#0d2235']} position={[0, -1.64, 0]} />

      <group position={[-3.2, -0.45, -1.2]}>
        <ServerRack position={[0, 0, 0]} />
        <ServerRack position={[1.5, 0.1, -0.2]} />
      </group>

      <group position={[2.8, -0.25, -0.9]}>
        <mesh>
          <boxGeometry args={[2.1, 0.9, 1]} />
          <meshStandardMaterial color={isLight ? '#d7e4f4' : '#102235'} roughness={0.9} metalness={0.1} />
        </mesh>
        <mesh position={[-0.4, 0.2, 0.52]}>
          <boxGeometry args={[0.35, 0.2, 0.04]} />
          <meshStandardMaterial color="#8fb8ff" emissive="#8fb8ff" emissiveIntensity={0.35} />
        </mesh>
        <mesh position={[0.1, 0.2, 0.52]}>
          <boxGeometry args={[0.35, 0.2, 0.04]} />
          <meshStandardMaterial color="#5ae0b3" emissive="#5ae0b3" emissiveIntensity={0.28} />
        </mesh>
        <mesh position={[0.6, 0.2, 0.52]}>
          <boxGeometry args={[0.35, 0.2, 0.04]} />
          <meshStandardMaterial color="#f0b87a" emissive="#f0b87a" emissiveIntensity={0.22} />
        </mesh>
      </group>

      <group position={[0, 1.5, -3.5]}>
        <mesh>
          <sphereGeometry args={[0.58, 24, 24]} />
          <meshStandardMaterial color={isLight ? '#f5d18c' : '#ffdca3'} emissive={isLight ? '#f5d18c' : '#ffdca3'} emissiveIntensity={isLight ? 1.5 : 1.8} />
        </mesh>
        <pointLight intensity={isLight ? 1.2 : 1.6} color={isLight ? '#f5d18c' : '#ffdca3'} distance={10} />
      </group>

      <DataStream />
      <CircuitPlane />

      <Sparkles count={80} scale={[14, 6, 10]} size={1.5} speed={0.24} color={isLight ? '#2c5fb8' : '#8fb8ff'} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.18}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.7}
      />
    </>
  )
}

function NatureScene({ theme = 'dark' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.1, 7.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <BackendStage theme={theme} />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,184,255,0.12),transparent_35%),linear-gradient(180deg,rgba(3,13,24,0.06),rgba(3,13,24,0.7))]" />
    </div>
  )
}

export default NatureScene

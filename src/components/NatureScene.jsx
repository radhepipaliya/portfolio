import { OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

function DataNode({ position, color = '#8fb8ff', size = 0.18, pulse = 1, phase = 0 }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    const time = state.clock.elapsedTime
    ref.current.scale.setScalar(size + Math.sin(time * pulse + position[0] + phase) * 0.03)
    ref.current.position.y = position[1] + Math.sin(time * 0.7 + position[0] * 0.6 + phase) * 0.08
    ref.current.rotation.y = time * 0.45
    ref.current.rotation.x = Math.sin(time * 0.35 + position[2] + phase) * 0.2
  })

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.45} roughness={0.35} metalness={0.2} />
    </mesh>
  )
}

function NodeLines({ nodes, maxDist = 2.2, color }) {
  const pairs = useMemo(() => {
    const links = []

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const [ax, ay, az] = nodes[i].pos
        const [bx, by, bz] = nodes[j].pos
        const distance = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2)

        if (distance < maxDist) {
          links.push([nodes[i].pos, nodes[j].pos])
        }
      }
    }

    return links
  }, [maxDist, nodes])

  return (
    <>
      {pairs.map(([a, b], index) => (
        <line key={`node-line-${index}`}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[new Float32Array([...a, ...b]), 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={color} transparent opacity={0.18} />
        </line>
      ))}
    </>
  )
}

function CloudDrift({ children }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    const time = state.clock.elapsedTime
    ref.current.rotation.y = time * 0.06
    ref.current.rotation.x = Math.sin(time * 0.09) * 0.04
    ref.current.position.y = Math.sin(time * 0.22) * 0.12
  })

  return <group ref={ref}>{children}</group>
}

const NODE_DEFS = [
  { pos: [0, 0, 0], color: '#8fb8ff', size: 0.22, pulse: 1.0 },
  { pos: [0.9, 0.4, -0.3], color: '#5ae0b3', size: 0.18, pulse: 1.3 },
  { pos: [-0.8, 0.5, 0.4], color: '#8fb8ff', size: 0.2, pulse: 0.8 },
  { pos: [0.4, -0.6, 0.8], color: '#f0b87a', size: 0.16, pulse: 1.6 },
  { pos: [-0.5, -0.4, -0.7], color: '#5ae0b3', size: 0.14, pulse: 1.1 },
  { pos: [1.2, -0.3, 0.5], color: '#8fb8ff', size: 0.18, pulse: 0.9 },
  { pos: [2.2, 0.8, -0.5], color: '#8fb8ff', size: 0.17, pulse: 1.2 },
  { pos: [-2.1, 0.6, 0.2], color: '#5ae0b3', size: 0.2, pulse: 0.7 },
  { pos: [1.8, -1.0, 1.0], color: '#f0b87a', size: 0.15, pulse: 1.4 },
  { pos: [-1.7, -0.8, -0.8], color: '#8fb8ff', size: 0.19, pulse: 1.1 },
  { pos: [0.3, 1.8, 0.6], color: '#5ae0b3', size: 0.16, pulse: 0.85 },
  { pos: [-0.4, -1.9, -0.4], color: '#f0b87a', size: 0.14, pulse: 1.5 },
  { pos: [2.0, 1.2, 1.0], color: '#8fb8ff', size: 0.18, pulse: 1.0 },
  { pos: [-1.9, 1.4, -0.6], color: '#5ae0b3', size: 0.15, pulse: 1.3 },
  { pos: [3.2, 0.2, -0.8], color: '#8fb8ff', size: 0.13, pulse: 1.6 },
  { pos: [-3.0, -0.5, 0.5], color: '#f0b87a', size: 0.12, pulse: 0.9 },
  { pos: [2.5, -1.8, 0.3], color: '#5ae0b3', size: 0.14, pulse: 1.2 },
  { pos: [-2.4, 1.9, 0.8], color: '#8fb8ff', size: 0.11, pulse: 1.7 },
  { pos: [0.8, 2.6, -0.5], color: '#f0b87a', size: 0.13, pulse: 1.0 },
  { pos: [-0.6, -2.5, 0.7], color: '#5ae0b3', size: 0.12, pulse: 1.4 },
  { pos: [3.5, 1.5, 0.2], color: '#8fb8ff', size: 0.1, pulse: 1.8 },
  { pos: [-3.2, -1.6, -0.3], color: '#f0b87a', size: 0.11, pulse: 0.75 },
  { pos: [1.5, 2.8, 0.9], color: '#5ae0b3', size: 0.1, pulse: 1.3 },
  { pos: [-1.2, -2.7, -0.6], color: '#8fb8ff', size: 0.12, pulse: 1.1 },
]

  function PulseBeacon({ position, isLight }) {
    const orbRef = useRef()
    const glowRef = useRef()

    useFrame((state) => {
      const time = state.clock.elapsedTime
      const pulse = 1 + Math.sin(time * 2.4) * 0.18

      if (orbRef.current) {
        orbRef.current.scale.setScalar(pulse)
        orbRef.current.material.emissiveIntensity = (isLight ? 0.4 : 0.65) + Math.sin(time * 2.4) * 0.15
      }

      if (glowRef.current) {
        glowRef.current.intensity = (isLight ? 0.5 : 0.8) + Math.sin(time * 2.4) * 0.25
      }
    })

  return (
    <group position={position}>
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.22, 18, 18]} />
        <meshStandardMaterial
          color={isLight ? '#2c5fb8' : '#8fb8ff'}
          emissive={isLight ? '#2c5fb8' : '#8fb8ff'}
          emissiveIntensity={isLight ? 0.4 : 0.65}
          roughness={0.3}
          metalness={0.35}
        />
      </mesh>
      <pointLight ref={glowRef} color={isLight ? '#2c5fb8' : '#8fb8ff'} distance={7} intensity={isLight ? 0.5 : 0.8} />
    </group>
  )
}

function SceneDrift({ children }) {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    const time = state.clock.elapsedTime
    ref.current.rotation.y = Math.sin(time * 0.12) * 0.05
    ref.current.rotation.x = Math.sin(time * 0.09) * 0.02
    ref.current.position.y = Math.sin(time * 0.22) * 0.08
  })

  return <group ref={ref}>{children}</group>
}

function ServerRack({ position }) {
  const ref = useRef()
  const ledRefs = useRef([])
  const ledLayout = [
    { position: [-0.42, 0.66, 0.35], color: '#5ae0b3' },
    { position: [-0.28, 0.66, 0.35], color: '#8fb8ff' },
    { position: [-0.14, 0.66, 0.35], color: '#f0b87a' },
    { position: [0, 0.66, 0.35], color: '#5ae0b3' },
    { position: [0.14, 0.66, 0.35], color: '#8fb8ff' },
    { position: [0.28, 0.66, 0.35], color: '#f0b87a' },
    { position: [0.42, 0.66, 0.35], color: '#5ae0b3' },
    { position: [-0.42, 0.18, 0.35], color: '#8fb8ff' },
    { position: [-0.28, 0.18, 0.35], color: '#5ae0b3' },
    { position: [-0.14, 0.18, 0.35], color: '#8fb8ff' },
    { position: [0, 0.18, 0.35], color: '#f0b87a' },
    { position: [0.14, 0.18, 0.35], color: '#5ae0b3' },
    { position: [0.28, 0.18, 0.35], color: '#8fb8ff' },
    { position: [0.42, 0.18, 0.35], color: '#5ae0b3' },
    { position: [-0.35, -0.33, 0.35], color: '#8fb8ff' },
    { position: [-0.2, -0.33, 0.35], color: '#f0b87a' },
    { position: [-0.05, -0.33, 0.35], color: '#5ae0b3' },
    { position: [0.1, -0.33, 0.35], color: '#8fb8ff' },
    { position: [0.25, -0.33, 0.35], color: '#5ae0b3' },
    { position: [0.4, -0.33, 0.35], color: '#f0b87a' },
  ]

  useFrame((state) => {
    if (!ref.current) {
      return
    }

    const time = state.clock.elapsedTime
    ref.current.rotation.y = Math.sin(time * 0.2 + position[0]) * 0.1

    ledRefs.current.forEach((material, index) => {
      if (!material) {
        return
      }

      const wave = (Math.sin(time * 6 + index * 1.37 + position[0] * 0.8) + 1) / 2
      const spike = Math.sin(time * 22 + index * 2.9) > 0.76 ? 0.55 : 0
      material.emissiveIntensity = 0.08 + wave * 0.35 + spike
    })
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

      {ledLayout.map((led, index) => (
        <mesh key={`led-${index}`} position={led.position}>
          <boxGeometry args={[0.08, 0.05, 0.03]} />
          <meshStandardMaterial
            ref={(element) => {
              ledRefs.current[index] = element
            }}
            color={led.color}
            emissive={led.color}
            emissiveIntensity={0.22}
            roughness={0.25}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function TechnicianFixingServer({ position = [0, 0, 0], isLight, action = 'repair' }) {
  const techRef = useRef()
  const rightArmRef = useRef()
  const toolGlowRef = useRef()
  const isInspecting = action === 'inspect'

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (techRef.current) {
      techRef.current.position.y = position[1] + Math.sin(time * 1.35) * 0.015
    }

    if (rightArmRef.current) {
      if (isInspecting) {
        rightArmRef.current.rotation.x = -0.55 + Math.sin(time * 2.6) * 0.16
        rightArmRef.current.rotation.z = -0.42 + Math.sin(time * 1.7) * 0.12
      } else {
        rightArmRef.current.rotation.x = -0.9 + Math.sin(time * 3.8) * 0.28
        rightArmRef.current.rotation.z = -0.22 + Math.sin(time * 2.6) * 0.08
      }
    }

    if (toolGlowRef.current) {
      if (isInspecting) {
        toolGlowRef.current.intensity = (isLight ? 0.42 : 0.6) + Math.sin(time * 5.2) * 0.14
      } else {
        toolGlowRef.current.intensity = (isLight ? 0.45 : 0.72) + Math.sin(time * 8.5) * 0.2
      }
    }
  })

  return (
    <group ref={techRef} position={position} rotation={[0, isInspecting ? 1.2 : 0.95, 0]}>
      <mesh position={[0, 0.92, 0]}>
        <capsuleGeometry args={[0.14, 0.45, 8, 16]} />
        <meshStandardMaterial color={isLight ? '#546f92' : '#263a55'} roughness={0.72} metalness={0.14} />
      </mesh>

      <mesh position={[0, 1.33, 0.04]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color={isLight ? '#d7b89c' : '#c79f86'} roughness={0.6} metalness={0.04} />
      </mesh>

      <mesh position={[-0.17, 0.92, 0.02]} rotation={[0.15, 0, 0.25]}>
        <capsuleGeometry args={[0.05, 0.36, 6, 12]} />
        <meshStandardMaterial color={isLight ? '#d7b89c' : '#c79f86'} roughness={0.65} metalness={0.04} />
      </mesh>

      <group ref={rightArmRef} position={[0.16, 1.03, 0.06]}>
        <mesh position={[0, -0.18, 0.06]} rotation={[0.1, 0.12, -0.22]}>
          <capsuleGeometry args={[0.05, 0.38, 6, 12]} />
          <meshStandardMaterial color={isLight ? '#d7b89c' : '#c79f86'} roughness={0.65} metalness={0.04} />
        </mesh>

        {isInspecting ? (
          <mesh position={[0.02, -0.42, 0.16]} rotation={[0.55, 0.22, -0.08]}>
            <boxGeometry args={[0.16, 0.1, 0.02]} />
            <meshStandardMaterial
              color={isLight ? '#91b5db' : '#678cb3'}
              emissive={isLight ? '#6e9ac9' : '#5d86b2'}
              emissiveIntensity={0.24}
              roughness={0.38}
              metalness={0.48}
            />
          </mesh>
        ) : (
          <mesh position={[0.03, -0.41, 0.18]} rotation={[0.25, 0.3, 0]}>
            <boxGeometry args={[0.14, 0.05, 0.05]} />
            <meshStandardMaterial color={isLight ? '#9db8d6' : '#6f8fb3'} roughness={0.4} metalness={0.55} />
          </mesh>
        )}
      </group>

      <pointLight
        ref={toolGlowRef}
        position={[0.3, 0.62, 0.36]}
        color={isInspecting ? (isLight ? '#78a8d8' : '#7bb4ed') : isLight ? '#86bfff' : '#69adff'}
        intensity={isInspecting ? (isLight ? 0.42 : 0.6) : isLight ? 0.45 : 0.72}
        distance={2.4}
      />

      <mesh position={[-0.08, 0.43, 0]} rotation={[0, 0, 0.08]}>
        <capsuleGeometry args={[0.065, 0.44, 6, 12]} />
        <meshStandardMaterial color={isLight ? '#2f405a' : '#1b2738'} roughness={0.75} metalness={0.16} />
      </mesh>
      <mesh position={[0.09, 0.43, 0]} rotation={[0, 0, -0.08]}>
        <capsuleGeometry args={[0.065, 0.44, 6, 12]} />
        <meshStandardMaterial color={isLight ? '#2f405a' : '#1b2738'} roughness={0.75} metalness={0.16} />
      </mesh>
    </group>
  )
}

function BackendStage({ theme }) {
  const isLight = theme === 'light'
  const nodeLineColor = isLight ? '#86a7de' : '#8fb8ff'

  return (
    <>
      <fog attach="fog" args={[isLight ? '#dbe8fb' : '#06131f', 7, 20]} />
      <ambientLight intensity={isLight ? 0.95 : 0.56} color={isLight ? '#f5f8ff' : '#9bb7cb'} />
      <directionalLight position={[4, 7, 5]} intensity={isLight ? 1.4 : 1.25} color={isLight ? '#ffffff' : '#e6f0ff'} />
      <pointLight position={[-3, 1, 2]} intensity={isLight ? 1.05 : 1.35} color={isLight ? '#2c5fb8' : '#8fb8ff'} distance={14} />
      <pointLight position={[3.5, -1, 2]} intensity={isLight ? 0.78 : 0.95} color={isLight ? '#5aa97f' : '#5ae0b3'} distance={12} />

      <SceneDrift>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]}>
          <planeGeometry args={[32, 32, 24, 24]} />
          <meshStandardMaterial color={isLight ? '#e7effc' : '#07131f'} roughness={1} metalness={0.05} wireframe={false} />
        </mesh>

        <gridHelper args={[30, 30, isLight ? '#c6d5ea' : '#13314d', isLight ? '#dce7f5' : '#0d2235']} position={[0, -1.64, 0]} />

        <group position={[-3.2, -0.45, -1.2]}>
          <ServerRack position={[0, 0, 0]} />
          <ServerRack position={[1.5, 0.1, -0.2]} />
          <TechnicianFixingServer position={[-0.82, -1.05, 0.52]} isLight={isLight} />
          <TechnicianFixingServer position={[1.5, -1.02, 0.78]} isLight={isLight} action="inspect" />
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
          {/* <PulseBeacon position={[1.2, 0.05, 0.4]} isLight={isLight} /> */}
        </group>

        <group position={[0.2, 0.95, 0.6]}>
          <CloudDrift>
            <NodeLines nodes={NODE_DEFS} maxDist={2.2} color={nodeLineColor} />
            {NODE_DEFS.map((node, index) => (
              <DataNode
                key={`node-${index}`}
                position={node.pos}
                color={node.color}
                size={node.size}
                pulse={node.pulse}
                phase={index * 0.61803}
              />
            ))}
          </CloudDrift>
        </group>

        <group position={[0, 1.5, -3.5]}>
          <mesh>
            <sphereGeometry args={[0.58, 24, 24]} />
            <meshStandardMaterial color={isLight ? '#f5d18c' : '#ffdca3'} emissive={isLight ? '#f5d18c' : '#ffdca3'} emissiveIntensity={isLight ? 1.5 : 1.8} />
          </mesh>
          <pointLight intensity={isLight ? 1.2 : 1.6} color={isLight ? '#f5d18c' : '#ffdca3'} distance={10} />
        </group>
      </SceneDrift>

      <Sparkles count={120} scale={[15, 9, 11]} size={1.6} speed={0.28} color={isLight ? '#2c5fb8' : '#8fb8ff'} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.7}
      />
    </>
  )
}

function NatureScene({ theme = 'dark' }) {
  const isLight = theme === 'light'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <Canvas
        className="pointer-events-auto"
        camera={{ position: [0, 1.1, 7.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <BackendStage theme={theme} />
      </Canvas>

      <div
        className={`absolute inset-0 ${
          isLight
            ? 'bg-[radial-gradient(circle_at_top,rgba(44,95,184,0.14),transparent_38%),linear-gradient(180deg,rgba(248,252,255,0.04),rgba(214,227,248,0.62))]'
            : 'bg-[radial-gradient(circle_at_top,rgba(143,184,255,0.14),transparent_38%),linear-gradient(180deg,rgba(3,13,24,0.06),rgba(3,13,24,0.72))]'
        }`}
      />
    </div>
  )
}

export default NatureScene

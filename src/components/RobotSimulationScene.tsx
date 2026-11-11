import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group, Mesh, MeshStandardMaterial } from "three";

const clamp = (value: number, low = 0, high = 1) => Math.min(high, Math.max(low, value));
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function SteelBlock({ size, position, color = "#899496", metalness = 0.65, roughness = 0.38, radius = 0.015 }: {
  size: [number, number, number]; position: [number, number, number]; color?: string; metalness?: number; roughness?: number; radius?: number;
}) {
  return <RoundedBox args={size} radius={radius} smoothness={3} position={position} castShadow receiveShadow>
    <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
  </RoundedBox>;
}

function Joint({ radius = 0.16, depth = 0.25 }: { radius?: number; depth?: number }) {
  return <group>
    <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius * 0.96, depth, 48]} />
      <meshStandardMaterial color="#303a3d" metalness={0.72} roughness={0.31} />
    </mesh>
    {[-1, 1].map((side) => <group key={side} position={[0, 0, side * depth / 2]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[radius * 0.9, radius * 0.94, 0.027, 48]} />
        <meshStandardMaterial color="#c0c7c5" metalness={0.9} roughness={0.22} />
      </mesh>
      <mesh position={[0, 0, side * 0.018]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius * 0.56, radius * 0.58, 0.02, 40]} />
        <meshStandardMaterial color="#596466" metalness={0.78} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, side * 0.032]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius * 0.27, radius * 0.27, 0.012, 32]} />
        <meshStandardMaterial color="#9da7a7" metalness={0.92} roughness={0.19} />
      </mesh>
    </group>)}
  </group>;
}

function Arm({ progress }: { progress: number }) {
  const root = useRef<Group>(null);
  const yaw = useRef<Group>(null);
  const shoulder = useRef<Group>(null);
  const elbow = useRef<Group>(null);
  const wrist = useRef<Group>(null);
  const tool = useRef<Group>(null);
  const heldBox = useRef<Group>(null);
  const sourceBox = useRef<Group>(null);
  const placedBox = useRef<Group>(null);
  const extraBox = useRef<Group>(null);
  const upperLength = 0.94;
  const lowerLength = 0.86;

  useFrame(() => {
    if (!root.current || !yaw.current || !shoulder.current || !elbow.current || !wrist.current || !tool.current) return;
    const site = smooth((progress - 0.02) / 0.32);
    root.current.position.set(0, mix(0.085, 1.085, site), mix(0, 0.2, site));
    const activity = smooth((progress - 0.08) / 0.16);
    const cycle = clamp((progress - 0.14) / 0.81);
    const keyframes: [number, number, number][] = [
      [-1.14, 1.62, -0.32], [-1.14, 1.62, -0.32], [-1.14, 1.36, -0.32], [-1.14, 1.36, -0.32],
      [0, 1.84, -0.4], [1.11, 1.64, -0.29], [1.11, 1.36, -0.29], [1.11, 1.36, -0.29], [0, 1.94, -0.45],
    ];
    const stops = [0, 0.09, 0.2, 0.29, 0.47, 0.62, 0.72, 0.81, 1];
    let segment = 0;
    while (segment < stops.length - 2 && cycle > stops[segment + 1]) segment += 1;
    const t = smooth((cycle - stops[segment]) / (stops[segment + 1] - stops[segment]));
    const target = keyframes[segment].map((value, axis) => mix(value, keyframes[segment + 1][axis], t)) as [number, number, number];
    const bx = Math.hypot(target[0], target[2] - root.current.position.z);
    const by = target[1] - root.current.position.y - 0.4;
    const reach = Math.max(0.12, Math.hypot(bx, by));
    const distance = Math.min(reach, upperLength + lowerLength - 0.006);
    const elbowAngle = Math.acos(clamp((distance * distance - upperLength * upperLength - lowerLength * lowerLength) / (2 * upperLength * lowerLength), -1, 1));
    const shoulderAngle = Math.atan2(bx, by) - Math.atan2(lowerLength * Math.sin(elbowAngle), upperLength + lowerLength * Math.cos(elbowAngle));
    const targetYaw = Math.atan2(-(target[2] - root.current.position.z), target[0]);
    yaw.current.rotation.y = mix(0, targetYaw, activity);
    if (sourceBox.current) sourceBox.current.rotation.y = Math.atan2(-(-0.32 - root.current.position.z), -1.14);
    if (placedBox.current) placedBox.current.rotation.y = Math.atan2(-(-0.29 - root.current.position.z), 1.11);
    shoulder.current.rotation.z = mix(0.4, -shoulderAngle, activity);
    elbow.current.rotation.z = mix(-1.89, -elbowAngle, activity);
    wrist.current.rotation.z = shoulderAngle + elbowAngle;
    tool.current.rotation.z = 0;

    const holding = cycle > 0.29 && cycle < 0.77 && activity > 0.99;
    const released = cycle >= 0.77 && activity > 0.99;
    if (sourceBox.current) sourceBox.current.visible = site > 0.9 && !holding && !released;
    if (heldBox.current) heldBox.current.visible = holding;
    if (placedBox.current) placedBox.current.visible = site > 0.9 && released;
    if (extraBox.current) extraBox.current.visible = site > 0.9;
  });

  return <group ref={root} position={[0, 0.085, 0]}>
    <SteelBlock size={[0.61, 0.055, 0.55]} position={[0, 0.025, 0]} color="#596568" metalness={0.82} />
    <mesh position={[0, 0.11, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[0.2, 0.245, 0.16, 48]} />
      <meshStandardMaterial color="#303a3d" metalness={0.72} roughness={0.31} />
    </mesh>
    <mesh position={[0, 0.19, 0]} castShadow>
      <cylinderGeometry args={[0.203, 0.203, 0.03, 48]} />
      <meshStandardMaterial color="#c0c7c5" metalness={0.9} roughness={0.22} />
    </mesh>
    <group ref={yaw}>
      <group ref={shoulder} position={[0, 0.4, 0]}>
        <RoundedBox args={[0.31, 0.27, 0.29]} radius={0.055} smoothness={4} position={[0, 0.05, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#e6e8e4" metalness={0.46} roughness={0.3} />
        </RoundedBox>
        <mesh position={[0, 0, -0.152]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.062, 0.062, 0.026, 24]} />
          <meshStandardMaterial color="#252f32" metalness={0.55} roughness={0.45} />
        </mesh>
        <Joint radius={0.2} depth={0.31} />
        <RoundedBox args={[0.28, upperLength, 0.22]} radius={0.045} smoothness={4} position={[0, upperLength / 2, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#e1e4e0" metalness={0.4} roughness={0.32} />
        </RoundedBox>
        <SteelBlock size={[0.018, upperLength * 0.75, 0.012]} position={[-0.075, upperLength * 0.52, 0.117]} color="#9da8a8" metalness={0.85} radius={0.005} />
        <mesh position={[-0.112, upperLength * 0.5, 0.108]}>
          <tubeGeometry args={[new THREE.CatmullRomCurve3([new THREE.Vector3(-0.02, 0, 0), new THREE.Vector3(-0.06, upperLength * 0.32, 0), new THREE.Vector3(-0.055, upperLength * 0.69, 0)]), 20, 0.022, 8, false]} />
          <meshStandardMaterial color="#354145" metalness={0.35} roughness={0.54} />
        </mesh>
        <group ref={elbow} position={[0, upperLength, 0]}>
          <Joint radius={0.145} depth={0.24} />
          <RoundedBox args={[0.22, lowerLength, 0.17]} radius={0.035} smoothness={4} position={[0, lowerLength / 2, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#d7dcda" metalness={0.48} roughness={0.29} />
          </RoundedBox>
          <SteelBlock size={[0.015, lowerLength * 0.72, 0.012]} position={[0.065, lowerLength * 0.51, 0.092]} color="#9da8a8" radius={0.004} />
          <group ref={wrist} position={[0, lowerLength, 0]}>
            <Joint radius={0.105} depth={0.21} />
            <group ref={tool} position={[0, 0.105, 0]}>
              <RoundedBox args={[0.23, 0.12, 0.18]} radius={0.018} smoothness={3} position={[0, -0.03, 0]} castShadow>
                <meshStandardMaterial color="#303d40" metalness={0.5} roughness={0.43} />
              </RoundedBox>
              <mesh position={[0, -0.115, 0]}>
                <cylinderGeometry args={[0.04, 0.04, 0.05, 32]} />
                <meshStandardMaterial color="#162a30" metalness={0.86} roughness={0.2} />
              </mesh>
              <SteelBlock size={[0.23, 0.025, 0.14]} position={[0, -0.13, 0]} color="#818d8e" metalness={0.82} radius={0.008} />
              {[-1, 1].map((side) => <group key={side} position={[side * 0.118, -0.17, 0]}>
                <SteelBlock size={[0.035, 0.17, 0.03]} position={[0, -0.085, 0]} color="#bcc4c2" metalness={0.8} radius={0.006} />
                <SteelBlock size={[0.055, 0.025, 0.04]} position={[0, -0.17, 0]} color="#5c696a" metalness={0.7} radius={0.005} />
              </group>)}
              <group ref={heldBox} position={[0, -0.255, 0]} visible={false}><PackageBox /></group>
            </group>
          </group>
        </group>
      </group>
    </group>
    <group ref={sourceBox} position={[-1.14, 0.14, -0.52]} visible={false}>
      <PackageBox />
    </group>
    <group ref={placedBox} position={[1.11, 0.14, -0.49]} visible={false}>
      <PackageBox />
    </group>
    <group ref={extraBox} visible={false}><PackageBox position={[-1.34, 0.16, -0.54]} color="#c9a980" scale={0.8} /></group>
  </group>;
}

function PackageBox({ position = [0, 0, 0], color = "#b98e63", scale = 1 }: { position?: [number, number, number]; color?: string; scale?: number }) {
  return <group position={position} scale={scale}>
    <RoundedBox args={[0.2, 0.22, 0.25]} radius={0.008} smoothness={1} castShadow receiveShadow>
      <meshStandardMaterial color={color} roughness={0.9} />
    </RoundedBox>
    <SteelBlock size={[0.028, 0.224, 0.253]} position={[0, 0.001, 0]} color="#d0b18b" metalness={0.01} roughness={0.95} radius={0.002} />
    <SteelBlock size={[0.12, 0.06, 0.003]} position={[0.02, -0.025, 0.127]} color="#e7e4d9" metalness={0} roughness={0.96} radius={0.001} />
  </group>;
}

function Workbench() {
  return <group>
    <SteelBlock size={[3.88, 0.1, 2.16]} position={[0, 1.018, 0]} color="#c6ccca" metalness={0.72} roughness={0.36} radius={0.028} />
    <SteelBlock size={[3.82, 0.045, 2.1]} position={[0, 0.954, 0]} color="#687475" metalness={0.18} roughness={0.42} />
    {[-1.72, 1.72].flatMap((x) => [-0.86, 0.86].map((z) => <group key={`${x}-${z}`}>
      <SteelBlock size={[0.095, 0.9, 0.095]} position={[x, 0.49, z]} color="#778386" metalness={0.6} radius={0.008} />
      <mesh position={[x, 0.053, z]} castShadow><cylinderGeometry args={[0.073, 0.085, 0.065, 24]} /><meshStandardMaterial color="#323d3e" metalness={0.25} roughness={0.7} /></mesh>
      <SteelBlock size={[0.17, 0.07, 0.17]} position={[x, 0.892, z]} color="#a4aeae" radius={0.008} />
    </group>))}
    <SteelBlock size={[3.55, 0.065, 0.055]} position={[0, 0.29, 0.86]} color="#7f8b8b" />
    <SteelBlock size={[3.55, 0.065, 0.055]} position={[0, 0.29, -0.86]} color="#7f8b8b" />
    <SteelBlock size={[3.47, 0.03, 1.69]} position={[0, 0.33, 0]} color="#b9c0ba" metalness={0.3} roughness={0.73} />
    <SteelBlock size={[0.86, 0.52, 0.49]} position={[0.22, 0.63, 0.6]} color="#899694" metalness={0.25} radius={0.02} />
    <SteelBlock size={[0.76, 0.44, 0.015]} position={[0.22, 0.63, 0.854]} color="#aab5af" metalness={0.15} radius={0.01} />
  </group>;
}

function StorageRack({ position }: { position: [number, number, number] }) {
  return <group position={position}>
    {[-1.75, 0, 1.75].flatMap((x) => [-0.34, 0.34].map((z) => <group key={`${x}-${z}`}>
      <SteelBlock size={[0.085, 2.96, 0.08]} position={[x, 1.48, z]} color="#667477" metalness={0.5} roughness={0.54} radius={0.009} />
      <SteelBlock size={[0.17, 0.026, 0.17]} position={[x, 0.03, z]} color="#899595" metalness={0.55} />
    </group>))}
    {[0.25, 1.05, 1.92, 2.72].map((y) => <group key={y}>
      <SteelBlock size={[3.56, 0.1, 0.055]} position={[0, y, 0.35]} color="#bd7543" metalness={0.28} roughness={0.55} />
      <SteelBlock size={[3.56, 0.1, 0.055]} position={[0, y, -0.35]} color="#bd7543" metalness={0.28} roughness={0.55} />
      <SteelBlock size={[3.6, 0.055, 0.76]} position={[0, y - 0.065, 0]} color="#8e9996" metalness={0.3} roughness={0.62} />
    </group>)}
    {[-1.1, 0, 1.1].map((x) => <group key={x}>
      <SteelBlock size={[0.56, 0.38, 0.52]} position={[x, 0.58, 0]} color="#a38d72" metalness={0.02} roughness={0.92} radius={0.012} />
      <SteelBlock size={[0.58, 0.39, 0.53]} position={[x, 1.4, 0]} color="#8f7963" metalness={0.02} roughness={0.93} radius={0.012} />
      <SteelBlock size={[0.58, 0.37, 0.54]} position={[x, 2.35, 0]} color="#a69479" metalness={0.02} roughness={0.93} radius={0.012} />
    </group>)}
  </group>;
}

function Room({ progress }: { progress: number }) {
  const racks = useRef<Group>(null);
  const bench = useRef<Group>(null);
  useFrame(() => {
    const site = smooth((progress - 0.02) / 0.32);
    for (const group of [racks.current, bench.current]) if (group) {
      group.visible = site > 0.002;
      group.traverse((node) => {
        const mesh = node as Mesh;
        if (!mesh.isMesh) return;
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => {
          const mat = material as MeshStandardMaterial;
          mat.transparent = site < 0.999;
          mat.opacity = site;
          mat.depthWrite = site > 0.5;
        });
      });
    }
  });
  return <>
    <group ref={racks} visible={false}><StorageRack position={[0, 0, -2.35]} /><StorageRack position={[-4.4, 0, -0.5]} /><StorageRack position={[4.4, 0, -0.5]} /></group>
    <group ref={bench} visible={false}><Workbench />
      <group position={[-1.13, 1.07, -0.36]}><SteelBlock size={[0.84, 0.035, 0.7]} position={[0, 0.023, 0]} color="#a5afa9" metalness={0.04} roughness={0.72} /></group>
      <group position={[1.1, 1.07, -0.32]}><SteelBlock size={[0.84, 0.035, 0.7]} position={[0, 0.023, 0]} color="#606e70" metalness={0.04} roughness={0.72} /></group>
    </group>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.015, 0]} receiveShadow>
      <planeGeometry args={[80, 80]} /><meshStandardMaterial color="#d9d6ce" roughness={0.94} metalness={0.03} />
    </mesh>
    {[-1.57, 1.61].map((z) => <SteelBlock key={z} size={[5.3, 0.006, 0.025]} position={[0, 0.009, z]} color="#c19d69" metalness={0} roughness={0.95} />)}
  </>;
}

function MotionPath({ progress }: { progress: number }) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.14, 1.37, -0.32), new THREE.Vector3(-1, 1.88, -0.42), new THREE.Vector3(0, 2.14, -0.43), new THREE.Vector3(1, 1.85, -0.3), new THREE.Vector3(1.11, 1.35, -0.29),
  ]), []);
  const dot = useRef<Mesh>(null);
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 80, 0.006, 6, false), [curve]);
  useFrame(() => {
    const t = clamp((progress - 0.14) / 0.81);
    if (dot.current) dot.current.position.copy(curve.getPointAt(t));
  });
  const active = progress > 0.1 && progress < 0.99;
  return <group visible={active}>
    {[0, 1, 2].map((i) => <mesh key={i} geometry={geometry} position={[0, 0.05 * i, 0.08 * i]}>
      <meshBasicMaterial color={i === 0 ? "#d88648" : "#7e9990"} transparent opacity={i === 0 ? 0.52 : 0.2} depthWrite={false} />
    </mesh>)}
    <mesh ref={dot}><sphereGeometry args={[0.024, 16, 10]} /><meshBasicMaterial color="#d57034" /></mesh>
  </group>;
}

function CameraRig({ progress }: { progress: number }) {
  const { camera, size } = useThree();
  useFrame(() => {
    const site = smooth((progress - 0.02) / 0.32);
    const aspect = size.width / Math.max(1, size.height);
    const narrow = aspect < 0.9;
    const focusX = narrow ? 0 : mix(0.08, 0, site);
    const position = narrow
      ? new THREE.Vector3(4.5, 3.6, 6.2)
      : new THREE.Vector3(mix(3.4, 4.8, site), mix(3.1, 4, site), mix(4.6, 5.8, site));
    camera.position.copy(position);
    camera.lookAt(focusX, mix(1.32, 1.4, site), -0.4 * site);
  });
  return null;
}

function CellScene({ progress }: { progress: number }) {
  const scene = useRef<THREE.Scene>(null);
  useFrame(() => {
    if (scene.current) {
      const bg = new THREE.Color("#ebe9e3");
      scene.current.background = bg;
      scene.current.fog = new THREE.Fog("#ebe9e3", 15, 34);
    }
  });
  return <>
    <color attach="background" args={["#ebe9e3"]} />
    <fog attach="fog" args={["#ebe9e3", 15, 34]} />
    <ambientLight intensity={0.45} />
    <hemisphereLight args={["#f8fbff", "#aaa093", 1.1]} />
    <directionalLight position={[-4, 8, 5]} color="#fff5e7" intensity={3.1} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-left={-5} shadow-camera-right={5} shadow-camera-top={5} shadow-camera-bottom={-5} shadow-normalBias={0.022} shadow-bias={-0.00015} />
    <directionalLight position={[5, 4, -4]} color="#e6f0f2" intensity={1.8} />
    <Environment resolution={64} frames={1}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, 0]}><planeGeometry args={[7, 7]} /><meshBasicMaterial color="#fff7ec" /></mesh>
    </Environment>
    <CameraRig progress={progress} />
    <Room progress={progress} />
    <Arm progress={progress} />
    <MotionPath progress={progress} />
    <ContactShadows position={[0, -0.008, 0]} opacity={0.28} scale={11} blur={2.5} far={5} resolution={256} />
  </>;
}

export default function RobotSimulationScene({ progress }: { progress: number }) {
  return <Canvas shadows dpr={[1, 1.45]} frameloop="always" camera={{ position: [3.6, 2.6, 4.8], fov: 33, near: 0.05, far: 80 }} gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }} onCreated={({ gl }) => { gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.03; gl.shadowMap.type = THREE.PCFSoftShadowMap; }}>
    <CellScene progress={progress} />
  </Canvas>;
}

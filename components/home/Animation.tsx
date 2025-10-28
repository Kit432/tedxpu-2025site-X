// src/components/BrainScene.tsx
"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

/**
 * BrainScene: Renders a point cloud approximating a brain and lights neurons near the mouse.
 *
 * Approach:
 * - Sample points inside a union of two overlapping ellipsoids (left + right hemisphere).
 * - Precompute k-nearest neighbors (for lines).
 * - Use BufferAttributes for position and color; update color/intensity per frame based on distance to pointer (projected into world).
 * - Draw lines for neighbor connections (thin) where close enough.
 * - Add Bloom postprocessing to make glows pop.
 *
 * TUNING:
 * - NUM_POINTS controls density (reduce for mobile).
 * - CONNECTION_MAX controls which neighbors draw lines.
 */

function generateBrainPoints(numPoints = 1200, width = 3.6, height = 2.4, depth = 1.6) {
//   // Generate points inside union of two ellipsoids (left and right hemispheres)
//   const points: number[] = [];

//   const leftCenter = new THREE.Vector3(-width * 0.28, 0, 0);
//   const rightCenter = new THREE.Vector3(width * 0.28, 0, 0);
//   const rx = width * 0.55;
//   const ry = height * 0.9;
//   const rz = depth * 1.0;

//   let attempts = 0;
//   while (points.length / 3 < numPoints && attempts < numPoints * 30) {
//     attempts++;
//     // sample within bounding box
//     const x = (Math.random() - 0.5) * (width + 0.8);
//     const y = (Math.random() - 0.5) * (height + 0.8);
//     const z = (Math.random() - 0.5) * (depth + 0.8);

//     // test inside left ellipse
//     const lx = (x - leftCenter.x) / (rx * 0.6);
//     const ly = (y - leftCenter.y) / (ry * 0.6);
//     const lz = (z - leftCenter.z) / (rz * 0.9);
//     const inLeft = lx * lx + ly * ly + lz * lz <= 1;

//     const rxp = (x - rightCenter.x) / (rx * 0.6);
//     const ryp = (y - rightCenter.y) / (ry * 0.6);
//     const rzp = (z - rightCenter.z) / (rz * 0.9);
//     const inRight = rxp * rxp + ryp * ryp + rzp * rzp <= 1;

//     if (inLeft || inRight) {
//       // push with some y/z jitter to give organic look
//       points.push(x, y + (Math.random() - 0.5) * 0.02, z);
//     }
//   }

//   return new Float32Array(points);
// }

// function computeNeighbors(positions: Float32Array, k = 4) {
//   // positions: [x0,y0,z0, x1,y1,z1, ...]
//   const n = positions.length / 3;
//   const neighbors: number[][] = Array.from({ length: n }, () => []);

//   // naive O(n^2) k-NN - ok for ~1200 points
//   for (let i = 0; i < n; i++) {
//     const xi = positions[3 * i];
//     const yi = positions[3 * i + 1];
//     const zi = positions[3 * i + 2];
//     const dists: { id: number; d: number }[] = [];
//     for (let j = 0; j < n; j++) {
//       if (i === j) continue;
//       const dx = xi - positions[3 * j];
//       const dy = yi - positions[3 * j + 1];
//       const dz = zi - positions[3 * j + 2];
//       const d = dx * dx + dy * dy + dz * dz;
//       dists.push({ id: j, d });
//     }
//     dists.sort((a, b) => a.d - b.d);
//     neighbors[i] = dists.slice(0, k).map((o) => o.id);
//   }
//   return neighbors;
// }

// type PointsRef = React.MutableRefObject<THREE.Points | null>;

// function NeuronField({
//   num = 1200,
//   pointSize = 6,
//   connectionMax = 0.26, // in world units
// }: {
//   num?: number;
//   pointSize?: number;
//   connectionMax?: number;
// }) {
//   const { size, viewport } = useThree();
//   const positions = useMemo(() => generateBrainPoints(num, 3.6, 2.4, 1.6), [num]);
//   const neighbors = useMemo(() => computeNeighbors(positions, 3), [positions]);
//   const pointsRef = useRef<THREE.Points | null>(null);
//   const colorAttrRef = useRef<THREE.BufferAttribute | null>(null);
//   const lineRef = useRef<THREE.LineSegments | null>(null);

//   // prepare colors (rgb per vertex)
//   const colors = useMemo(() => {
//     const arr = new Float32Array(positions.length); // rgb per vertex
//     for (let i = 0; i < arr.length; i += 3) {
//       arr[i] = 0.4; // r (base dim blue)
//       arr[i + 1] = 0.6; // g
//       arr[i + 2] = 1.0; // b
//     }
//     return arr;
//   }, [positions]);

//   // Build line geometry (pairs of connected vertices)
//   const linePositions = useMemo(() => {
//     const pairs: number[] = [];
//     const n = positions.length / 3;
//     for (let i = 0; i < n; i++) {
//       for (const nid of neighbors[i]) {
//         // ensure single direction only (i < nid) to avoid duplicate
//         if (i < nid) {
//           pairs.push(
//             positions[3 * i],
//             positions[3 * i + 1],
//             positions[3 * i + 2],
//             positions[3 * nid],
//             positions[3 * nid + 1],
//             positions[3 * nid + 2]
//           );
//         }
//       }
//     }
//     return new Float32Array(pairs);
//   }, [positions, neighbors]);

//   // We'll update vertex colors each frame based on pointer proximity (using a world-space pointer)
//   useEffect(() => {
//     if (!pointsRef.current) return;
//     const geom = pointsRef.current.geometry as THREE.BufferGeometry;
//     colorAttrRef.current = new THREE.BufferAttribute(colors, 3);
//     geom.setAttribute("color", colorAttrRef.current);
//   }, [colors]);

//   // Setup lines
//   useEffect(() => {
//     if (!lineRef.current) return;
//     const lineGeom = new THREE.BufferGeometry();
//     lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
//     lineRef.current.geometry = lineGeom;
//   }, [linePositions]);

//   // track pointer in normalized device coords then project into world
//   const pointer = useRef(new THREE.Vector3(0, 0, 0));
//   useEffect(() => {
//     const handlePointerMove = (e: PointerEvent) => {
//       // normalized device coords (-1..1)
//       const nx = (e.clientX / window.innerWidth) * 2 - 1;
//       const ny = -(e.clientY / window.innerHeight) * 2 + 1;
//       // project into world at z = 0 plane (camera at z?)
//       // We'll unproject a vector with z = 0.0 in NDC then transform with camera
//       // but simpler: use ray from camera and pick point at z=0 plane
//       pointer.current.set(nx, ny, 0.5);
//     };
//     window.addEventListener("pointermove", handlePointerMove);
//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);

//   // per-frame update
//   useFrame(({ camera, mouse }) => {
//     // compute world-space pointer by unprojecting at z = 0. (Works decently enough.)
//     const ndc = new THREE.Vector3((mouse.x || 0), (mouse.y || 0), 0.5);
//     ndc.unproject(camera); // now in world coordinates
//     const worldPointer = ndc;

//     // Update colors based on distance (loop through points)
//     if (!pointsRef.current) return;
//     const geom = pointsRef.current.geometry as THREE.BufferGeometry;
//     const pos = geom.getAttribute("position") as THREE.BufferAttribute;
//     const col = (colorAttrRef.current = colorAttrRef.current ?? (geom.getAttribute("color") as THREE.BufferAttribute));
//     const count = pos.count;

//     for (let i = 0; i < count; i++) {
//       const x = pos.getX(i);
//       const y = pos.getY(i);
//       const z = pos.getZ(i);
//       const dx = x - worldPointer.x;
//       const dy = y - worldPointer.y;
//       const dz = z - worldPointer.z;
//       const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

//       // intensity based on distance
//       const intensity = Math.max(0, 1 - d / 0.8); // tune radius
//       // base blue color
//       const baseR = 0.08;
//       const baseG = 0.45;
//       const baseB = 1.0;
//       // add warm highlight when near (mix towards yellowish/white)
//       const highlightR = THREE.MathUtils.lerp(baseR, 1.0, intensity * 1.2);
//       const highlightG = THREE.MathUtils.lerp(baseG, 0.86, intensity * 1.2);
//       const highlightB = THREE.MathUtils.lerp(baseB, 0.6, intensity * 1.2);

//       col.setX(i, highlightR);
//       col.setY(i, highlightG);
//       col.setZ(i, highlightB);
//     }

//     col.needsUpdate = true;

//     // Also fade lines by per-segment midpoint intensity (we'll set line material opacity via distance check)
//     if (lineRef.current) {
//       // We keep line geometry static; we update line material opacity uniform instead by computing average nearest intensity
//       const lineMat = lineRef.current.material as THREE.LineBasicMaterial;
//       // compute small global factor so lines brighten when pointer near
//       // naive: check nearest point to pointer, compute its intensity
//       let nearest = 999;
//       for (let i = 0; i < pos.count; i++) {
//         const dx = pos.getX(i) - worldPointer.x;
//         const dy = pos.getY(i) - worldPointer.y;
//         const dz = pos.getZ(i) - worldPointer.z;
//         const d = dx * dx + dy * dy + dz * dz;
//         if (d < nearest) nearest = d;
//       }
//       const nearestDist = Math.sqrt(nearest);
//       // set opacity inversely to distance
//       const alpha = THREE.MathUtils.clamp(1 - nearestDist / 1.6, 0.03, 0.22);
//       lineMat.opacity = alpha;
//       (lineMat as any).needsUpdate = true;
//     }
//   });

//   return (
//     <>
//       <Points ref={pointsRef} limit={positions.length / 3}>
//         <bufferGeometry>
//           <bufferAttribute attachObject={["attributes", "position"]} args={[positions, 3]} />
//         </bufferGeometry>

//         {/* Note: Drei's PointMaterial has helpful props. Using vertexColors to allow per-point color. */}
//         <meshBasicMaterial attach="material" vertexColors size={pointSize} />
//       </Points>

//       <lineSegments ref={lineRef} frustumCulled={false}>
//         <bufferGeometry />
//         <lineBasicMaterial attach="material" color={"#9ABEFF"} transparent opacity={0.06} linewidth={1} />
//       </lineSegments>
//     </>
//   );
// }

// export default function BrainScene() {
//   return (
//     <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 2]}>
//       <ambientLight intensity={0.8} />
//       <directionalLight intensity={0.5} position={[5, 5, 5]} />
//       <React.Suspense fallback={null}>
//         <NeuronField num={1200} />
//       </React.Suspense>

//       {/* Bloom for extra glow */}
//       <EffectComposer multisampling={4}>
//         <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.2} />
//       </EffectComposer>

//       <OrbitControls enableZoom={true} enablePan={false} />
//     </Canvas>
//   );
}

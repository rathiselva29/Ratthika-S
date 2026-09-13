import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Play, Pause, Compass, Sparkles, Layers } from 'lucide-react';

interface Continuous3DCanvasProps {
  currentSectionId?: string;
}

export const Continuous3DCanvas: React.FC<Continuous3DCanvasProps> = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [visualMode, setVisualMode] = useState<'cinematic' | 'wireframe' | 'minimal'>('cinematic');
  const [activeZoneName, setActiveZoneName] = useState<string>('01 // 3D DIGITAL WORKSPACE');
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Refs for animation loop
  const stateRef = useRef({
    isPlaying: true,
    visualMode: 'cinematic' as 'cinematic' | 'wireframe' | 'minimal',
    scrollY: 0,
    scrollProgress: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    isMobile: false,
    isReducedMotion: false,
  });

  useEffect(() => {
    stateRef.current.isPlaying = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    stateRef.current.visualMode = visualMode;
  }, [visualMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check media preferences & mobile
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    setIsReducedMotion(prefersReduced);
    stateRef.current.isReducedMotion = prefersReduced;
    stateRef.current.isMobile = isMobile;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0055);

    const camera = new THREE.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 32);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
        precision: isMobile ? 'mediump' : 'highp',
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported or context unavailable:', e);
      return;
    }

    // Common Materials
    const amberColor = new THREE.Color(0xf27d26);
    const cyanColor = new THREE.Color(0x06b6d4);
    const emeraldColor = new THREE.Color(0x10b981);
    const purpleColor = new THREE.Color(0xa855f7);
    const goldColor = new THREE.Color(0xf59e0b);

    // ==========================================
    // 0. GLOBAL CYBER GRID & HORIZON (STRETCHES THROUGHOUT)
    // ==========================================
    const gridHelper = new THREE.GridHelper(260, 60, 0xf27d26, 0x1a2333);
    gridHelper.position.set(0, -18, 0);
    const gridMaterial = gridHelper.material as THREE.Material;
    gridMaterial.transparent = true;
    gridMaterial.opacity = 0.22;
    scene.add(gridHelper);

    // Undulating wave particles
    const particleWaveCount = isMobile ? 350 : 800;
    const waveGeo = new THREE.BufferGeometry();
    const wavePos = new Float32Array(particleWaveCount * 3);
    const waveColors = new Float32Array(particleWaveCount * 3);

    for (let i = 0; i < particleWaveCount; i++) {
      const i3 = i * 3;
      wavePos[i3] = (Math.random() - 0.5) * 160;
      wavePos[i3 + 1] = -16 + (Math.random() - 0.5) * 6;
      wavePos[i3 + 2] = (Math.random() - 0.5) * 220;

      const col = Math.random() > 0.4 ? amberColor : cyanColor;
      waveColors[i3] = col.r;
      waveColors[i3 + 1] = col.g;
      waveColors[i3 + 2] = col.b;
    }
    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePos, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: isMobile ? 0.7 : 1.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(waveGeo, waveMat);
    scene.add(wavePoints);

    // Ambient floating dust particles spanning the vertical space
    const dustCount = isMobile ? 300 : 750;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 120;
      dustPos[i * 3 + 1] = 20 - Math.random() * 320; // spans down to zone 7
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.6,
      color: 0xf27d26,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // ==========================================
    // ZONE 0: HOME - 3D DIGITAL WORKSPACE (Y: 0)
    // ==========================================
    const zone0Group = new THREE.Group();
    zone0Group.position.set(0, 0, 0);
    scene.add(zone0Group);

    // 1. 3D Holographic Laptop Model
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(13, 0, 4);
    laptopGroup.rotation.y = -Math.PI / 5;
    laptopGroup.rotation.x = Math.PI / 16;
    zone0Group.add(laptopGroup);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(9, 0.4, 6.2);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });
    const laptopBase = new THREE.Mesh(baseGeo, baseMat);
    laptopGroup.add(laptopBase);

    // Base Wireframe Outline
    const baseEdgeGeo = new THREE.EdgesGeometry(baseGeo);
    const baseEdgeMat = new THREE.LineBasicMaterial({ color: 0xf27d26, transparent: true, opacity: 0.7 });
    const baseEdges = new THREE.LineSegments(baseEdgeGeo, baseEdgeMat);
    laptopBase.add(baseEdges);

    // Keyboard glow plane
    const kbGeo = new THREE.PlaneGeometry(7.8, 4.4);
    const kbMat = new THREE.MeshBasicMaterial({
      color: 0x162032,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const kb = new THREE.Mesh(kbGeo, kbMat);
    kb.rotation.x = -Math.PI / 2;
    kb.position.set(0, 0.22, 0.3);
    laptopGroup.add(kb);

    // Laptop Screen Lid (Angled back at 115 degrees)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.2, -3.1);
    lidGroup.rotation.x = THREE.MathUtils.degToRad(-68);
    laptopGroup.add(lidGroup);

    const lidGeo = new THREE.BoxGeometry(9, 5.8, 0.22);
    const lidMat = new THREE.MeshStandardMaterial({
      color: 0x0c0e14,
      metalness: 0.9,
      roughness: 0.2,
    });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.set(0, 2.9, 0);
    lidGroup.add(lid);

    const lidEdgeGeo = new THREE.EdgesGeometry(lidGeo);
    const lidEdgeMat = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.85 });
    const lidEdges = new THREE.LineSegments(lidEdgeGeo, lidEdgeMat);
    lid.add(lidEdges);

    // Screen Display Plane (Cyan Terminal Glow)
    const screenGeo = new THREE.PlaneGeometry(8.4, 5.2);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x04131f,
      wireframe: false,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0, 0.12);
    lid.add(screen);

    // Screen grid lines inside display
    const screenGridGeo = new THREE.PlaneGeometry(8.2, 5.0, 10, 6);
    const screenGridMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const screenGrid = new THREE.Mesh(screenGridGeo, screenGridMat);
    screenGrid.position.set(0, 0, 0.13);
    lid.add(screenGrid);

    // 2. React Atom 3D Rings & Glowing Nucleus
    const reactAtomGroup = new THREE.Group();
    reactAtomGroup.position.set(-14, 5, 2);
    zone0Group.add(reactAtomGroup);

    // Nucleus
    const nucleusGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    reactAtomGroup.add(nucleus);

    // Atom orbital rings
    const ringGeo = new THREE.TorusGeometry(4.2, 0.06, 8, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.75 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xf27d26, transparent: true, opacity: 0.75 });
    const ringMat3 = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.75 });

    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    const ring3 = new THREE.Mesh(ringGeo, ringMat3);

    ring1.rotation.set(Math.PI / 3, 0, 0);
    ring2.rotation.set(-Math.PI / 3, Math.PI / 4, 0);
    ring3.rotation.set(0, Math.PI / 2.5, Math.PI / 5);

    reactAtomGroup.add(ring1, ring2, ring3);

    // Electron Spheres
    const electronGeo = new THREE.SphereGeometry(0.32, 12, 12);
    const electronMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const electron1 = new THREE.Mesh(electronGeo, electronMat);
    const electron2 = new THREE.Mesh(electronGeo, electronMat);
    const electron3 = new THREE.Mesh(electronGeo, electronMat);
    reactAtomGroup.add(electron1, electron2, electron3);

    // 3. Floating Holographic UI Planes
    const holoPanelGeo = new THREE.PlaneGeometry(6, 4);
    const holoPanelMat = new THREE.MeshBasicMaterial({
      color: 0xf27d26,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const holo1 = new THREE.Mesh(holoPanelGeo, holoPanelMat);
    holo1.position.set(-10, -5, -4);
    holo1.rotation.set(0.2, 0.4, 0);
    zone0Group.add(holo1);

    const holo2 = new THREE.Mesh(holoPanelGeo, holoPanelMat);
    holo2.position.set(16, 7, -6);
    holo2.rotation.set(-0.2, -0.4, 0.1);
    zone0Group.add(holo2);

    // ==========================================
    // ZONE 1: ABOUT & SKILLS - DEVELOPER RADAR & CONSTELLATION (Y: -38)
    // ==========================================
    const zone1Group = new THREE.Group();
    zone1Group.position.set(0, -38, 0);
    scene.add(zone1Group);

    // 1. 3D Rotating Technical Radar Sweep
    const radarGroup = new THREE.Group();
    radarGroup.position.set(-11, 0, 0);
    zone1Group.add(radarGroup);

    // Radar Rings
    for (let r = 2; r <= 8; r += 2) {
      const circleGeo = new THREE.RingGeometry(r - 0.05, r + 0.05, 48);
      const circleMat = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35 - (r / 8) * 0.15,
      });
      const circleMesh = new THREE.Mesh(circleGeo, circleMat);
      circleMesh.rotation.x = Math.PI / 2;
      radarGroup.add(circleMesh);
    }

    // Radar Crosshairs
    const crosshairMat = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3 });
    const crossPts = [
      new THREE.Vector3(-8, 0, 0), new THREE.Vector3(8, 0, 0),
      new THREE.Vector3(0, 0, -8), new THREE.Vector3(0, 0, 8),
    ];
    const crossGeo = new THREE.BufferGeometry().setFromPoints(crossPts);
    const crosshair = new THREE.LineSegments(crossGeo, crosshairMat);
    radarGroup.add(crosshair);

    // Radar Sweep Line / Cone
    const sweepPts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(8, 0, 0)];
    const sweepGeo = new THREE.BufferGeometry().setFromPoints(sweepPts);
    const sweepLineMat = new THREE.LineBasicMaterial({ color: 0xf27d26, linewidth: 2 });
    const sweepLine = new THREE.Line(sweepGeo, sweepLineMat);
    radarGroup.add(sweepLine);

    // 2. Skill Constellation Nodes (Polyhedrons)
    const skillNodesGroup = new THREE.Group();
    skillNodesGroup.position.set(10, 0, 0);
    zone1Group.add(skillNodesGroup);

    const skillNodeGeos = [
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.DodecahedronGeometry(1.4, 0),
      new THREE.TetrahedronGeometry(1.6, 0),
      new THREE.IcosahedronGeometry(1.4, 0),
    ];
    const skillColors = [amberColor, cyanColor, emeraldColor, purpleColor, goldColor];
    const skillMeshes: THREE.Mesh[] = [];
    const nodePositions = [
      new THREE.Vector3(-5, 3, 2),
      new THREE.Vector3(4, 4, -2),
      new THREE.Vector3(0, -3, 3),
      new THREE.Vector3(5, -2, -3),
      new THREE.Vector3(-4, -4, 0),
    ];

    nodePositions.forEach((pos, idx) => {
      const geo = skillNodeGeos[idx % skillNodeGeos.length];
      const mat = new THREE.MeshStandardMaterial({
        color: skillColors[idx % skillColors.length],
        wireframe: true,
        emissive: skillColors[idx % skillColors.length],
        emissiveIntensity: 0.4,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      skillMeshes.push(mesh);
      skillNodesGroup.add(mesh);
    });

    // Connection lines bridging skill nodes
    const skillLinePts: THREE.Vector3[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        skillLinePts.push(nodePositions[i]);
        skillLinePts.push(nodePositions[j]);
      }
    }
    const skillLineGeo = new THREE.BufferGeometry().setFromPoints(skillLinePts);
    const skillLineMat = new THREE.LineBasicMaterial({
      color: 0xf27d26,
      transparent: true,
      opacity: 0.35,
    });
    const skillLines = new THREE.LineSegments(skillLineGeo, skillLineMat);
    skillNodesGroup.add(skillLines);

    // ==========================================
    // ZONE 2: EXPERIENCE TIMELINE - 3D PATHWAY & NODES (Y: -76)
    // ==========================================
    const zone2Group = new THREE.Group();
    zone2Group.position.set(0, -76, 0);
    scene.add(zone2Group);

    // Serpentine 3D Timeline Spline
    const curvePoints = [
      new THREE.Vector3(-14, 8, -4),
      new THREE.Vector3(-6, 4, 3),
      new THREE.Vector3(4, 0, -2),
      new THREE.Vector3(12, -4, 4),
      new THREE.Vector3(6, -8, -3),
      new THREE.Vector3(-8, -12, 2),
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.22, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0xf27d26,
      emissive: 0xf27d26,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    zone2Group.add(tubeMesh);

    // Glowing Milestone Beacon Nodes along spline
    const beaconGeo = new THREE.SphereGeometry(1.0, 16, 16);
    const beaconMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.7,
      wireframe: true,
    });
    curvePoints.forEach((pt) => {
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.copy(pt);
      zone2Group.add(beacon);

      // Beacon Halo Ring
      const haloGeo = new THREE.RingGeometry(1.3, 1.5, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xf27d26,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pt);
      halo.rotation.x = Math.PI / 2;
      zone2Group.add(halo);
    });

    // ==========================================
    // ZONE 3: FEATURED PROJECTS - 3D SHOWCASE ARENA (Y: -115)
    // ==========================================
    const zone3Group = new THREE.Group();
    zone3Group.position.set(0, -115, 0);
    scene.add(zone3Group);

    // Floating 3D Showcase Glass Pedestals
    const pedestalPositions = [
      new THREE.Vector3(-12, 2, -2),
      new THREE.Vector3(12, -2, -2),
    ];

    pedestalPositions.forEach((pos, pIdx) => {
      const pGroup = new THREE.Group();
      pGroup.position.copy(pos);
      zone3Group.add(pGroup);

      // Hexagonal Base
      const hexGeo = new THREE.CylinderGeometry(5, 5.5, 0.6, 6);
      const hexMat = new THREE.MeshStandardMaterial({
        color: 0x0e1726,
        wireframe: true,
        emissive: pIdx === 0 ? 0xf27d26 : 0x06b6d4,
        emissiveIntensity: 0.4,
      });
      const hex = new THREE.Mesh(hexGeo, hexMat);
      hex.position.y = -3;
      pGroup.add(hex);

      // Floating Showcase Screen (Display panel)
      const dispGeo = new THREE.BoxGeometry(6.4, 4.2, 0.2);
      const dispMat = new THREE.MeshStandardMaterial({
        color: 0x111622,
        wireframe: false,
      });
      const disp = new THREE.Mesh(dispGeo, dispMat);
      disp.position.y = 0.5;
      pGroup.add(disp);

      const dispEdgeGeo = new THREE.EdgesGeometry(dispGeo);
      const dispEdgeMat = new THREE.LineBasicMaterial({
        color: pIdx === 0 ? 0xf27d26 : 0x06b6d4,
        transparent: true,
        opacity: 0.85,
      });
      const dispEdges = new THREE.LineSegments(dispEdgeGeo, dispEdgeMat);
      disp.add(dispEdges);

      // Mobile phone frame beside it
      const mobGeo = new THREE.BoxGeometry(1.6, 3.2, 0.15);
      const mobMat = new THREE.MeshStandardMaterial({ color: 0x080c14 });
      const mob = new THREE.Mesh(mobGeo, mobMat);
      mob.position.set(4.2, 0, 1.2);
      pGroup.add(mob);

      const mobEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(mobGeo),
        new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.8 })
      );
      mob.add(mobEdges);
    });

    // ==========================================
    // ZONE 4: ARTIKA CREATIVE GALLERY & PRISMS (Y: -155)
    // ==========================================
    const zone4Group = new THREE.Group();
    zone4Group.position.set(0, -155, 0);
    scene.add(zone4Group);

    // Floating Gallery Artwork Frames
    const framePositions = [
      { pos: new THREE.Vector3(-14, 3, -3), rot: 0.25 },
      { pos: new THREE.Vector3(-5, 5, 2), rot: 0.1 },
      { pos: new THREE.Vector3(5, 4, 1), rot: -0.1 },
      { pos: new THREE.Vector3(14, 2, -3), rot: -0.25 },
    ];

    framePositions.forEach((fp, i) => {
      const fGroup = new THREE.Group();
      fGroup.position.copy(fp.pos);
      fGroup.rotation.y = fp.rot;
      zone4Group.add(fGroup);

      // Outer Gilded Frame
      const fGeo = new THREE.BoxGeometry(4.8, 6.2, 0.2);
      const fMat = new THREE.MeshStandardMaterial({
        color: 0x121016,
        wireframe: false,
      });
      const frameMesh = new THREE.Mesh(fGeo, fMat);
      fGroup.add(frameMesh);

      const fEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(fGeo),
        new THREE.LineBasicMaterial({
          color: [amberColor, goldColor, purpleColor, cyanColor][i % 4],
          transparent: true,
          opacity: 0.8,
        })
      );
      frameMesh.add(fEdges);

      // Inner Canvas Glow
      const canvasPlaneGeo = new THREE.PlaneGeometry(4.2, 5.6);
      const canvasPlaneMat = new THREE.MeshBasicMaterial({
        color: 0x1c1924,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const cp = new THREE.Mesh(canvasPlaneGeo, canvasPlaneMat);
      cp.position.z = 0.12;
      frameMesh.add(cp);
    });

    // Swirling Paint / Pigment Particle Cloud
    const paintCount = isMobile ? 180 : 450;
    const paintGeo = new THREE.BufferGeometry();
    const paintPos = new Float32Array(paintCount * 3);
    const paintCols = new Float32Array(paintCount * 3);
    const paintPalette = [
      new THREE.Color(0xf27d26), // amber
      new THREE.Color(0xf59e0b), // gold
      new THREE.Color(0xec4899), // pink
      new THREE.Color(0x8b5cf6), // violet
      new THREE.Color(0x06b6d4), // turquoise
    ];

    for (let i = 0; i < paintCount; i++) {
      const i3 = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + Math.random() * 18;
      paintPos[i3] = Math.cos(angle) * radius;
      paintPos[i3 + 1] = (Math.random() - 0.5) * 16;
      paintPos[i3 + 2] = Math.sin(angle) * radius;

      const c = paintPalette[i % paintPalette.length];
      paintCols[i3] = c.r;
      paintCols[i3 + 1] = c.g;
      paintCols[i3 + 2] = c.b;
    }
    paintGeo.setAttribute('position', new THREE.BufferAttribute(paintPos, 3));
    paintGeo.setAttribute('color', new THREE.BufferAttribute(paintCols, 3));

    const paintMat = new THREE.PointsMaterial({
      size: isMobile ? 0.9 : 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const paintCloud = new THREE.Points(paintGeo, paintMat);
    zone4Group.add(paintCloud);

    // ==========================================
    // ZONE 5: WEB APPLICATIONS - CONNECTED 3D DEVICE MATRIX (Y: -195)
    // ==========================================
    const zone5Group = new THREE.Group();
    zone5Group.position.set(0, -195, 0);
    scene.add(zone5Group);

    // Multi-Device Ecosystem in 3D Space
    const devices = [
      { type: 'desktop', pos: new THREE.Vector3(-10, 2, 0), size: [7.2, 4.6, 0.25], col: cyanColor },
      { type: 'tablet', pos: new THREE.Vector3(0, -2, 4), size: [3.8, 5.2, 0.2], col: amberColor },
      { type: 'phone', pos: new THREE.Vector3(10, 1, 1), size: [2.0, 4.0, 0.18], col: emeraldColor },
    ];

    devices.forEach((dev) => {
      const dGeo = new THREE.BoxGeometry(dev.size[0], dev.size[1], dev.size[2]);
      const dMat = new THREE.MeshStandardMaterial({
        color: 0x090e18,
        wireframe: false,
      });
      const dMesh = new THREE.Mesh(dGeo, dMat);
      dMesh.position.copy(dev.pos);
      zone5Group.add(dMesh);

      const dEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(dGeo),
        new THREE.LineBasicMaterial({ color: dev.col, transparent: true, opacity: 0.85 })
      );
      dMesh.add(dEdges);
    });

    // Optical data lines linking devices
    const deviceLinePts = [
      devices[0].pos, devices[1].pos,
      devices[1].pos, devices[2].pos,
      devices[0].pos, devices[2].pos,
    ];
    const devLineGeo = new THREE.BufferGeometry().setFromPoints(deviceLinePts);
    const devLineMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.5,
    });
    const devLines = new THREE.LineSegments(devLineGeo, devLineMat);
    zone5Group.add(devLines);

    // ==========================================
    // ZONE 6: SERVICES - 5 FLOATING 3D SIGNATURE OBJECTS (Y: -235)
    // ==========================================
    const zone6Group = new THREE.Group();
    zone6Group.position.set(0, -235, 0);
    scene.add(zone6Group);

    // 5 Distinct Service Objects:
    // 1) Web Dev: Cyber Cube with circuit lines
    const s1Geo = new THREE.BoxGeometry(3.0, 3.0, 3.0);
    const s1Mat = new THREE.MeshStandardMaterial({ color: 0x111624, wireframe: true, emissive: 0xf27d26, emissiveIntensity: 0.5 });
    const s1Mesh = new THREE.Mesh(s1Geo, s1Mat);
    s1Mesh.position.set(-14, 3, 0);
    zone6Group.add(s1Mesh);

    // 2) Digital Creation: Crystal Octahedron
    const s2Geo = new THREE.OctahedronGeometry(2.3, 0);
    const s2Mat = new THREE.MeshStandardMaterial({ color: 0x181024, wireframe: true, emissive: 0xa855f7, emissiveIntensity: 0.6 });
    const s2Mesh = new THREE.Mesh(s2Geo, s2Mat);
    s2Mesh.position.set(-7, -2, 2);
    zone6Group.add(s2Mesh);

    // 3) Branding: Torus Knot / Golden Ratio
    const s3Geo = new THREE.TorusKnotGeometry(1.6, 0.4, 48, 8);
    const s3Mat = new THREE.MeshStandardMaterial({ color: 0x221706, wireframe: true, emissive: 0xf59e0b, emissiveIntensity: 0.6 });
    const s3Mesh = new THREE.Mesh(s3Geo, s3Mat);
    s3Mesh.position.set(0, 3, -1);
    zone6Group.add(s3Mesh);

    // 4) Digital Marketing & SEO: Growth Trajectory Cone
    const s4Geo = new THREE.ConeGeometry(2.0, 3.6, 6);
    const s4Mat = new THREE.MeshStandardMaterial({ color: 0x051a14, wireframe: true, emissive: 0x10b981, emissiveIntensity: 0.6 });
    const s4Mesh = new THREE.Mesh(s4Geo, s4Mat);
    s4Mesh.position.set(7, -2, 2);
    zone6Group.add(s4Mesh);

    // 5) Freelance Solutions: Interlocking Dodecahedron Shield
    const s5Geo = new THREE.DodecahedronGeometry(2.1, 0);
    const s5Mat = new THREE.MeshStandardMaterial({ color: 0x041824, wireframe: true, emissive: 0x06b6d4, emissiveIntensity: 0.6 });
    const s5Mesh = new THREE.Mesh(s5Geo, s5Mat);
    s5Mesh.position.set(14, 3, 0);
    zone6Group.add(s5Mesh);

    // Network lines connecting all 5 services
    const sPositions = [s1Mesh.position, s2Mesh.position, s3Mesh.position, s4Mesh.position, s5Mesh.position];
    const sLinePts: THREE.Vector3[] = [];
    for (let i = 0; i < sPositions.length; i++) {
      for (let j = i + 1; j < sPositions.length; j++) {
        sLinePts.push(sPositions[i]);
        sLinePts.push(sPositions[j]);
      }
    }
    const sLineGeo = new THREE.BufferGeometry().setFromPoints(sLinePts);
    const sLineMat = new THREE.LineBasicMaterial({ color: 0xf27d26, transparent: true, opacity: 0.4 });
    const sLines = new THREE.LineSegments(sLineGeo, sLineMat);
    zone6Group.add(sLines);

    // ==========================================
    // ZONE 7: CONTACT - CONVERGENCE SINGULARITY / "LET'S BUILD IT" (Y: -275)
    // ==========================================
    const zone7Group = new THREE.Group();
    zone7Group.position.set(0, -275, 0);
    scene.add(zone7Group);

    // Central Singularity Reactor Core
    const coreGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf27d26,
      emissive: 0xf27d26,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    zone7Group.add(coreMesh);

    // Inner Glowing Sphere
    const innerGeo = new THREE.SphereGeometry(2.2, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    zone7Group.add(innerCore);

    // Magnetic Accretion Rings
    const ringRadii = [5.5, 7.5, 9.5];
    const ringMeshes: THREE.Mesh[] = [];
    ringRadii.forEach((rad, rIdx) => {
      const rGeo = new THREE.RingGeometry(rad - 0.08, rad + 0.08, 64);
      const rMat = new THREE.MeshBasicMaterial({
        color: rIdx % 2 === 0 ? 0xf27d26 : 0x06b6d4,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7 - rIdx * 0.15,
      });
      const rm = new THREE.Mesh(rGeo, rMat);
      rm.rotation.x = Math.PI / 2 + (rIdx * Math.PI) / 6;
      ringMeshes.push(rm);
      zone7Group.add(rm);
    });

    // Converging Vortex Energy Lines (Curving into center)
    const vortexPts: THREE.Vector3[] = [];
    const filamentCount = 28;
    for (let f = 0; f < filamentCount; f++) {
      const angle = (f / filamentCount) * Math.PI * 2;
      const outerRad = 26;
      const height = (Math.random() - 0.5) * 16;
      vortexPts.push(new THREE.Vector3(Math.cos(angle) * outerRad, height, Math.sin(angle) * outerRad));
      vortexPts.push(new THREE.Vector3(0, 0, 0));
    }
    const vortexGeo = new THREE.BufferGeometry().setFromPoints(vortexPts);
    const vortexMat = new THREE.LineBasicMaterial({
      color: 0xf27d26,
      transparent: true,
      opacity: 0.35,
    });
    const vortexLines = new THREE.LineSegments(vortexGeo, vortexMat);
    zone7Group.add(vortexLines);

    // ==========================================
    // LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xf27d26, 1.8);
    dirLight1.position.set(20, 25, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.4);
    dirLight2.position.set(-20, -20, 15);
    scene.add(dirLight2);

    // ==========================================
    // SCROLL & MOUSE INTERACTION TRACKING
    // ==========================================
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY || window.pageYOffset;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      stateRef.current.scrollY = currentScroll;
      stateRef.current.scrollProgress = progress;

      // Update zone badge based on progress
      if (progress < 0.12) {
        setActiveZoneName('01 // 3D DIGITAL WORKSPACE');
      } else if (progress < 0.26) {
        setActiveZoneName('02 // TECHNICAL RADAR & CONSTELLATION');
      } else if (progress < 0.39) {
        setActiveZoneName('03 // 3D TIMELINE PATHWAY');
      } else if (progress < 0.53) {
        setActiveZoneName('04 // 3D PRODUCT SHOWCASE ARENA');
      } else if (progress < 0.67) {
        setActiveZoneName('05 // ARTIKA 3D GALLERY & PRISMS');
      } else if (progress < 0.81) {
        setActiveZoneName('06 // CONNECTED DEVICE MATRIX');
      } else if (progress < 0.93) {
        setActiveZoneName('07 // 3D SIGNATURE SERVICES');
      } else {
        setActiveZoneName('08 // "LET’S BUILD IT" CONVERGENCE');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      stateRef.current.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.2 : 2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    // ==========================================
    // ANIMATION LOOP WITH CINEMATIC LERP
    // ==========================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    // Camera waypoint targets along continuous Y-axis journey
    const totalJourneyDepth = -275;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!stateRef.current.isPlaying) {
        renderer.render(scene, camera);
        return;
      }

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const progress = stateRef.current.scrollProgress;
      const isMotionReduced = stateRef.current.isReducedMotion;

      // Mouse Lerp
      stateRef.current.mouseX += (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.05;
      stateRef.current.mouseY += (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.05;

      // Camera Position Choreography: Continuous Flight Down The 3D World
      const targetCamY = progress * totalJourneyDepth;
      // Slight gentle horizontal sway along a bezier curve
      const targetCamX = Math.sin(progress * Math.PI * 3) * 6 + stateRef.current.mouseX * 3.5;
      const targetCamZ = 30 + Math.cos(progress * Math.PI * 2) * 5 - stateRef.current.mouseY * 2.5;

      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;

      // LookAt target smoothly tracks slightly ahead of the camera
      const lookTargetY = camera.position.y - 4;
      const lookTargetX = stateRef.current.mouseX * 2;
      camera.lookAt(lookTargetX, lookTargetY, 0);

      if (!isMotionReduced) {
        // Zone 0: Laptop floating & React Atom orbiting
        laptopGroup.rotation.y = -Math.PI / 5 + Math.sin(time * 0.8) * 0.08;
        laptopGroup.position.y = Math.sin(time * 1.2) * 0.6;

        ring1.rotation.x += 0.012;
        ring1.rotation.y += 0.008;
        ring2.rotation.y += 0.015;
        ring2.rotation.z += 0.01;
        ring3.rotation.z += 0.014;
        ring3.rotation.x += 0.009;

        // Electrons along orbital rings
        electron1.position.set(Math.cos(time * 2.4) * 4.2, Math.sin(time * 2.4) * 4.2, 0);
        electron2.position.set(0, Math.cos(time * 2.8) * 4.2, Math.sin(time * 2.8) * 4.2);
        electron3.position.set(Math.sin(time * 2.0) * 4.2, 0, Math.cos(time * 2.0) * 4.2);

        holo1.position.y = -5 + Math.sin(time * 1.1) * 0.5;
        holo2.position.y = 7 + Math.cos(time * 0.9) * 0.5;

        // Zone 1: Radar sweep rotation & skill nodes
        sweepLine.rotation.y = time * 2.2;
        skillMeshes.forEach((mesh, idx) => {
          mesh.rotation.x += 0.01 + idx * 0.003;
          mesh.rotation.y += 0.012 + idx * 0.004;
          mesh.position.y = nodePositions[idx].y + Math.sin(time * 1.5 + idx) * 0.4;
        });

        // Zone 2: Beacons pulsing
        zone2Group.rotation.y = Math.sin(time * 0.4) * 0.08;

        // Zone 3: Showcase pedestals rotation
        zone3Group.rotation.y = Math.sin(time * 0.5) * 0.06;

        // Zone 4: Gallery paint particles swirling
        paintCloud.rotation.y = time * 0.08;
        paintCloud.rotation.z = Math.sin(time * 0.2) * 0.04;

        // Zone 6: 5 Service Objects Rotating on their own unique axes
        s1Mesh.rotation.x += 0.015;
        s1Mesh.rotation.y += 0.02;
        s2Mesh.rotation.y += 0.022;
        s2Mesh.rotation.z += 0.014;
        s3Mesh.rotation.x += 0.018;
        s3Mesh.rotation.y += 0.015;
        s4Mesh.rotation.y += 0.025;
        s5Mesh.rotation.x += 0.012;
        s5Mesh.rotation.y += 0.016;

        // Zone 7: Singularity core & magnetic rings
        coreMesh.rotation.x += 0.02;
        coreMesh.rotation.y += 0.028;
        const pulse = 1 + Math.sin(time * 3.5) * 0.08;
        coreMesh.scale.set(pulse, pulse, pulse);
        ringMeshes.forEach((rm, i) => {
          rm.rotation.z += (i % 2 === 0 ? 1 : -1) * (0.015 + i * 0.008);
        });
        vortexLines.rotation.y = -time * 0.4;

        // Global wave and dust movement
        wavePoints.position.z = (wavePoints.position.z + 0.05) % 20;
        dustPoints.rotation.y = time * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <>
      {/* Three.js Continuous Full-Screen WebGL Canvas */}
      <div 
        ref={mountRef} 
        id="continuous-3d-viewport" 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity: visualMode === 'minimal' ? 0.35 : 1 }}
      />

      {/* Floating Minimalist 3D HUD (Bottom Left) */}
      <div className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full glass-panel border border-white/10 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F27D26]/15 border border-[#F27D26]/30 text-[#F27D26] text-[10px] font-mono font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
          <span>{activeZoneName}</span>
        </div>

        <button
          onClick={() => setIsPlaying(prev => !prev)}
          title={isPlaying ? 'Pause 3D Camera / Motion' : 'Resume 3D Motion'}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#F27D26]" /> : <Play className="w-3.5 h-3.5 text-slate-400" />}
        </button>

        <button
          onClick={() => setVisualMode(prev => prev === 'cinematic' ? 'minimal' : 'cinematic')}
          title="Toggle 3D visual density"
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
};

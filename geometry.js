import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

// 👉 Canvas
const canvas = document.querySelector("canvas.webgl");

// 👉 Sizes (canvas)
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// resize function
window.addEventListener("resize", () => {
  // update fullscreen
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera
  camera.aspect = sizes.width / sizes.height;

  camera.updateProjectionMatrix();

  //update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // "2" value is best output
});

// handle fullscreen by double click
window.addEventListener("dblclick", () => {
  const fullScreen = document.fullscreenElement;
  if (!fullScreen) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

// 👉 Scene
const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);

const positionsArray = new Float32Array([
    0,0,0,
    0,1,0,
    1,0,0
])

const posAttributes = new THREE.BufferAttribute(positionsArray, 3)

const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', posAttributes)

const material = new THREE.MeshBasicMaterial({ color: "limegreen", wireframe: true });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// 👉 Camera (Perspective)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.set(0, 0, 3);
scene.add(camera);

camera.lookAt(mesh.position);

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
// controls.target.y = 1;

// 👉 Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // "2" value is best output

const tick = () => {
  controls.update(); // After change any properties in controls, always update it ⭕
  renderer.render(scene, camera); // this is must
  window.requestAnimationFrame(tick);
};

tick();

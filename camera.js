import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

console.log(OrbitControls);

// 👉 Sizes (canvas)
const sizes = {
  width: 800,
  height: 800,
};

// Cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

// 👉 Canvas
const canvas = document.querySelector("canvas.webgl");

// 👉 Scene
const scene = new THREE.Scene();

// 👉 Object
const group = new THREE.Group(); // Creating a group

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// 👉 Camera (Perspective)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// 👉 Camera (Orthographic)
// const aspect = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -2 * aspect,
//   2 * aspect,
//   2,
//   -2,
//   0.1,
//   100
// );
camera.position.set(0, 0, 3);
scene.add(camera);

camera.lookAt(mesh.position);

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 1;


// 👉 Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Gsap rotation
// gsap.to(mesh.rotation, {
//   y: 10,
//   duration: 5,
// });

const tick = () => {
  // update camera
  //   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * -3;
  //   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  //   camera.position.y = cursor.y *5;

  //   camera.lookAt(mesh.position);

  controls.update(); // After change any properties in controls, always update it ⭕
  renderer.render(scene, camera); // this is must
  window.requestAnimationFrame(tick);
};

tick();

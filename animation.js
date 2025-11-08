import gsap from "gsap";
import * as THREE from "three";

// 👉 Canvas
const canvas = document.querySelector("canvas.webgl");

// 👉 Scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// 👉 Sizes
const sizes = {
  width: 800,
  height: 600,
};

// 👉 Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// 👉 Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Time
// let time = Date.now();

// Clock
// const clock = new THREE.Clock();

// Using GSAP
gsap.to(mesh.position, {
    x: 2,
    duration: 2,
    delay: 1
})

gsap.to(mesh.rotation, {
  x: 2,
  duration: 2,
  delay: 1,
});

// Animations
const tick = () => {
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;

  //   const elapsedTime = clock.getElapsedTime();

  // update object
  //   mesh.rotation.y = elapsedTime;
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.position.y = Math.sin(elapsedTime);

  //   camera.lookAt(mesh.position)
  //   mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.position.x += 0.01;
  //   mesh.position.y += 0.01;

  renderer.render(scene, camera); // this is must

  window.requestAnimationFrame(tick);
};

tick();

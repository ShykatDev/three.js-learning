import * as THREE from "three";

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

renderer.render(scene, camera);

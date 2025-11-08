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

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);
cube1.position.y = 1;

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
cube2.position.x = 2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
cube3.position.x = -2;

group.add(cube1, cube2, cube3); // add objects into a same group

group.position.set(0, 0, -1);
group.rotation.set(0, 1, 0);

// 👉 Positions
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 0.5

mesh.position.set(0.7, -0.6, 0.5); // shorthand

// 👉 Scale
mesh.scale.set(2, 0.5, 0.5); //shorthand
// scene.add(mesh);
scene.add(group);

// 👉 Rotation
mesh.rotation.reorder("YXZ"); // order define
mesh.rotation.y = Math.PI; // pi value is good
mesh.rotation.x = Math.PI * 0.3;
mesh.rotation.z = Math.PI * 0.5;

// 👉 Axes helper
const axes = new THREE.AxesHelper(2);
scene.add(axes);

// 👉 Sizes
const sizes = {
  width: 800,
  height: 600,
};

// 👉 Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position); // look at any object from camera

// 👉 Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

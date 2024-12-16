import * as THREE from 'three';

// Scene and Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Cube
const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "green" });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Sphere
const sphereGeometry = new THREE.SphereGeometry(0.8, 30, 30); // radius: 0.5, widthSegments: 32, heightSegments: 32
const sphereMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 2; // Move to the right
scene.add(sphere);

// Cone
const coneGeometry = new THREE.ConeGeometry(0.7, 1, 32); // radius: 0.5, height: 1, radialSegments: 32
const coneMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = -2; // Move to the left
scene.add(cone);


// Torus (Donut Shape)
const torusGeometry = new THREE.TorusGeometry(0.6, 0.2, 16, 100); // radius: 0.5, tube: 0.2, radialSegments: 16, tubularSegments: 100
const torusMaterial = new THREE.MeshBasicMaterial({ color: "yellow" });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.y = 2; // Move up
scene.add(torus);

const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.8);
const dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: "cyan" });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
dodecahedron.position.set(2, -2, 0);
scene.add(dodecahedron);



// Plane (Flat Surface)
//const planeGeometry = new THREE.PlaneGeometry(5, 5); // width: 5, height: 5
//const planeMaterial = new THREE.MeshBasicMaterial({ color: "violet", side: THREE.DoubleSide });
//const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//plane.rotation.x = Math.PI / 2; // Rotate to lay flat
//plane.position.y = -1.5; // Move down
//scene.add(plane);

// Camera Position
camera.position.z = 5;

// Animation Function
function animate() {
    // Rotate Cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rotate Sphere
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;

    // Rotate Cone
    cone.rotation.x += 0.015;
    cone.rotation.y += 0.015;

    // Rotate Torus
    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;

    //Rotate dodecahedron
    dodecahedron.rotation.x += 0.005;
    dodecahedron.rotation.y += 0.005;

    renderer.render(scene, camera);
}

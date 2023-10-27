//SCREEN SAVER
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas').appendChild(renderer.domElement);

// Define your mathematical equation and generate shapes
// Generate and display the geometrical shapes
function generateShapes() {
    const numPoints = 1000; // Number of points along the spiral
    const radius = 10; // Radius of the spiral
    const height = 50; // Height of the spiral
    const numRotations = 5; // Number of rotations for the spiral

    const points = []; // Array to store the spiral points

    // Generate the points along the spiral
    for (let i = 0; i < numPoints; i++) {
        const t = (i / numPoints) * numRotations * Math.PI * 2; // Parameter for the spiral equation
        const x = radius * Math.cos(t); // X position based on the equation
        const y = i * (height / numPoints); // Y position based on the height
        const z = radius * Math.sin(t); // Z position based on the equation

        points.push(new THREE.Vector3(x, y, z));
    }

    // Create a path using the spiral points
    const path = new THREE.CatmullRomCurve3(points);

    // Define the geometry for the shape
    const geometry = new THREE.TubeGeometry(path, numPoints, 0.1, 8, false);

    // Define the material for the shape
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // Create the mesh and add it to the scene
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // TODO: Update shape positions or parameters here

    renderer.render(scene, camera);
}

// Start the animation
animate();

let idleTimer;

// Start the idle timer when there is no interaction
function startIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(showScreenSaver, 600); // 1 minute
}

// Show the screen saver and cover all content
function showScreenSaver() {
    // TODO: Hide or cover all other content on the page

    // Resize the renderer to cover the whole screen
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Generate and display the geometrical shapes
    generateShapes();

    // Start the animation
    animate();
}

// Handle user interaction
function handleInteraction() {
    // TODO: Restore the original content and hide the screen saver

    clearTimeout(idleTimer);
    startIdleTimer();
}

// Add event listeners for user interaction
window.addEventListener('mousemove', handleInteraction);
window.addEventListener('keydown', handleInteraction);

// Start the initial idle timer
startIdleTimer();
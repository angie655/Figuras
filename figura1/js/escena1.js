//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAB40FF);

//camaras
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometria

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshMatcapMaterial();
const TextureLoader = new THREE.TextureLoader();
const matcap = TextureLoader.load("./imagen/papel.jpg")

material.matcap = matcap
material.flatShading = true

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial);
scene.add(line);



camera.position.z = 5

// fin geometria

function animate() {
	requestAnimationFrame(animate);
	cube.position.x += 0.01;
	cube.position.y += 0.01;

	line.position.x += 0.01;
	line.position.y += 0.01;

	/* torusKnot.position.z = -20;
	torusKnot.position.x = 0; */
	/* line2.position.z = -20;
	line2.position.x = 0;  */

	renderer.render(scene, camera);
}
animate();
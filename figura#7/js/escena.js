 //esenaario
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xF0B4FF);


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria


const geometry = new THREE.DodecahedronGeometry(1, 0);

const material = new THREE.MeshStandardMaterial();
material.color.set("#B4FFB9")
material.metalness = 1;
material.roughness = 0.8;

const ambientalight = new THREE.AmbientLight(0xB4C5FF, 1);
scene.add(ambientalight)

const pointlight = new THREE.PointLight(0xB4E5FF, 3)
scene.add(pointlight)
pointlight.position.set(5, 5, 5)



const ring = new THREE.Mesh( geometry, material );
scene.add( ring );

camera.position.z = 3;

// funcion

function animate() {
	requestAnimationFrame( animate );
    ring.rotation.x += 0.01;
	ring.rotation.y += 0.02;


	renderer.render( scene, camera );
}
animate(); 

 
 

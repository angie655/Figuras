//esenaario
const scene = new THREE.Scene();





//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.DodecahedronGeometry(1, 5);


const textureLoader=new THREE.TextureLoader()


const material = new THREE.MeshNormalMaterial();
material.flatShading=true;

const ring = new THREE.Mesh( geometry, material );
scene.add( ring );

const edges=new THREE.EdgesGeometry(geometry);
	const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xffffff}))
	scene.add(line)  


camera.position.z = 2;

// funcion

function animate() {
	requestAnimationFrame( animate );
    ring.rotation.x += 0.004;
	ring.rotation.y += 0.005;
	
	
	line.rotation.x += 0.004;
 	line.rotation.y += 0.005; 
	
	renderer.render( scene, camera );
}
animate();
//esenaario
const scene = new THREE.Scene();

var loader= new THREE.TextureLoader();

loader.load("../imegen/muro.jpg", function(texture){
	scene.background=texture;
});



//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.DodecahedronGeometry(1, 0);


const textureLoader=new THREE.TextureLoader()

const matcap=textureLoader.load("../imegen/muro.jpg")
const material = new THREE.MeshMatcapMaterial();
material.matcap=matcap;
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
    ring.rotation.x += 0.0004;
	ring.rotation.y += 0.0005;
	ring.rotation.z += 0.0004;
	
	line.rotation.x += 0.0004;
 	line.rotation.y += 0.0005; 
	line.rotation.z += 0.0004;
	renderer.render( scene, camera );
}
animate();
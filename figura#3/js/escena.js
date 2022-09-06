//esenaario
const scene = new THREE.Scene();
var loader= new THREE.TextureLoader();

loader.load("../imegen/pp.jpg", function(texture){
	scene.background=texture;
});
//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 2, 2, 2 );

const edges=new THREE.EdgesGeometry(geometry);
	const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xFFFFFF}))
	scene.add(line)

const textureLoader=new THREE.TextureLoader()
const matcap=textureLoader.load("../imegen/agua.jpg")
const material = new THREE.MeshMatcapMaterial();
material.matcap=matcap
material.flatShading=true



const cone = new THREE.Mesh( geometry, material );
scene.add( cone );


camera.position.z = 4;


// funcion

function animate() {
	requestAnimationFrame( animate );
	cone.rotation.y += 0.02;

	line.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();
//esenaario
const scene = new THREE.Scene();

var loader= new THREE.TextureLoader();

loader.load("../imegen/finca.jpg", function(texture){
	scene.background=texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

 const edges=new THREE.EdgesGeometry(geometry);
	const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xFC8600}))
	scene.add(line) 

const textureLoader=new THREE.TextureLoader()

const matcap=textureLoader.load("../imegen/cafe.jpg")
const material = new THREE.MeshMatcapMaterial();
material.matcap=matcap
material.flatShading=true

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;


// funcion

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01; 
	cube.rotation.y += 0.02;

	line.rotation.x += 0.01; 
	line.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();
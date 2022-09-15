//esenaario
const scene = new THREE.Scene();
scene.background= new THREE.Color(0x464646);


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.SphereGeometry( 15, 32, 16 );

const edges=new THREE.EdgesGeometry(geometry);
	const line=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x23BAC4}))
	scene.add(line)

const textureLoader=new THREE.TextureLoader()

const matcap = textureLoader.load( "../imegen/raro.jpg" );
const material1 = new THREE.MeshMatcapMaterial();
material1.matcap=matcap
material1.flatShading=true

const sphere = new THREE.Mesh( geometry, material1 );
scene.add( sphere);

camera.position.z= 40;
// funcion

function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.002; 
	sphere.rotation.y += 0.001;

	line.rotation.x += 0.002; 
	line.rotation.y += 0.001;
	
	renderer.render( scene, camera );
}
animate();
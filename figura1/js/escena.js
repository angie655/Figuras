
//esenaario
const scene = new THREE.Scene();
scene.background= new THREE.Color(0xE8B6FC);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
	const geometry1 = new THREE.ConeGeometry( 15, 15, 10 );
	const edges1=new THREE.EdgesGeometry(geometry1);
	const line1 = new THREE.LineSegments(edges1,new THREE.LineBasicMaterial({color:0x23BAC4}))
	const textureLoader= new THREE.TextureLoader()
	const matcap=textureLoader.load("../imegen/papel.jpg")
	const material1 = new THREE.MeshMatcapMaterial()
	scene.add(line1)

const cone = new THREE.Mesh( geometry1, material1 );
scene.add( cone );

cone.position.x = -60
line1.position.x = -60
material1.matcap=matcap
material1.flatShading=true

//GEOMETRIA 2 torusknot

const geometry2 = new THREE.TorusKnotGeometry( 8, 2, 100, 16 );
const edges2=new THREE.EdgesGeometry(geometry2);
	const line2 = new THREE.LineSegments(edges2,new THREE.LineBasicMaterial({color:0x23BAC4}))
	const textureLoader2= new THREE.TextureLoader()
	const matcap2=textureLoader.load("../imegen/papel.jpg")
	const material2 = new THREE.MeshMatcapMaterial()
	scene.add(line2)
const torusKnot = new THREE.Mesh( geometry2, material2 );
scene.add( torusKnot ); 

torusKnot.position.x = -10
line2.position.x = -10
// fin geometria2 torusknot

//GEOMETRIA 3//
const geometry3 = new THREE.SphereGeometry( 15, 32, 16 );
const edges3=new THREE.EdgesGeometry(geometry3);
	const line3=new THREE.LineSegments(edges3,new THREE.LineBasicMaterial({color:0x23BAC4}))
	const textureLoader3=new THREE.TextureLoader()
	const matcap3= textureLoader.load( "../imegen/raro.jpg" );
	const material3 = new THREE.MeshMatcapMaterial();
scene.add(line3)
const sphere = new THREE.Mesh( geometry3, material3 );
scene.add( sphere);

sphere.position.x=80
line3.position.x=80

//geometria 4//
const geometry4 = new THREE.DodecahedronGeometry(15, 1, 2);

const edges4=new THREE.EdgesGeometry(geometry4);
const line4=new THREE.LineSegments(edges4,new THREE.LineBasicMaterial({color:0x23BAC4}))
scene.add(line4);  

const textureLoader4=new THREE.TextureLoader()
const matcap4= textureLoader.load( "../imegen/papel.jpg" );
const material4 = new THREE.MeshNormalMaterial();
material4,flatShading=true



const ring = new THREE.Mesh( geometry4, material4 );
scene.add(ring);

ring.position.x=30
line4.position.x=30
 






//DRAG CONTROLS
const controls = new THREE.DragControls( [cone, line1, torusKnot, line2,sphere,line3,ring,line4], camera, renderer.domElement );
//FIN DRAGCONTROLS

camera.position.z = 80

function animate() {
	requestAnimationFrame( animate );
	cone.rotation.x += 0.01;
	cone.rotation.y += 0.02;
	line1.rotation.x += 0.01;
	line1.rotation.y += 0.02; 

	torusKnot.rotation.x +=0.01;
	line2.rotation.x +=0.01;

	sphere.rotation.x +=0.01;
	line3.rotation.x+=0.01;

	ring.rotation.x +=0.01;
	line4.rotation.x+=0.01;

	renderer.render( scene, camera );
}
animate();
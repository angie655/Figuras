//esenaario
const scene = new THREE.Scene();
scene.background= new THREE.Color(0xE8B6FC);

var fogColor = new THREE.Color(0xFFEE85);
scene.background = fogColor; 
scene.fog = new THREE.Fog(fogColor, 0.30,8);

var loader = new THREE.TextureLoader()
loader.load("imegen/atardecer.jpg", function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFEE85} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
camera.position.z = 60;


// funcion

function animate() {
	requestAnimationFrame( animate );
    sphere.rotation.x += 0.01; 
	sphere.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();
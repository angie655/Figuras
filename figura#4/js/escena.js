//esenaario
const scene = new THREE.Scene();
scene.background= new THREE.Color(0xE8B6FC);

var fogColor = new THREE.Color(0xFFEE85);
scene.background = fogColor; 
scene.fog = new THREE.Fog(fogColor, 0.30,8);

var loader = new THREE.TextureLoader()
loader.load("imegen/colores.jpg", function(texture){
	scene.background = texture;
})


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 4;


// funcion

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01; 
	cube.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();
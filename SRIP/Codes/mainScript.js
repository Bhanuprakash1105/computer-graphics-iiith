var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize' , function () {
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize( width, height);
	camera.aspect = width / height;
});

controls = new THREE.OrbitControls(camera, renderer.domElement)

// create the shape
var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var geometry2 = new THREE.BoxGeometry(0.6, 0.1, 0.1);
var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
// create a material, color, or image structure
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
			
var shoulder_elbow = new THREE.Mesh( geometry, material);
var elbow_forearm = new THREE.Mesh( geometry2, material);
var wrist_palm = new THREE.Mesh( geometry3, material);
			
scene.add( shoulder_elbow, elbow_forearm, wrist_palm);

//To change the background color of the scene
scene.background = new THREE.Color( 0x4F4F4F);
			
shoulder_elbow.position.set(-0.05,0.15,0);
elbow_forearm.position.set(0.3,0,0);
wrist_palm.position.set(0.7,0,0);

camera.position.set(1,0.5,2);

var ambientLight = new THREE.AmbientLight(0x099556, 0.25);
scene.add(ambientLight)

var direclight = new THREE.DirectionalLight(0xffffff, 2);
direclight.position.set(2,3,0.5);
scene.add(direclight);

var direclight2 = new THREE.DirectionalLight(0xffffff, 0.8);
direclight2.position.set(-5,-6,0);
scene.add(direclight2);

// Vertical lines
var x = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( x, -y, 0));
	var vertical = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	scene.add(vertical);
	x = x - 0.1;
}

//Horizontal lines
var x = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( -x, y, 0));
	var horizontal = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	scene.add(horizontal);
	y = y - 0.1;
}

//game logic
var update = function() {
	//cube.rotation.x += 0.01
	//cube.rotation.y += 0.005
};

//draw scene
var render = function() {
	renderer.render( scene, camera);
};

//run game loop (update, render, repeat)
var GameLoop = function() {
	requestAnimationFrame(GameLoop);

	update();
	render();
};

GameLoop();

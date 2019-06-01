var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 55, (0.7*window.innerWidth) / (0.95*window.innerHeight), 0.1, 100 );

var renderer = new THREE.WebGLRenderer();
var heightScreen = 0.95*window.innerHeight;
var widthScreen = 0.7*window.innerWidth;
renderer.setSize( widthScreen, heightScreen);
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize' , function () {
	var width = 0.7*window.innerWidth;
	var height = 0.95*window.innerHeight;
	renderer.setSize( width, height);
	camera.aspect = width / height;
});

controls = new THREE.OrbitControls(camera, renderer.domElement)

// create the shape
var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
// create a material, color, or image structure
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
			
var shoulder_elbow = new THREE.Mesh( geometry, material);
var elbow_forearm = new THREE.Mesh( geometry2, material);
var wrist_palm = new THREE.Mesh( geometry3, material);
			
scene.add( shoulder_elbow, elbow_forearm, wrist_palm);

//To change the background color of the scene
scene.background = new THREE.Color( 0x4F4F4F);
	
//To set the position of objects,camera and lightSource		
shoulder_elbow.position.set(0.05,-0.2,0);
elbow_forearm.position.set(0.35,-0.35,0);
wrist_palm.position.set(0.9,-0.35,0);

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

//X-axis red line 
var X = new THREE.Geometry();
var x_material = new THREE.LineBasicMaterial({color: 'red'});
X.vertices.push(new THREE.Vector3( -0.6, 0, 0));
X.vertices.push(new THREE.Vector3(0.6, 0, 0));
var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
scene.add(X_direction);

//Y-axis green line 
var Y = new THREE.Geometry();
var y_material = new THREE.LineBasicMaterial({color: 0x3EF70F});
Y.vertices.push(new THREE.Vector3( 0, 0.6, 0));
Y.vertices.push(new THREE.Vector3(0, -0.6, 0));
var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
scene.add(Y_direction);

//Z-axis blue line
var Z = new THREE.Geometry();
var z_material = new THREE.LineBasicMaterial({color: 0x3CEFF1});
Z.vertices.push(new THREE.Vector3( 0, 0, -0.6));
Z.vertices.push(new THREE.Vector3(0, 0, 0.6));
var Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
scene.add(Z_direction);

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.55,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.55,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.55);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.55);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

									//   EXTRA ARROWS

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.15,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.15,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.15);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.15);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

// Text at Origin


													//GAME LOGIC

var update = function() {
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

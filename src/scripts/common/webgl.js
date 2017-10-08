const web = (function() {
  return {
    init: function() {
      const thisElem = this;
      let container;
      let camera, scene, renderer;
      let uniforms;
      let mouse = {x:0, y:0};
      let loader = new THREE.TextureLoader();
      document.onmousemove = getMouseXY;

      init();

      animate();
      function getMouseXY(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        uniforms.u_mouse.value.x = mouse.x;
        uniforms.u_mouse.value.y = mouse.y;
      }
      function init() {
        container = document.getElementById( 'bg' );
                
        camera = new THREE.Camera();
        camera.position.z = 1;
        scene = new THREE.Scene();
        var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

        var MyTexture = loader.load( './assets/img/water.jpg' );

        uniforms = {
          u_time: { type: 'f', value: 1.0 },
          u_animation: { type: 'f', value: 0.0 },
          u_mouse: { type: 'v2', value: new THREE.Vector2() },
          u_resolution: { type: 'v2', value: new THREE.Vector2() },
          u_size: {type:'v2',value: new THREE.Vector2(MyTexture.image.width,MyTexture.image.height) },
          texture: {value:MyTexture },
          map: {value:loader.load( './assets/img/water-maps.jpg' ) },
        };
        var material = new THREE.ShaderMaterial( {
          uniforms: uniforms,
          vertexShader: thisElem.vertexShader(),
          fragmentShader: thisElem.fragmentShader(),
        } );
        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
                
        container.appendChild( renderer.domElement );
        onWindowResize();
        window.addEventListener( 'resize', onWindowResize, false );
      }
      function onWindowResize( event ) {
        renderer.setSize( window.innerWidth, window.innerHeight );
        uniforms.u_resolution.value.x = renderer.domElement.width;
        uniforms.u_resolution.value.y = renderer.domElement.height;
        uniforms.u_mouse.value.x = mouse.x;
        uniforms.u_mouse.value.y = mouse.y;
      }
      function animate() {
        requestAnimationFrame( animate );
        render();
      }
      function render() {
        uniforms.u_time.value += 0.05;
        renderer.render( scene, camera );
      }
    },
    vertexShader: function(){
      varying vec2 vUv;
      uniform vec2 u_size;
      uniform vec2 u_resolution;
      void main() {
        vUv = (position.xy+1.0)*0.5;
        gl_Position =  vec4(position, 1.0);
      }
    },
    fragmentShader: function(){
      varying vec2 vUv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_animation;
      uniform float u_time;
      uniform sampler2D texture;
      uniform sampler2D map;
      uniform sampler2D text;

      void main() {
        float parallax = ((u_mouse.x/u_resolution.x) - 0.5)*0.01;
        // 1
        //vec2 st = gl_FragCoord.xy/u_resolution.xy;
        // 2
          //gl_FragColor = vec4(abs(sin(u_time)),1.0,0.0,1.0);
          // gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);
          float map = texture2D(map,vUv).r*u_animation;
          //3
          float distort = sin(vUv.y*100.0 + u_time) * 0.001 + parallax;
          vec4 color = texture2D(texture,vec2(vUv.x + distort*map,vUv.y));
          gl_FragColor = vec4(map*vec3(color.g + color.r + color.g)/3.0 + (1.0-map)*color.rgb, 1.0);
          //gl_FragColor = vec4(color.rgb, 1.0);
      }
    }
  };
}());

module.exports = web;
import { useEffect } from "react";
import * as THREE from "three";
import HelvetikerFont from 'three/examples/fonts/helvetiker_regular.typeface.json';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export default function Custom404() {

  function updatePositions(mesh) {
    // const positions = mesh.geometry.attributes.position.array;
    // let x = 0, y = 0;
    // x += (Math.random() - 0.5) * 30;
    // y += (Math.random() - 0.5) * 30;

    // positions[0] = x;
    // positions[1] = y;

    // console.log("x:", mesh.position.x);
    // console.log("y:", mesh.position.y);

    // if (mesh.position.x < 50) {
    //   mesh.position.x = mesh.position.x + 1;
    // } else {
    //   mesh.position.x = mesh.position.x - 1;
    // }

    // if (mesh.position.y < 50) {
    //   mesh.position.y = mesh.position.y + 1;
    //   if (mesh.position.y === 50) return true;
    // } else {
    //   mesh.position.y = mesh.position.y - 1;
    //   if (mesh.position.y === -50) return true;
    // }
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const fontLoader = new FontLoader();
    const font = fontLoader.parse(HelvetikerFont);
    const geometry = new TextGeometry('404 Page Not Found', {
      font: font,
      size: 6,
      height: 0,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.05,
      bevelSegments: 3,
    });
    const material = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let MOVING_UNITS_LEFT = 240;
    function animate() {
      requestAnimationFrame(animate);
      
      if (MOVING_UNITS_LEFT < 0) {
        mesh.position.x = 120;
        MOVING_UNITS_LEFT = 480;
      }

      if (MOVING_UNITS_LEFT >= 0) {
        mesh.position.x -= 0.5;
        MOVING_UNITS_LEFT--;
      }
      
      // if (MOVING_UNITS_LEFT === 0 && MOVING_UNITS_RIGHT > 0) {
      //   mesh.position.x++;
      //   MOVING_UNITS_RIGHT--;
      // }
      
      // MOVING_UNITS_LEFT = 50;
      // MOVING_UNITS_RIGHT = 100;
      // updatePositions(mesh);
      // geometry.computeBoundingBox();
      // mesh.geometry.attributes.position.needsUpdate = true; // required after the first render
      // mesh.lookAt(camera.position);
      
      renderer.render(scene, camera);
    }
    animate();
  });

  return "";
}

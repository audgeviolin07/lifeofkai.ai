import React from "react";
import { View } from "react-native";
import Expo from "expo";
import { Mesh, MeshBasicMaterial, PerspectiveCamera, BoxGeometry } from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
import { StatusBar } from "expo-status-bar";
import { SphereGeometry } from "three/src/geometries/SphereGeometry";

const ThreeJSComponent = () => {
  let scene; // Declare the scene variable

  const onContextCreate = async (gl) => {
    // three.js implementation.
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background color to black

    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      1000
    );
    gl.canvas = {
      width: gl.drawingBufferWidth,
      height: gl.drawingBufferHeight,
    };

    // Set camera position away from the sphere
    camera.position.z = 58;

    const renderer = new Renderer({ gl });
    // Set size of buffer to be equal to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Create sphere
    const geometry = new SphereGeometry(15, 32, 16);
    const material = new MeshBasicMaterial({
      color: 0x00C5A8, // Pink color, turned green
      wireframe: true,
      wireframeLinewidth: 3,
    });

    const sphere = new Mesh(geometry, material);

    // Add sphere to scene
    scene.add(sphere);

    // Create render function
    const render = () => {
      requestAnimationFrame(render);
      // Create rotate functionality
      // Rotate around x axis
      sphere.rotation.x += 0.000;

      // Rotate around y axis
      sphere.rotation.y += 0.004;

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5,5,5)

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)

    // Call render
    render();

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25);
      const material = new THREE.MeshStandardMaterial({ color: 0xFFFF99 });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(200).fill().forEach(addStar);
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView
        onContextCreate={onContextCreate}
        style={{ flex: 1 }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default ThreeJSComponent;
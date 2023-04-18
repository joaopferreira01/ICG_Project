import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

let obj_modeled1, obj_modeled2, obj_modeled3, obj_modeled4, obj_modeled5, obj_modeled6;

const scene = new THREE.Scene();
const gltfLoader = new GLTFLoader();

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(
    35,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);
camera.position.set(0, -1000, 500); // altera a posição da câmera
camera.lookAt(new THREE.Vector3(0, -100, 0)); // ajusta o alvo da câmera

function load_model(callback) {
    gltfLoader.load('assets/house_1/scene.gltf', (gltfScene) => {
        obj_modeled1 = gltfScene;
        console.log(obj_modeled1);
        obj_modeled1.scene.position.set(-10, 300, 10)  // change position
        obj_modeled1.scene.rotation.x = Math.PI / 2
        // obj_modeled.scene.rotation.y = Math.PI/-4
        obj_modeled1.scene.scale.set(10, 10, 10);
        let shadows_house;
        obj_modeled1.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled1.scene);
        if (callback) {
            callback();
        }
    });
}

function load_model2(callback) {
    gltfLoader.load('assets/statue/scene.gltf', (gltfScene) => {
        obj_modeled2 = gltfScene;
        console.log(obj_modeled2);
        obj_modeled2.scene.position.set(-40, -730, 100)  // change position
        // obj_modeled2.scene.rotation.x = Math.PI/2
        let shadows_house;
        obj_modeled2.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled2.scene);
        if (callback) {
            callback();
        }
    });
}



function load_model3(callback) {
    gltfLoader.load('assets/restaurant/scene.gltf', (gltfScene) => {
        obj_modeled3 = gltfScene;
        console.log(obj_modeled3);
        obj_modeled3.scene.position.set(400, -270, 0)  // change position
        obj_modeled3.scene.rotation.x = Math.PI / 2
        obj_modeled3.scene.rotation.y = Math.PI / 1.5
        let shadows_house;
        obj_modeled3.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled3.scene);
        if (callback) {
            callback();
        }
    });
}

function load_model4(callback) {
    gltfLoader.load('assets/foodboard/scene.gltf', (gltfScene) => {
        obj_modeled4 = gltfScene;
        console.log(obj_modeled4);
        obj_modeled4.scene.position.set(350, -220, 0)  // change position
        obj_modeled4.scene.rotation.x = Math.PI / 2
        obj_modeled4.scene.rotation.y = Math.PI / 6
        obj_modeled4.scene.scale.set(0.25, 0.25, 0.25);
        let shadows_house;
        obj_modeled4.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled4.scene);
        if (callback) {
            callback();
        }
    });
}

function load_model5(callback) {
    gltfLoader.load('assets/highway_sign/scene.gltf', (gltfScene) => {
        obj_modeled5 = gltfScene;
        console.log(obj_modeled5);
        obj_modeled5.scene.position.set(-380, 0, 10)  // change position
        obj_modeled5.scene.rotation.x = Math.PI / 2
        obj_modeled5.scene.rotation.y = Math.PI / 1.1
        obj_modeled5.scene.scale.set(15, 15, 15);
        let shadows_house;
        obj_modeled5.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled5.scene);
        if (callback) {
            callback();
        }
    });
}

function load_model6(callback) {
    gltfLoader.load('assets/bank/scene.gltf', (gltfScene) => {
        obj_modeled6 = gltfScene;
        console.log();
        obj_modeled6.scene.position.set(350, 250, 40)  // change position
        obj_modeled6.scene.rotation.x = Math.PI / 2
        obj_modeled6.scene.rotation.y = -Math.PI / 5
        obj_modeled6.scene.scale.set(0.25, 0.25, 0.25);
        let shadows_house;
        obj_modeled6.scene.traverse((child) => {
            if (child.isMesh) {
                shadows_house = child
                shadows_house.castShadow = true
            }
        })
        scene.add(obj_modeled6.scene);
        if (callback) {
            callback();
        }
    });
}


export {
    load_model,
    obj_modeled1,
    load_model2,
    obj_modeled2,
    load_model3,
    obj_modeled3,
    load_model4,
    obj_modeled4, 
    load_model5,
    obj_modeled5,
    load_model6,
    obj_modeled6
};



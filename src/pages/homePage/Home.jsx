import styles from "./Home.module.css";
import githubImg from "../../assets/github-brands-solid.svg";
import linkedInImg from "../../assets/linkedin-brands-solid.svg";
import instagramImg from "../../assets/instagram-brands-solid.svg";
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useEffect, useRef } from "react";
import modelPath from '../../assets/cyborg-3d-model.glb';

export const Home = () => {

    const modeldiv = useRef(null);

    useEffect(()=>{
    const modelContainer = modeldiv.current;
    if (!modelContainer) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, modelContainer.clientWidth / modelContainer.clientHeight, 0.1, 1000);
    let object;
    const loader = new GLTFLoader();
    loader.load(
        modelPath,
        (gltf)=>{
            object=gltf.scene;
            scene.add(object);
        },
        (xhr)=>{
            console.log((xhr.loaded/xhr.total * 100)+'% loaded');
        },
        function(error){
            console.log(error);
        }
    );

    const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
    renderer.setPixelRatio(window.devicePixelRatio); 
    renderer.setSize(modelContainer.clientWidth, modelContainer.clientHeight);
    modelContainer.appendChild(renderer.domElement);
    camera.position.z = 1;

    const toplight = new THREE.DirectionalLight(0xffffff,5);
    toplight.position.set(0,0,5);
    toplight.castShadow = true;
    scene.add(toplight);

    function animate() {
    requestAnimationFrame(animate);
    if (object) object.rotation.y += 0.009;
    renderer.render(scene, camera);
    }
    animate();

     return () => {
      renderer.dispose();
      modelContainer.removeChild(renderer.domElement);
    };

    },[]);

    return <section id="home" className={styles.Hero}>
        <div className= {styles.textdiv}>
            <div className={styles.text1}><p>Namaste</p></div>
            <div className={styles.text2}><p>You have just landed on my Portfolio</p></div>
            <div className={styles.text3}><h1>Hi! I'm Yashas mr</h1></div>
            <div className={styles.text4}><p>Student</p></div>
            <div className={styles.socialIcons}>
            <img src={githubImg} alt="Github" />
            <img src={linkedInImg} alt="Linkedin" />
            <img src={instagramImg} alt="Instagram" />
            </div>
            <div className={styles.buttonBox}>
               <button className={styles.button}>
                    <a href="#contact">Let's connect  <i class="fa-solid fa-caret-right"></i></a>
                </button>
                <button>
                    <a href="#project">See projects  <i class="fa-solid fa-caret-right"></i></a>
                </button>
            </div>
        </div>
        <div ref={modeldiv} className={styles.modeldiv}></div>
    </section>
};
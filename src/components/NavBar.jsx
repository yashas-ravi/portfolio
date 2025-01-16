import React from "react";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    

    const handleMenu = () => {
        const menu = document.getElementById('menu');
       
        
        if(menu.style.display === "flex"){
            menu.style.display = "none";
        }
        else{
            menu.style.display = "flex";
        }
    }


    return <nav className = {styles.nav}>
        <img src={logo} alt="logo" className="img"/>
            <ul id="menu" className = {styles.ul}>
            <div className={styles.closeMenu}><i class="fa-solid fa-xmark" onClick={()=>handleMenu()}></i></div>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.menuBtn}>
             <i class="fa-solid fa-bars" onClick={()=>handleMenu()}></i>
            </div>
    </nav>
};
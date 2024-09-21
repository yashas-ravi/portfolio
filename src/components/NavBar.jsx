import React from "react";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return <nav className = {styles.nav}>
        <img src={logo} alt="logo" className="img"/>
            <ul className = {styles.ul}>
                <li className = {styles.li}><a href="#about" className = {styles.a}>About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
    </nav>
};
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {

    const [sectionName, setSectionName] = useState("portfolio");

    const handleSectionname=()=>{
        const position = window.scrollY;
        if(position>=0 && position<=500){
            setSectionName("portfolio");
        }
        else if(position>=501 && position<=1100){
            setSectionName("About");
        }
        else if(position>=1101 && position<=1800){
            setSectionName("Skills");
        }
        else if(position>=1801 && position<=2600){
            setSectionName("Projects");
        }
        else if(position>=2601){
            setSectionName("Contact");
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleSectionname);
    },[])
    

    return <nav className = {styles.nav}>
        <div className={styles.navContainer}>
        <img src={logo} alt="logo" className="img"/>
        <div className={styles.sectionName}>
            <p id="demo">{sectionName}</p>
        </div>
        </div>
    </nav>
};
import styles from './Home.module.css';
import { NavBar } from './NavBar';
import { Hero } from './Hero';

function Home(){
    return (
        <div className={styles.Home}>
         <NavBar />
         <Hero />
        </div>
    );
}

export default Home;
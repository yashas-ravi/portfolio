import {Home} from './pages/homePage/Home';
import {NavBar} from './components/NavBar';
import {About} from './pages/aboutPage/About';
import {Skill} from './pages/skillPage/Skill';
import {Project} from './pages/projectpage/Project';
import {Contact} from './pages/contactPage/Contact';
import styles from './App.module.css';

function App(){

    return (
        <div className={styles.App}>
            <NavBar/>
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
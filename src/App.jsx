import Home from './components/homePage/Home';
import {About} from './components/aboutPage/About';
import {Skill} from './components/skillPage/Skill';
import {Project} from './components/projectpage/Project';
import styles from './App.module.css';

function App(){
    return (
        <div className={styles.App}>
            <Home/>
            <About/>
            <Skill/>
            <Project />
        </div>
    );
}

export default App;
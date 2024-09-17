import Home from './components/homePage/Home';
import {About} from './components/aboutPage/About';
import {Skill} from './components/skillPage/Skill';
import styles from './App.module.css';

function App(){
    return (
        <div className={styles.App}>
            <Home/>
            <About/>
            <Skill/>
        </div>
    );
}

export default App;
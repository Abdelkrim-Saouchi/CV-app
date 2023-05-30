import './App.css';
import Photo from './components/Photo';
import GeneralInfo from './components/GeneralInfo';
import NavSection from './components/NavSection';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Photo />
      <GeneralInfo />
      <NavSection title="PROFILE" />
      <Profile />
      <NavSection title="EXPERIENCE" />
      <Experience />
      <NavSection title="EDUCATION" />
      <Education />
    </div>
  );
}

export default App;

import './App.css';
import "./styles.css"
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillList';
import { useState } from 'react';
// import SkillListItem from './SkillListItem';



function App() {
  
  const [showSkills, setShowSkills] = useState(true)

  function addSkill(skill) {
    setSkills([...skills, skill])
  }
  
  const [skills, setSkills] = useState([
    {name: 'HTML', level: 5},
    {name: 'CSS', level: 5},
    {name: 'JAVASCRIPT', level: 5},
    {name: 'PYTHON', level: 5},

  ]) 
 
  

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {showSkills &&<SkillList skills = {skills}/>} 
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />
      
    </div>
  );
}

export default App;

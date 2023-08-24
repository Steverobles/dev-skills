// import { useState } from "react";
// import "./NewSkillForm.css"

// export default function NewSkillForm({addSkill}) {
//     const [newSkill, setNewSkill] = useState({
//         name: '',
//         level: 3
//     });

//     function handleAddSkill(evt) {
//         evt.preventDefault();
//         addSkill(newSkill)
//         setNewSkill('')
//     }

//     return(
//         <>
//         <form className="NewSkillForm" onSubmit={handleAddSkill}>
//             <label>Skill</label>
//             <input 
//                 type="text" 
//                 onChange={(evt) => setNewSkill(evt.target.value)}
//                 value={newSkill.name}
//                 placeholder="Add Skill"
//                 required
//                 pattern=".{4,}"
//             />
            
//             <label>Level</label>
//             <select name="" id="">
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//             <option value={5}>5</option>
//             </select>
//             <button type="submit">ADD SKILL</button>
//         </form>
//         </>
//     );
// }
import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 3,
  });

  function handleAddSkill(evt) {
    evt.preventDefault();
    addSkill(newSkill);
    setNewSkill({
      name: "",
      level: 3,
    }); // Reset the form after adding a skill
  }

  return (
    <>
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label>Skill</label>
        <input
          type="text"
          onChange={(evt) =>
            setNewSkill({
              ...newSkill, // Keep existing properties
              name: evt.target.value, // Update only the 'name' property
            })
          }
          value={newSkill.name}
          placeholder="Add Skill"
          required
          pattern=".{4,}"
        />

        <label>Level</label>
        <select
          name="level"
          id="level"
          onChange={(evt) =>
            setNewSkill({
              ...newSkill, // Keep existing properties
              level: parseInt(evt.target.value), // Update only the 'level' property
            })
          }
          value={newSkill.level}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    </>
  );
}

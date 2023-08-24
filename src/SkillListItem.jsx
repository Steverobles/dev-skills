import './SkillListItem.css'



export default function SkillListItem({ skill, index }) {
  return (
    <li className="SkillListItem">
      Skill {index + 1}: {skill.name} (Level: {skill.level})
    </li>
  );
}

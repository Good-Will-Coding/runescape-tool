import React from "react";

const Skills = props => {
  return (
    <div>
      {props.totalSkills.map(skill => {
        return <div key={skill.agility}>
        Agility Level: {skill.agility.level}
        Agility XP: {skill.agility.xp}
        Attack Level: {skill.attack.level}
        </div>;
      })}
    </div>
  );
};

export default Skills;

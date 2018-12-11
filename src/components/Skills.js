import React from "react";

const Skills = props => {
  return (
    <div>
      {props.totalSkills.map(skill => {
        return (
          <table key={skill} className="table">
            <thead className="tablehead">
              <tr>
                <th>Skill</th>
                <th>Level</th>
                <th>XP</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Overall</td>
                <td>{skill.overall.level}</td>
                <td>{skill.overall.xp}</td>
              </tr>
              <tr>
                <td> <img className="skill_img" src="https://imgur.com/h0NH6SI.png" alt="attack--icon"/> Attack</td>
                <td>{skill.attack.level}</td>
                <td>{skill.attack.xp}</td>
              </tr>
              <tr>
                <td> <img className="skill_img" src="https://imgur.com/KAN4Xzu.png" alt="strength-icon"/> Strength</td>
                <td>{skill.strength.level}</td>
                <td>{skill.strength.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/FRxAJh8.png" alt="defense-icon"/>Defence</td>
                <td>{skill.defence.level}</td>
                <td>{skill.defence.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/mFmNj1s.png" alt="-icon"/>Ranged</td>
                <td>{skill.ranged.level}</td>
                <td>{skill.ranged.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/0sFmHoj.png" alt="-icon"/>Prayer</td>
                <td>{skill.prayer.level}</td>
                <td>{skill.prayer.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/70ICmRL.png" alt="-icon"/>Magic</td>
                <td>{skill.magic.level}</td>
                <td>{skill.magic.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/PASUI60.png" alt="-icon"/>Runecraft</td>
                <td>{skill.runecraft.level}</td>
                <td>{skill.runecraft.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/ljbUGL1.png" alt="-icon"/>Construction</td>
                <td>{skill.construction.level}</td>
                <td>{skill.construction.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/jo7X6DH.png" alt="-icon"/>Hitpoints</td>
                <td>{skill.hitpoints.level}</td>
                <td>{skill.hitpoints.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/5VqUzRk.png" alt="-icon"/>Agility</td>
                <td>{skill.agility.level}</td>
                <td>{skill.agility.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/yTFwTDZ.png" alt="-icon"/>Herblore</td>
                <td>{skill.herblore.level}</td>
                <td>{skill.herblore.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/MTzl4J6.png" alt="-icon"/>Thieving</td>
                <td>{skill.thieving.level}</td>
                <td>{skill.thieving.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/QmotnOs.png" alt="-icon"/>Crafting</td>
                <td>{skill.crafting.level}</td>
                <td>{skill.crafting.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/XjHEsEH.png" alt="-icon"/>Fletching</td>
                <td>{skill.fletching.level}</td>
                <td>{skill.fletching.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/X02Erf8.png" alt="-icon"/>Slayer</td>
                <td>{skill.slayer.level}</td>
                <td>{skill.slayer.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/DbAdwzU.png" alt="-icon"/>Hunter</td>
                <td>{skill.hunter.level}</td>
                <td>{skill.hunter.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/FChBIFT.png" alt="-icon"/>Mining</td>
                <td>{skill.mining.level}</td>
                <td>{skill.mining.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/71V311C.png" alt="-icon"/>Smithing</td>
                <td>{skill.smithing.level}</td>
                <td>{skill.smithing.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/D6JHuAC.png" alt="-icon"/>Fishing</td>
                <td>{skill.fishing.level}</td>
                <td>{skill.fishing.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/kxdZ4eK.png" alt="-icon"/>Cooking</td>
                <td>{skill.cooking.level}</td>
                <td>{skill.cooking.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/tFr3ow9.png" alt="-icon"/>Firemaking</td>
                <td>{skill.firemaking.level}</td>
                <td>{skill.firemaking.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/0zhb5yg.png" alt="-icon"/>Woodcutting</td>
                <td>{skill.woodcutting.level}</td>
                <td>{skill.woodcutting.xp}</td>
              </tr>
              <tr>
                <td><img className="skill_img" src="https://imgur.com/XbdHsjl.png" alt="-icon"/>Farming</td>
                <td>{skill.farming.level}</td>
                <td>{skill.farming.xp}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Skills;

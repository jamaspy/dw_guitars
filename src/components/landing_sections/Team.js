import React from "react";
import * as teamStyles from "../../scss/team.module.scss";
import { team_members } from "../../data/team_members";
import TeamMember from "../../components/styled_components/TeamMember";
const Team = () => {
  return (
    <main className={teamStyles.container}>
      {team_members.map((person, index) => (
        <TeamMember key={index} name={person.name} bio={person.bio} />
      ))}
    </main>
  );
};

export default Team;

import React from "react";
import * as teamStyles from "../../scss/team.module.scss";
const TeamMember = ({ name, bio }) => {
  return (
    <div className={teamStyles.avatar_main_container}>
      <div className={teamStyles.avatar_image} />
      <h3 className={teamStyles.avatar_name}>{name}</h3>
      <p className={teamStyles.avatar_bio}>{bio}</p>
    </div>
  );
};

export default TeamMember;

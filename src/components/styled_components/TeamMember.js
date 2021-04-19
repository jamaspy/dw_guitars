import React from "react";
import * as teamStyles from "../../scss/team.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
const TeamMember = ({ name, bio, avatar }) => {
  return (
    <div className={teamStyles.avatar_main_container}>
      <div className={teamStyles.avatar_image}>
        <GatsbyImage image={avatar} alt={name} className={teamStyles.image} />
      </div>
      <h3 className={teamStyles.avatar_name}>{name}</h3>
      <p className={teamStyles.avatar_bio}>{bio}</p>
    </div>
  );
};

export default TeamMember;

import React from "react";
import * as teamStyles from "../../scss/team.module.scss";
import TeamMember from "../../components/styled_components/TeamMember";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTutor {
        nodes {
          id
          bio
          name
          avatar {
            id
            contentful_id
            gatsbyImageData(placeholder: TRACED_SVG, quality: 90)
          }
        }
      }
    }
  `);
  const contentfulData = data.allContentfulTutor.nodes;
  return (
    <main className={teamStyles.main}>
      <div className={teamStyles.title_container}>Meet Your Instructors</div>
      <div className={teamStyles.container}>
        {contentfulData.map((i, j) => {
          const avatar = getImage(i.avatar);
          return (
            <TeamMember key={i.id} name={i.name} bio={i.bio} avatar={avatar} />
          );
        })}
      </div>
    </main>
  );
};

export default Team;

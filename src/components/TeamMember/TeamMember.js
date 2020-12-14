import React from "react";
import T from "prop-types";
import "./TeamMember.css";

const TeamMember = ({ member, ...props }) => {
  const { avatar, thought, thoughtDirection } = member;

  return (
    <div {...props} className={`member ${props.className}`}>
      <div className="member__content">
        <span className={`point__cloud point__cloud__${thoughtDirection}`}>
          {thought}
        </span>
        <img src={avatar} alt={thought} />
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: T.shape({
    id: T.string,
    avatar: T.string,
    thought: T.string,
    thoughtDirection: T.string,
  }).isRequired,
};

export default TeamMember;

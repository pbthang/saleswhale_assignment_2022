import React from "react";
import TeamCard from "./TeamCard";

function TeamPage({ title, teams, total }) {
  return (
    <div className="teams__container">
      <div className="teams">
        <div className="teams__header">
          <span className="teams__title">{title}</span>
          <span className="teams__searchResult">
            Showing {teams.length} out of {total} team{total !== 1 && "s"}
          </span>
        </div>
        <div className="teams__content">
          {teams.map((t) => (
            <TeamCard team={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;

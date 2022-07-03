import React from "react";

function TeamCard({ team }) {
  return (
    <div className="teams__card">
      <div className="teams__teamInfo">
        <div className="teams__teamHeader">
          <img className="teams__teamImg" src={team.image} alt={team.name} />
          <div className="teams__nameAndDate">
            <div className="teams__name">{team.name}</div>
            <div className="teams__date">{team.created_at}</div>
          </div>
          {team.is_favorited ? (
            <img
              className="teams__star"
              src="icons/star-active.svg"
              alt="favorite"
            />
          ) : (
            <img
              className="teams__star"
              src="icons/star-default.svg"
              alt="not favorite"
            />
          )}
        </div>
        <div className="teams__description">{team.description}</div>
      </div>
      <div className="teams__teamData">
        <div className="teams__campaigns">
          <img src="/icons/icon-conversations-small.svg" alt="" />
          <span>
            {team.campaigns_count} campaign{team.campaigns_count !== 1 && "s"}
          </span>
        </div>
        <div className="teams__leads">
          <img src="/icons/icon-leads-small.svg" alt="" />
          <span>
            {team.leads_count} lead{team.leads_count !== 1 && "s"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

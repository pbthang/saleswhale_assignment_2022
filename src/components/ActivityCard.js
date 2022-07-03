import React from "react";

function ActivityCard({ activity }) {
  return (
    <div className="activity__card">
      <div className="activity__imgContainer">
        <img src={activity.person.avatar} alt={activity.person.name} />
      </div>
      <div className="activity__cardContent">
        <div className="activity__action">{getActivityLine(activity)}</div>
        <div className="activity__date">{activity.created_at}</div>
      </div>
    </div>
  );
}

const getActivityLine = (activity) => {
  switch (activity.action) {
    case "increased_quota":
      return (
        <div>
          <b>{activity.person.name}</b> increased <b>{activity.target}</b>'s
          quota
        </div>
      );
    case "added_leads":
      return (
        <div>
          <b>{activity.person.name}</b> added new leads to{" "}
          <b>{activity.target}</b>
        </div>
      );
    case "archived_team":
      return (
        <div>
          <b>{activity.person.name}</b> archived the team{" "}
          <b>{activity.target}</b>
        </div>
      );
    default:
      break;
  }
};

export default ActivityCard;

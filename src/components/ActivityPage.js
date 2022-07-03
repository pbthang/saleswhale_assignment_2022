import React from "react";
import ActivityCard from "./ActivityCard";

function ActivityPage({ activities }) {
  return (
    <div className="activity__container">
      <div className="activity">
        <div className="activity__header">
          <span className="activity__title">Activity</span>
        </div>
        <div className="activity__content">
          {activities.map((a) => (
            <ActivityCard activity={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;

import React from "react";

function Header({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="header">
      <div className="header__head">
        <span className="header__title">
          <img
            className="header__iconTitle"
            src="/icons/icon-teams.svg"
            alt=""
          />{" "}
          Teams
        </span>
        <button className="header__btn">
          <img className="header__iconPlus" src="/icons/icon-plus.svg" alt="" />{" "}
          CREATE NEW TEAM
        </button>
      </div>
      <div className="header__bottom">
        <span className="header__tabs">
          {tabs.map((t, idx) => (
            <button
              className={`header__tab ${idx === activeTab && "active"}`}
              onClick={() => setActiveTab(idx)}
            >
              {t}
            </button>
          ))}
        </span>
        <span className="header__search">
          <label htmlFor="teamSearchbar">
            <img src="/icons/icon-search.svg" alt="Search" />
          </label>
          <input id="teamSearchbar" placeholder="Search team name ..." />
        </span>
      </div>
    </div>
  );
}

export default Header;

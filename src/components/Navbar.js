import React from "react";

function Navbar({ user }) {
  return (
    <div className="nav__navbar">
      <span>
        <span className="nav__appName">NARWHAL</span>
        <span className="nav__breadcrumbs">Teams</span>
      </span>
      <span className="nav__menu">
        <span className="nav__noti" data-count={user.notifications_count}>
          <img src="/icons/icon-mail.svg" alt="noti" />
        </span>
        <span className="nav__username">Hello, {user.name}</span>
        <span className="nav__userMenu">
          <img className="nav__avatar" src={user.avatar} alt={user.name} />
          <img className="nav__caret" src="/icons/caret-down.svg" alt="menu" />
        </span>
      </span>
    </div>
  );
}

export default Navbar;

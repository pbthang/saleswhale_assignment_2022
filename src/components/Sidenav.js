function Sidenav({ children }) {
  return (
    <nav className="nav__sidenav">
      <div className="nav__logo">
        <img src="/icons/sw-logo-white.svg" alt="Logo" />
      </div>
      <NavItem iconSrc="/icons/icon-campaign.svg" alt="campaign" />
      <NavItem iconSrc="/icons/icon-teams.svg" alt="teams" isActive />
      <NavItem iconSrc="/icons/icon-leads.svg" alt="leads" />
      <NavItem iconSrc="/icons/icon-reports.svg" alt="reports" />
      <div className="nav__help">
        <img src="/icons/icon-help.svg" alt="help" />
      </div>
    </nav>
  );
}

function NavItem({ iconSrc, alt, isActive }) {
  return (
    <div className={`nav__navItem ${isActive && "active"}`}>
      <img src={iconSrc} alt={alt} />
    </div>
  );
}

export default Sidenav;

import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import TeamPage from "./components/TeamPage";
import ActivityPage from "./components/ActivityPage";

function App() {
  const data = require("./data.json");
  const headerTabs = ["All", "Favorites", "Archived"];
  const tabTitles = ["All Teams", "Favorite Teams", "Archived Teams"];

  const [activeHeaderTab, setActiveHeaderTab] = useState(0);

  const filterTeams = (teams, activeTab) => {
    switch (activeTab) {
      case 0:
        return teams;
      case 1:
        return teams.filter((t) => t.is_favorited);
      case 2:
        return teams.filter((t) => t.is_archived);
      default:
        return [];
    }
  };

  return (
    <div className="App">
      <Sidenav />
      <Navbar user={data.current_user} />
      <Header
        tabs={headerTabs}
        activeTab={activeHeaderTab}
        setActiveTab={setActiveHeaderTab}
      />
      <div className="content">
        <TeamPage
          title={tabTitles[activeHeaderTab]}
          teams={filterTeams(data.teams, activeHeaderTab)}
          total={data.teams.length}
        />
        <ActivityPage activities={data.activities} />
      </div>
    </div>
  );
}

export default App;

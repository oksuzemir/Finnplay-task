import React, { useState } from "react";
import { GameFilters, GameList, Header } from "./components";
import GamesList from "../../data.json";

const MainList = () => {
  const [filteredGames, setFilteredGames] = useState([]);

  return (
    <div>
      <Header />
      <div className={"games-section"}>
        <GameList
          filteredGames={filteredGames}
          setFilteredGames={setFilteredGames}
          GamesList={GamesList}
        />
        <GameFilters
          filteredGames={filteredGames}
          setFilteredGames={setFilteredGames}
          GamesList={GamesList}
        />
      </div>
    </div>
  );
};

export default MainList;

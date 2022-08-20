import React, { useEffect, useRef, useState } from "react";
import ChipFilters from "./ChipFilters";
import FilterFooter from "./FilterFooter";
import HamburgerMenu from "./HamburgerMenu";
import SearchInput from "./SearchInput";

const GameFilters = (props) => {
  const { GamesList, filteredGames, setFilteredGames } = props;
  const inputRef = useRef(null);
  const [filterText, setFilterText] = useState("");
  const [usingFilterID, setFilterID] = useState([]);
  const [usingGroupID, setGroupID] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(0);
  const [openMobileMenu, setOpenMobileMenu] = useState(true);
  const [groupIndex, setGroupIndex] = useState([]);

  const filterByText = (game) => {
    return (
      game.name.toLowerCase().indexOf(filterText.toLowerCase().trim()) > -1
    );
  };

  const filterByProviders = (game) => {
    if (usingFilterID.length !== 0) {
      let isThere = usingFilterID.some((item) => item === game.provider);
      if (isThere) {
        return game;
      }
    } else {
      return game;
    }
  };

  const filterByGroup = (game) => {
    if (usingGroupID.length !== 0) {
      let isThere = usingGroupID.some((item) => item === game.id);
      if (isThere) {
        return game;
      }
    } else {
      return game;
    }
  };

  useEffect(() => {
    let newArray = GamesList.games
      .filter(filterByText)
      .filter(filterByProviders)
      .filter(filterByGroup);
    setFilteredGames(newArray);
  }, [usingFilterID, filterText, usingGroupID]);

  const resetFilters = () => {
    setGroupID([]);
    setFilterID([]);
    setCurrentOrder(0);
    setFilterText("");
    setGroupIndex([]);
    setFilteredGames(GamesList.games);
  };

  return (
    <div className={"game-filters-wrapper"}>
      <div className={"filter-card"}>
        <SearchInput
          setFilteredGames={setFilteredGames}
          GamesList={GamesList}
          inputRef={inputRef}
          filterText={filterText}
          setFilterText={setFilterText}
        />
        {openMobileMenu && (
          <>
            <ChipFilters
              GamesList={GamesList}
              filteredGames={filteredGames}
              setFilteredGames={setFilteredGames}
              usingFilterID={usingFilterID}
              setFilterID={setFilterID}
              usingGroupID={usingGroupID}
              setGroupID={setGroupID}
              currentOrder={currentOrder}
              setCurrentOrder={setCurrentOrder}
              groupIndex={groupIndex}
              setGroupIndex={setGroupIndex}
            />
            <FilterFooter
              gamesAmount={filteredGames.length}
              resetFilters={resetFilters}
            />
          </>
        )}
        <HamburgerMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </div>
    </div>
  );
};

export default GameFilters;

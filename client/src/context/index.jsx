import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GLobalState({ children }) {
  const [favoritesList, setFavoritesList] = useState([]);
  function handleAddToFavorite(getCurrentItem) {
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }

    setFavoritesList(cpyFavoritesList);
  }

  console.log(favoritesList);
  return (
    <GlobalContext.Provider
      value={{
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

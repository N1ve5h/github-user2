import React from "react";

export const SearchUser = () => {
  return (
    <main>
      <form class="search">
        <label class="search__image" for="search">
          <img src="./assets/icon-search.svg" alt="" />
        </label>
        <input
          class="search__input"
          type="text"
          name="searchgituser"
          id="searchgituser"
          placeholder="Search Github Username..."
        />
        <button class="search__button">Search</button>
      </form>
    </main>
  );
};

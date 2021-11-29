import React, { useState } from "react";
import { User } from "./User";
import axios from "axios";

export const SearchUser = () => {
  const [username, setUsername] = useState('');
  return (
    <main>
      <form className="search">
        <label className="search__image" htmlFor="search">
          <img src="./assets/icon-search.svg" alt="" />
        </label>
        <input
          required
          className="search__input"
          type="text"
          name="searchgituser"
          id="searchgituser"
          placeholder="Search Github Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="search__button">Search</button>

      </form>
      <User username={username}/>
    </main>
  );
};

import React, { useState, useEffect } from "react";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";
import SearchForm from "./SearchForm"; 

const loadJSON = key => 
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  )
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={repoName => console.log(`${repoName} selected`)}
      />
    </div>
  );
}

export default function App() {
  const [login, setLogin] = useState("kazunoriboy");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  )
}


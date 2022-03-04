import React, { useState, useEffect } from "react";
import Fetch from "./Fetch";

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
    </div>
  );
}

export default function App() {
  const [login, setLogin] = useState("kazunoriboy");

  return (
    <GitHubUser login={login} />
  )
}


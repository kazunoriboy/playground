import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import SearchForm from "./SearchForm";

const loadJSON = key => 
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

function GitHubUser({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
  if (loading) return <h1>loading...</h1>;

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
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  )
}


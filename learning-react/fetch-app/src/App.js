import React, { useState } from "react";
import SearchForm from "./SearchForm"; 
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";

export default function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      {login && <GitHubUser login={login} />}
      {login && (
        <UserRepositories 
          login={login}
          selectedRepo={repo}
          onSelect={setRepo}
        />
      )}
      {login && repo && (
        <RepositoryReadme login={login} repo={repo} />
      )}
    </>
  );
}


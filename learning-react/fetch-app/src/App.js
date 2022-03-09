import React, { useState } from "react";
import SearchForm from "./SearchForm"; 
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";

export default function App() {
  const [login, setLogin] = useState("kazunoriboy");
  const [repo, setRepo] = useState("playground");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories 
        login={login}
        selectedRepo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}


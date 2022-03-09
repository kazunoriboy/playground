import React, { useState } from "react";
import UserRepositories from "./UserRepositories";
import SearchForm from "./SearchForm"; 
import GitHubUser from "./GitHubUser";

export default function App() {
  const [login, setLogin] = useState("kazunoriboy");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  )
}


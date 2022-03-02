import React, { useState, useEffect } from "react";

const loadJSON = key => 
  key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

function GitHubUser({ login }) {

  useEffect(() => {
    if (!login) return;
    if (data && data.login === login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
    }, [login]);

}

export default function App() {
  return <GitHubUser login="kazunoriboy" />
}


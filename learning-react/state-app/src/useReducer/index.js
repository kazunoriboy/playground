import React, { useState, useReducer } from "react";

function CheckBox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  function toggle() {
    setChecked(checked => !checked)
  }

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

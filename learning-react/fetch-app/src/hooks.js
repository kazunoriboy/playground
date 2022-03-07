import { useState, useCallback, useMemo, useEffect } from "react";
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onchange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};

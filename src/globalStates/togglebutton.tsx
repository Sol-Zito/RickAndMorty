import { useCallback, useState } from "react";

export function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => setState(!state), [state]);
  return [state, toggleState];
}

export const ToggleButton = () => {
  const [toggle, setToggle] = useToggle();

  return <button onClick={() => setToggle}>{toggle ? "ON" : "OFF"}</button>;
};

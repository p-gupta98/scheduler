import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    setHistory((prev => [...prev, newMode]))
  };

  const back = () => {

    setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    

  };

  return { mode: history[history.length -1], transition: transition, back: back};
}

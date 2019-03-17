import { useState, useEffect } from 'react';

const useStateWithHistory = (initialState = null) => {
  const [state, setState] = useState(initialState);
  const [history, setHistory] = useState([state]);

  useEffect(() => {
    setHistory(prev => [...prev, state]);
  }, [state]);

  return [state, setState, history];
};

export default useStateWithHistory;

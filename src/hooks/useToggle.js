import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggleState = (value = 'TOGGLE') => {
    if (value !== 'TOGGLE') {
      setState(!!value);
    } else {
      setState(prev => !prev);
    }
  };

  return [state, toggleState];
};

export default useToggle;

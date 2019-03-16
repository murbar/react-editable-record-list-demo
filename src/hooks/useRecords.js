import { useState, useEffect } from 'react';
import faker from 'faker';

const useRecords = () => {
  const [state, setState] = useState([]);
  const [history, setHistory] = useState([
    {
      state,
      action: 'Initial state',
      timestamp: Date.now()
    }
  ]);

  useEffect(() => {
    const historyCount = history.length;
    const lastAction = history[historyCount - 1];
    console.log(lastAction);
  }, [history]);

  const appendToHistory = (actionLabel, actionPayload) => {
    setHistory(prev => [
      ...prev,
      {
        state,
        action: `${actionLabel} ${actionPayload}`
      }
    ]);
  };

  const add = item => {
    item.id = faker.random.uuid();
    setState(prev => [...prev, item]);
    appendToHistory('ADD', item.id);
  };

  const update = item => {
    setState(prev =>
      prev.map(i => {
        if (i.id !== item.id) return i;
        return item;
      })
    );
    appendToHistory('UPDATE', item.id);
  };

  const remove = itemId => {
    setState(prev => prev.filter(i => i.id !== itemId));
    appendToHistory('REMOVE', itemId);
  };

  return {
    state,
    setState,
    add,
    update,
    remove
  };
};

export default useRecords;

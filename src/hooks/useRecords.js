import { useState } from 'react';

const useRecords = () => {
  const [state, setState] = useState([]);

  const add = item => {
    setState(prev => [...prev, item]);
    console.log('ADD', item);
  };

  const update = item => {
    setState(prev =>
      prev.map(i => {
        if (i.id !== item.id) return i;
        return item;
      })
    );
    console.log('UPDATE', item);
  };

  const remove = itemId => {
    setState(prev => prev.filter(i => i.id !== itemId));
    console.log('REMOVE', itemId);
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

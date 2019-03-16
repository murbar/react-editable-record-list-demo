import React from 'react';
import styled from 'styled-components';
import generateRecords from './helpers/generateRecords';
import useRecords from './hooks/useRecords';
import RecordList from './components/RecordList';

const StyledMain = styled.main`
  max-width: 60rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
`;

const App = () => {
  // our mock network data store
  const store = useRecords();

  const handleGenerate = () => {
    store.setState(generateRecords(16));
  };

  return (
    <StyledMain>
      <h1>Editable record list demo</h1>
      <button onClick={handleGenerate}>Generate records</button>
      <RecordList recordStore={store} />
    </StyledMain>
  );
};

export default App;

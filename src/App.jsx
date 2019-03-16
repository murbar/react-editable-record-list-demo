import React, { useEffect } from 'react';
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

  useEffect(() => {
    const data = generateRecords(16);
    // console.log(data);
    store.setState(data);
  }, []);

  return (
    <StyledMain>
      <h1>Editable record list demo</h1>
      <p>Usage instructions here</p>
      <RecordList recordStore={store} />
    </StyledMain>
  );
};

export default App;

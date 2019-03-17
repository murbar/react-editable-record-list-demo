import React, { useEffect } from 'react';
import styled from 'styled-components';
import generateRecords from './helpers/generateRecords';
import useRecords from './hooks/useRecords';
import RecordsTable from './components/RecordsTable';
// import RecordsTableCellDiv from './components/RecordsTableCellDiv';

// const data = {
//   key: 'nameFirst',
//   value: 'Joel'
// };

// const data2 = {
//   key: 'nameLast',
//   value: 'Bartlett',
//   required: true
// };

const StyledMain = styled.main`
  max-width: 60rem;
  margin: 2rem auto;
  padding: 0 1.5rem;
`;

const recordModel = {
  id: {
    hidden: true
  },
  name: {
    type: 'text',
    required: true,
    label: 'Name'
  },
  company: {
    type: 'text',
    label: 'Company'
  },
  email: {
    type: 'text',
    label: 'Email Address'
  }
};

const App = () => {
  // our mock network data store
  const store = useRecords();

  useEffect(() => {
    const data = generateRecords(16);
    store.setState(data);
  }, []);

  return (
    <StyledMain>
      <h1>Editable record list demo</h1>
      <p>Usage</p>
      <ul>
        <li>Double-click a field to begin editing</li>
        <li>
          Press <code>Enter</code> or blur input to save edit
        </li>
        <li>
          Press <code>Esc</code> to abort edit
        </li>
        <li>Required fields marked with *</li>
      </ul>

      {/* <RecordsTableCellDiv data={data} reportEdit={logEdit} /> */}
      {/* <RecordsTableCellDiv data={data2} reportEdit={logEdit} /> */}

      <RecordsTable recordStore={store} recordModel={recordModel} />
    </StyledMain>
  );
};

export default App;

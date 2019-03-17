import React from 'react';
import styled from 'styled-components';
import RecordsTableRow from './RecordsTableRow';
import pluralize from '../helpers/pluralize';
import RecordsTableHead from './RecordsTableHead';

// https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_boxes/Styling_tables
const StyledTable = styled.table`
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;
  table-layout: fixed;
  caption {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const RecordsTable = ({ recordStore, recordModel }) => {
  const count = recordStore.state.length;

  if (!count) return <div>No records</div>;

  const recordFields = Object.keys(recordStore.state[0]);
  const countString = `${count} record${pluralize(count)}`;

  return (
    <StyledTable>
      <caption>{countString}</caption>
      <RecordsTableHead fields={recordFields} model={recordModel} />
      <tbody>
        {recordStore.state.map(r => (
          <RecordsTableRow key={r.id} data={r} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default RecordsTable;

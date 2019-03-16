import React from 'react';
import styled from 'styled-components';
import RecordsTableRow from './RecordsTableRow';
import pluralize from '../helpers/pluralize';
import RecordsTableHead from './RecordsTableHead';

const StyledTable = styled.table`
  width: 100%;
  margin: 1rem 0;
  border-collapse: collapse;
  caption {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const RecordsTable = ({ recordStore }) => {
  const count = recordStore.state.length;

  if (!count) return <div>No records</div>;

  const headerLabels = Object.keys(recordStore.state[0]);
  const countString = `${count} record${pluralize(count)}`;

  return (
    <StyledTable>
      <caption>{countString}</caption>
      <RecordsTableHead labels={headerLabels} />
      <tbody>
        {recordStore.state.map(r => (
          <RecordsTableRow key={r.id} data={r} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default RecordsTable;

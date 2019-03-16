import React from 'react';
import styled from 'styled-components';
import Record from './Record';
import pluralize from '../helpers/pluralize';
import capitalize from '../helpers/capitalize';

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

const RecordList = ({ recordStore }) => {
  const count = recordStore.state.length;

  if (!count) return <div>No records</div>;

  const theadLabels = Object.keys(recordStore.state[0]);
  const countString = `${count} record${pluralize(count)}`;

  return (
    <StyledTable>
      <caption>{countString}</caption>
      <thead>
        <tr>
          {theadLabels.map(k => (
            <th key={k}>{capitalize(k)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {recordStore.state.map(r => (
          <Record key={r.id} data={r} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default RecordList;

import React from 'react';
import styled from 'styled-components';
import capitalize from '../helpers/capitalize';

const StyledHead = styled.thead`
  th {
    text-align: left;
    padding: 0.25rem 0.5rem;
    font-size: 1.1em;
  }
`;

const RecordsTableHead = ({ labels }) => {
  return (
    <StyledHead>
      <tr>
        {labels.map(k => (
          <th key={k}>{capitalize(k)}</th>
        ))}
      </tr>
    </StyledHead>
  );
};

export default RecordsTableHead;

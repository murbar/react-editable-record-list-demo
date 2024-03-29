import React from 'react';
import styled from 'styled-components';

const StyledHead = styled.thead`
  th {
    text-align: left;
    padding: 0.5rem;
    font-size: 1.1em;
  }
`;

const RecordsTableHead = ({ fields, model }) => {
  return (
    <StyledHead>
      <tr>
        {fields.map(field => {
          const hidden = model[field].hidden || false;
          const required = model[field].required || false;

          if (!hidden)
            return (
              <th key={field}>
                {model[field].label || field}
                {required && ' *'}
              </th>
            );

          return null;
        })}
      </tr>
    </StyledHead>
  );
};

export default RecordsTableHead;

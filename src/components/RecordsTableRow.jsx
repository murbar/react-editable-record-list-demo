import React from 'react';
import styled from 'styled-components';
import RecordsTableCell from './RecordsTableCell';

const StyledRow = styled.tr`
  border-top: 1px solid #666;
  border-right: 1px solid #666;
  border-left: 1px solid #666;
  &:last-child {
    border-bottom: 1px solid #666;
  }
`;

const RecordsTableRow = ({ data }) => {
  return (
    <StyledRow>
      {Object.keys(data).map((key, i) => (
        <RecordsTableCell key={i} data={data[key]} />
      ))}
    </StyledRow>
  );
};

export default RecordsTableRow;

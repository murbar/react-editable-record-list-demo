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

const RecordsTableRow = ({ data, model, actions }) => {
  return (
    <StyledRow>
      {Object.keys(data).map((key, i) => (
        <RecordsTableCell
          key={i}
          data={{ key, value: data[key] }}
          onUpdate={actions.handleRecordUpdate}
          onDelete={actions.handleRecordDelete}
        />
      ))}
    </StyledRow>
  );
};

export default RecordsTableRow;

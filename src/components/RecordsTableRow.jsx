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
  const handleFieldUpdate = (field, value) => {
    // construct record from fields, pass to actions.handleRecordUpdate
    console.log('handling field update');
  };
  return (
    <StyledRow>
      {Object.keys(data).map((field, i) => {
        const hidden = model[field].hidden || false;

        if (!hidden)
          return (
            <RecordsTableCell
              key={i}
              data={{
                field,
                label: model[field].label,
                value: data[field],
                required: model[field].required || false
              }}
              onFieldUpdate={handleFieldUpdate}
            />
          );

        return null;
      })}
    </StyledRow>
  );
};

export default RecordsTableRow;

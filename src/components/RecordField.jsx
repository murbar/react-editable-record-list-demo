import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.td`
  padding: 0.25rem 0.5rem;
  border-right: 1px solid #666;
  &:last-child {
    border-right: none;
  }
`;

const RecordField = ({ data }) => {
  return <StyledCell>{data}</StyledCell>;
};

export default RecordField;

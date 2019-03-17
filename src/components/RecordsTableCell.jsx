import React, { useState } from 'react';
import styled from 'styled-components';
import useEffectOnUpdate from '../hooks/useEffectOnUpdate';
import useToggle from '../hooks/useToggle';

const StyledCell = styled.td`
  /* padding: 0.25rem 0.5rem; */
  border-right: 1px solid #666;
  &:last-child {
    border-right: none;
  }
  position: relative;
  .viewer {
    padding: 0.25rem 0.5rem;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    user-select: none;
    background: ${props =>
      props.required && !props.dataValue ? 'rgba(255,0,0,0.15)' : 'transparent'};
    font-style: ${props => (props.required && !props.dataValue ? 'italic' : 'normal')};
    color: ${props => (props.required && !props.dataValue ? '#777' : 'inherit')};
  }
  .editor {
    width: 100%;
    height: 100%;
    input {
      padding: 0.25rem 0.5rem;
      font-size: inherit;
      padding: none;
      border: none;
      appearance: none;
      font-family: inherit;
      background: ${props =>
        props.required && !props.inputValue ? 'rgba(255,0,0,0.15)' : 'rgba(255, 255, 255, 0.1)'};
      width: 100%;
      color: inherit;
      outline: none;
      &::placeholder {
        font-style: italic;
        color: #777;
      }
    }
  }
  .action {
    display: none;
    background: #333;
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    img {
      filter: invert(1);
      width: 0.9rem;
      display: block;
      position: absolute;
      left: calc(50% - 0.45rem);
      top: calc(50% - 0.45rem);
    }
  }
  &:hover .action {
    display: flex;
  }
`;

const RecordsTableCell = ({ data, reportEdit }) => {
  const initialValue = data.value;
  const required = data.required || false;
  const [isEditMode, toggleEditMode] = useToggle();
  const [dataValue, setDataValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue);
  const modified = dataValue !== initialValue;

  useEffectOnUpdate(() => {
    if (!required || (required && dataValue)) {
      reportEdit(dataValue);
    }
  }, [dataValue]);

  const completeEdit = () => {
    setDataValue(inputValue);
    toggleEditMode();
  };

  const abortEdit = () => {
    toggleEditMode();
    setInputValue(dataValue);
  };

  const revertEdit = () => {
    setDataValue(initialValue);
    setInputValue(initialValue);
    toggleEditMode(false);
  };

  const handleChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') completeEdit();
    if (e.key === 'Escape') abortEdit();
  };

  return (
    <StyledCell dataValue={dataValue} required={required} inputValue={inputValue}>
      {isEditMode ? (
        <div className="editor">
          <input
            type="text"
            name={data.key}
            placeholder={data.key}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={completeEdit}
            autoFocus
          />
        </div>
      ) : (
        <div className="viewer" onDoubleClick={toggleEditMode}>
          {dataValue || data.key}
        </div>
      )}
      {modified && (
        <div onClick={revertEdit} className="action revert">
          <img src="/icons/revert.svg" alt="Revert" />
        </div>
      )}
    </StyledCell>
  );
};

export default RecordsTableCell;

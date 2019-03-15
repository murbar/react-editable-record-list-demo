import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  max-width: 60rem;
  margin: 2rem auto;
`;

const App = () => {
  return (
    <StyledMain>
      <h1>Editable record list demo</h1>
    </StyledMain>
  );
};

export default App;

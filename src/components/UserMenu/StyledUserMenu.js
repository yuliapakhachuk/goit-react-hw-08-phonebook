import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    border: 1px solid #db4bff;
    background-color: #db4bff;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in 200ms;
    :hover {
      border: 1px solid #db4bff;
      background-color: #db4bff;
    }
  }
`;

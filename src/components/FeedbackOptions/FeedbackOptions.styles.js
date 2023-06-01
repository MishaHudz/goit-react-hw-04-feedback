import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 700;
  width: 100px;
  color: white;
  border: 1px solid white;
  outline: none;
  background-color: transparent;
  &:hover {
    background-color: #fd9222;
    border-color: #fd9222;
  }
`;

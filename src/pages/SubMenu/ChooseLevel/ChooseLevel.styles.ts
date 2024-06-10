import styled from 'styled-components';

export const ChooseLevelTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.primaryBlue};
  white-space: nowrap;
`;

export const ChooseLevelButton = styled.button`
  font-size: 18px;
  padding: 6px 12px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.color.secondaryBlue};
  color: ${({ theme }) => theme.color.honeydew};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
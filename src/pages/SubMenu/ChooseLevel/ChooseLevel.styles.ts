import styled from 'styled-components';

export const ChooseLevelTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.primaryBlue};
  white-space: nowrap;
`;

export const ChangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChangeLevelButton = styled.button`
  font-size: 18px;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  color: ${({ theme }) => theme.color.honeydew};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const LevelNumber = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.color.primaryBlue};
  margin: 0 12px;
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
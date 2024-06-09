import styled from 'styled-components';

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.honeydew};
  margin-right: 20px;
  padding: 20px;
  border-radius: 10px;
`;

export const SubMenuTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.primaryBlue};
`;

export const SubMenuButton = styled.button`
  font-size: 18px;
  padding: 6px 12px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.color.secondaryBlue};
  color: ${({ theme }) => theme.color.honeydew};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
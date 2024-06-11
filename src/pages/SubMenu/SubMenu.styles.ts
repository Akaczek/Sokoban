import styled from 'styled-components';

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.color.honeydew};
  margin: 0 20px 0 60px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.mq.medium}) {
    margin: 0 20px;
    width: 100%;
  }
`;

export const DeadlockWarning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
`;

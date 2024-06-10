import styled from 'styled-components';

export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.honeydew};
  margin: 0 20px 0 60px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.mq.medium}) {
    margin: 0 20px;
    width: 100%;
  }
`;

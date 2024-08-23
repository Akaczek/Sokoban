import styled from "styled-components";

export const RestartButton = styled.button`
  font-size: 18px;
  padding: 6px 12px;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.color.secondaryBlue};
  color: ${({ theme }) => theme.color.honeydew};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.color.primaryBlue};
  white-space: nowrap;
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.color.primaryBlue};
  white-space: nowrap;
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (min-width: ${({ theme }) => theme.mq.medium}) {
    display: none;
  }

  margin-bottom: 20px;
`;

export const ControlButton = styled.button<{
  direction: "up" | "down" | "left" | "right";
}>`
  font-size: 18px;
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.color.secondaryBlue};
  color: ${({ theme }) => theme.color.honeydew};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "up" &&
    `
    grid-area: 1 / 2 / 2 / 3;
  `}
  ${({ direction }) =>
    direction === "down" &&
    `
    grid-area: 3 / 2 / 4 / 3;
  `}
  ${({ direction }) =>
    direction === "left" &&
    `
    grid-area: 2 / 1 / 3 / 2;
  `}
  ${({ direction }) =>
    direction === "right" &&
    `
    grid-area: 2 / 3 / 3 / 4;
  `}
`;

import styled from 'styled-components';

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;

  div {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 25px;

    svg {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    margin-right: -15px;
  }
`;

export const ToggleButton = styled.div`
  width: 36px;
  height: 23px;
  background-color: #2f3146;
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &.active {
    background-color: #7b78ff;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transform: translateX(-13px);
  transition: all 0.3s ease-in-out;

  &.active {
    transform: translateX(0px);
  }
`;

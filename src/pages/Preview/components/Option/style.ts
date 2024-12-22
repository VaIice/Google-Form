import styled from 'styled-components';

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  cursor: pointer;

  > .idx {
    font-size: 13px;
    padding-bottom: 5px;
  }

  > .item {
    font-size: 10pt;
    padding-bottom: 5px;
  }

  &.hover:hover {
    background-color: #f1f3f5;
  }
`;

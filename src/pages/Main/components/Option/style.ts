import styled from 'styled-components';

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  position: relative;
  padding: 0px 24px 0px 24px;

  .drag {
    position: absolute;
    left: 9px;
    top: 15px;
    display: none;

    &:hover {
      display: block;
    }
  }

  .addButton {
    font-size: 13px;
    padding-bottom: 5px;
    color: #ccc;
    cursor: pointer;
  }

  .idx {
    font-size: 13px;
    padding-bottom: 5px;
  }

  > input {
    margin-top: 2px;
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid #ffffff;
    &:hover {
      border-bottom: 1px solid #ddd;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.border};
    }
  }

  .icons {
    display: flex;
    gap: 25px;

    .warn {
      color: #e46337;
    }

    .remove {
      cursor: pointer;
    }
  }

  &:hover .drag {
    display: block;
  }
`;

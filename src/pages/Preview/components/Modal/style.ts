import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 4px;
  padding: 24px;
  width: 50%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14pt;
`;

export const ModalBody = styled.div`
  padding: 10px;
  max-height: 60vh;
  overflow-y: auto;

  div {
    overflow-wrap: break-word;
    > .section {
      border-bottom: 1px solid #ddd;
      text-align: left;
      padding: 8px 0px;

      > strong {
        font-size: 9pt;
      }

      .required {
        color: #d93025;
        font-size: 8pt;
      }
      > div {
        margin-top: 8px;

        > span {
          font-size: 8pt;
        }
      }

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-top: 8px;
    padding: 8px 16px;
    background-color: #7b78ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 10pt;

    &:hover {
      background-color: #5e59ff;
    }
  }
`;

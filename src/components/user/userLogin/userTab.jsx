import styled from 'styled-components';

export const UserTab = styled.div`
  width: 622px;
  position: relative;
  top: 70px;
  &::after {
    content: '';
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5px;
    height: 19px;
    left: 50%;
    top: 5px;
    transform: translateX(-50%);
    background-color: white;
    z-index: 400;
  }

  > button {
    width: 50%;
    position: relative;
    padding: 20px 0 30px 0;
    border: 1px solid var(--border-color);
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    color: black;
    transform: translate(0, -60px);
    font-weight: 700;
    text-align: center;
    background-color: var(--bg-color);
    cursor: pointer;
  }

  ${({ userType }) =>
    userType === 'Buyer'
      ? `
      button:nth-child(1) {
        z-index: 100;
        background-color: white;
      }
    `
      : `
      button:nth-child(2) {
        z-index: 100;
        background-color: white;
      }
    `}
`;

export default UserTab;
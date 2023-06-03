import styled, { css } from 'styled-components';

export const setSize = (size) => {
  switch (size) {
    case 'large':
      return css`
        padding: 19px 0;
        font-size: 24px;
        line-height: 30px;
      `;
    case 'medium':
      return css`
        padding: 19px 0;
        font-size: 18px;
        line-height: 22px;
      `;
    case 'small':
      return css`
        padding: 17px 0;
        line-height: 20px;
      `;
    default:
      return css`
        padding: 10px 0;
      `;
  }
};

export const Button = styled.button`
  width: ${({ width }) => width || '80px'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  background: ${({ background }) => background || 'var(--main-color)'};
  color: ${({ color }) => color || 'white'};
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: 'var(--gC4)';
    cursor: not-allowed;
  }
  ${({ size }) => setSize(size)};
`;

export default Button;
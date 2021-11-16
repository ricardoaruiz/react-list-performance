import styled from 'styled-components'
import { darken } from 'polished'

const buttonBgColor = '#80ced6';
const buttonTextColor = '#fff';
const buttonTextColorHovered = '#4f3222';

export const Button = styled.button`
  border: none;
  padding: 0.5rem;
  background-color: ${buttonBgColor};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  color: ${buttonTextColor};

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: ${buttonTextColor};
    width: 2.4rem;
    margin-right: 1rem;
  }

  &:hover {
    background-color:  ${darken(0.1, buttonBgColor)};
    color: ${buttonTextColorHovered};

    & svg {
      color: ${buttonTextColorHovered};
    }
  }

  &:active {
    background-color:  ${darken(0.2, buttonBgColor)};
    color: ${buttonTextColorHovered};

    & svg {
      color: ${buttonTextColorHovered};
    }
  }
`
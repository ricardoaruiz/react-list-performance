import styled from 'styled-components'
import { darken } from 'polished'
import { DeleteDismiss } from '@styled-icons/fluentui-system-regular/DeleteDismiss'

const wrapperBgColor = '#80ced6'
const wrapperTextColor = '#fff';
const wrapperTextColorHovered = '#4f3222';

export const Wrapper = styled.li`
  padding: 1rem;
  background-color: ${wrapperBgColor};
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0,0,0,.5);
  color: ${wrapperTextColor};
  font-weight: 600;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    background-color: ${darken(0.1, wrapperBgColor)};
    color: ${wrapperTextColorHovered};
  }
`

export const Text = styled.p`
  align-self: flex-start;
  font-size: 1.5rem;
`

export const DeleteButton = styled(DeleteDismiss)`
  width: 24px;
  cursor: pointer;
  margin-left: auto;
  font-size: 1.5rem;

  &:hover {
    color: #618685;
  }
`
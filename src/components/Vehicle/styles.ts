import styled from 'styled-components'
import { DeleteDismiss } from '@styled-icons/fluentui-system-regular/DeleteDismiss'

export const Wrapper = styled.li`
  padding: 1rem;
  background-color: #80ced6;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0,0,0,.5);
  color: #fff;
  font-weight: 600;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Text = styled.p`
  align-self: flex-start;
`

export const DeleteButton = styled(DeleteDismiss)`
  width: 24px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: #618685;
  }
`
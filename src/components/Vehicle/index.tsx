import React from 'react'

import * as S from './styles'

export type VehicleType = {
  id: string
  name: string
  model?: string
  fuel?: string
}

type VehicleProps = VehicleType & {
  onDelete: (id: string) => void
}

const Vehicle: React.VFC<VehicleProps> = ({ id, name, onDelete }) => {

  const [isCreation, setIsCreation] = React.useState(true)
  const [isMouseOnDeleteButton, setIsMouseOnDeleteButton] = React.useState(false)

  const handleOnDelete = React.useCallback(() => {
    setTimeout(() => {
      onDelete(id)      
    }, 1500);
    setIsCreation(false)
  }, [id, onDelete])

  const itemClass = React.useMemo(() => {
    return `animate__animated ${isCreation ? 'animate__backInLeft' : 'animate__hinge'}`
  }, [isCreation])

  return (
    <S.Wrapper className={itemClass}>
      <S.Text>
        {name}
      </S.Text>
      <S.DeleteButton 
        role="button" 
        onClick={handleOnDelete} 
        onMouseEnter={() => setIsMouseOnDeleteButton(true)} 
        onMouseLeave={() => setIsMouseOnDeleteButton(false)}
        className={isMouseOnDeleteButton ? 'animate__animated animate__rubberBand' : ''}
      />      
    </S.Wrapper>
  )
}

const MemoizedVehicle = React.memo(Vehicle)

export { MemoizedVehicle as Vehicle }
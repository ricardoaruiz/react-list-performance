import React from 'react'

import * as S from './styles'

export type VehicleType = {
  id: string
  name: string
}

type VehicleProps = VehicleType & {
  onDelete: (id: string) => void
}

const Vehicle: React.VFC<VehicleProps> = ({ id, name, onDelete }) => {

  const [isCreation, setIsCreation] = React.useState(true)

  const handleOnDelete = React.useCallback(() => {
    setTimeout(() => {
      onDelete(id)      
    }, 1000);
    setIsCreation(false)
  }, [id, onDelete])

  const itemClass = React.useMemo(() => {
    return `animate__animated ${isCreation ? 'animate__backInLeft' : 'animate__backOutRight'}`
  }, [isCreation])

  return (
    <S.Wrapper className={itemClass}>
      <S.Text>
        {name}
      </S.Text>
      <S.DeleteButton role="button" onClick={handleOnDelete}/>      
    </S.Wrapper>
  )
}

const MemoizedVehicle = React.memo(Vehicle)

export { MemoizedVehicle as Vehicle }
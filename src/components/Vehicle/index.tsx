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

  console.log(`renderizando o ${name}`)

  return (
    <S.Wrapper>
      <S.Text>
        {name}
      </S.Text>
      <S.DeleteButton role="button" onClick={() => onDelete(id)}/>      
    </S.Wrapper>
  )
}

const MemoizedVehicle = React.memo(Vehicle)

export { MemoizedVehicle as Vehicle }
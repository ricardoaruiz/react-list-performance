import React from 'react'
import faker from 'faker'
import { Car } from '@styled-icons/boxicons-regular/Car'
import { Vehicle, VehicleType } from '../Vehicle'

import * as S from './styles'

faker.locale = 'pt_BR'

type VehicleResponse = {
  name: string
  rows: VehicleType[]
}

export const Vehicles: React.FC = () => {

  const [isAdding, setIsAdding] = React.useState(false)
  const [vehicles, setVehicles] = React.useState<VehicleType[]>([])

  const handleAddNewVehicleButtonClick = async () => {

    const response = await fetch('https://fakercloud.com/api/v1/schema/R9LnJvK6?apiKey=249G7P4i&rows=1')
    const vehicles: VehicleResponse = await response.json()
    
    if (!vehicles.rows.length) return
    
    const vehicle = vehicles.rows[0]
    setVehicles(state => [ ...state, { ...vehicle }])    

    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
    }, 1000);

  }

  const handleDeleteVehicleButtonClick = React.useCallback((id: string) => {
    setVehicles(state => state.filter(item => item.id !== id))
  }, [])

  return (
    <S.Wrapper>
      {!vehicles.length && (
        <S.EmptyList 
          className="animate__animated animate__backInDown"
        >
          Empty list
        </S.EmptyList>
      )}
      {vehicles.map(({ id, name }) => (
        <Vehicle 
          key={id}
          id={id} 
          name={name} onDelete={handleDeleteVehicleButtonClick} 
        />
      ))}
      <S.Button 
        onClick={handleAddNewVehicleButtonClick}
        className={isAdding ? 'animate__animated animate__headShake' : ''}
      >
        <Car />
        Add new vehicle
      </S.Button>
    </S.Wrapper>
  )
}

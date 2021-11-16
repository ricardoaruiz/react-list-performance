import React from 'react'
import faker from 'faker'
import { Vehicle, VehicleType } from '../Vehicle'

import * as S from './styles'

faker.locale = 'pt_BR'

export const Vehicles: React.FC = () => {

  const [vehicles, setVehicles] = React.useState<VehicleType[]>([
    { id: faker.datatype.uuid(), name: 'Renegade' },
    { id: faker.datatype.uuid(), name: 'Kicks' },
  ])

  const handleAddNewVehicleButtonClick = () => {
    setVehicles(state => [ ...state, {
      id: String(faker.datatype.uuid()),
      name: faker.vehicle.vehicle()
    }])
  }

  const handleDeleteVehicleButtonClick = React.useCallback((id: string) => {
    setVehicles(state => state.filter(item => item.id !== id))
  }, [])

  return (
    <ul>
      {vehicles.map(({ id, name }) => (
        <Vehicle 
          id={id} 
          name={name} onDelete={handleDeleteVehicleButtonClick} 
        />
      ))}
      <S.Button 
        onClick={handleAddNewVehicleButtonClick}
      >
        Add new vehicle
      </S.Button>
    </ul>
  )
}

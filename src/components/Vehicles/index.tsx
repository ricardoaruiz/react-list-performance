import React from 'react'
import faker from 'faker'
import { Vehicle } from '../Vehicle'

import * as S from './styles'

faker.locale = 'pt_BR'

export const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = React.useState([
    { id: faker.datatype.uuid, name: 'Renegade' },
    { id: faker.datatype.uuid, name: 'Kicks' },
  ])

  const handleAddNewVehicleButtonClick = () => {
    setVehicles(state => [ ...state, {
      id: faker.datatype.uuid,
      name: faker.vehicle.vehicle()
    }])
  }

  return (
    <ul>
      {vehicles.map(({ name }) => (
        <Vehicle name={name} />
      ))}
      <S.Button type="button" onClick={handleAddNewVehicleButtonClick}>Add new vehicle</S.Button>
    </ul>
  )
}

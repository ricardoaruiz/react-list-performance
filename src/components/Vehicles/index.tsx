import React from 'react'
import faker from 'faker'
import { Vehicle } from '../Vehicle'

faker.setLocale('pt-BR')

export const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = React.useState([
    { id: faker.datatype.uuid, name: 'Renegade' },
    { id: faker.datatype.uuid, name: 'Kicks' },
  ])

  return (
    <ul>
      {vehicles.map(({ name }) => (
        <Vehicle name={name} />
      ))}
    </ul>
  )
}

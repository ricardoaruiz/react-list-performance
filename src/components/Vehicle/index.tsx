import React from 'react'

type VehicleProps = {
  name: string
}

export const Vehicle: React.VFC<VehicleProps> = ({ name }) => {

  console.log(`renderizando o ${name}`)

  return (
    <li>
      {name}
    </li>
  )
}


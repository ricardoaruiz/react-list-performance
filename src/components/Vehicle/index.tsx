import React from 'react'

type VehicleProps = {
  name: string
}

const Vehicle: React.VFC<VehicleProps> = ({ name }) => {

  console.log(`renderizando o ${name}`)

  return (
    <li>
      {name}
    </li>
  )
}

const MemoizedVehicle = React.memo(Vehicle)

export { MemoizedVehicle as Vehicle }
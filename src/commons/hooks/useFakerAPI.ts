import React from 'react'

import { Vehicle } from 'commons/model/Vehicle'

type VehicleResponse = {
  name: string
  rows: Vehicle[]
}

type UseFakeAPIType = {
  getVehicle: () => Promise<Vehicle | null>
}

export const useFakerAPI = (): UseFakeAPIType => {

  const getVehicle = React.useCallback(async (): Promise<Vehicle | null> => {

    const response = await fetch('https://fakercloud.com/api/v1/schema/R9LnJvK6?apiKey=249G7P4i&rows=1')
    const vehicles: VehicleResponse = await response.json()    
    return !vehicles.rows.length ? null : vehicles.rows[0]
    
  }, [])

  return { getVehicle }

}
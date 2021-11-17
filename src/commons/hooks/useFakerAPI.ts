import React from 'react'

type VehicleResponse = {
  name: string
  rows: VehicleType[]
}

export type VehicleType = {
  id: string
  name: string
  model?: string
  fuel?: string
}

type UseFakeAPIType = {
  getVehicle: () => Promise<VehicleType | null>
}

export const useFakerAPI = (): UseFakeAPIType => {

  const getVehicle = React.useCallback(async (): Promise<VehicleType | null> => {

    const response = await fetch('https://fakercloud.com/api/v1/schema/R9LnJvK6?apiKey=249G7P4i&rows=1')
    const vehicles: VehicleResponse = await response.json()    
    return !vehicles.rows.length ? null : vehicles.rows[0]
    
  }, [])

  return { getVehicle }

}
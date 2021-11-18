import React from 'react'
import axios from 'axios'

import { Vehicle } from 'commons/model/Vehicle'

type VehicleResponse = {
  name: string
  rows: Vehicle[]
  error?: boolean
  message?: string
}

type UseFakeAPIType = {
  getVehicle: () => Promise<Vehicle | null>
}

const API_KEY = '249G7P4i'
const BASE_URL = 'https://fakercloud.com/api/v1/schema'
const VEHICLE_URI = '/R9LnJvK6?rows=1'

const fakerAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-Key": API_KEY
  }
})

export const useFakerAPI = (): UseFakeAPIType => {

  const handleError = (message: string) => {
    if (message.includes('API Key Not Found')) {
      throw new Error('Invalid API Key')
    }
    throw new Error(message)
  }

  const getVehicle = React.useCallback(async (): Promise<Vehicle | null> => {
    const response = await fakerAPI.get<VehicleResponse>(VEHICLE_URI)

    const { data: { rows, error, message } } = response;
    error && handleError(message || 'Unknown error!');

    return !rows.length ? null : rows[0]    
  }, [])

  return { getVehicle }

}
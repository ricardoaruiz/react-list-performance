import React from 'react'
import { Car } from '@styled-icons/boxicons-regular/Car'
import { Vehicle } from '../Vehicle'
import { Vehicle as VehicleType } from 'commons/model/Vehicle'
import { useFakerAPI } from 'commons/hooks/useFakerAPI'

import * as S from './styles'

export const Vehicles: React.FC = () => {

  const [isAdding, setIsAdding] = React.useState(false)
  const [vehicles, setVehicles] = React.useState<VehicleType[]>([])
  const { getVehicle } = useFakerAPI()

  const handleAddNewVehicleButtonClick = async () => {

    try {
      const vehicle = await getVehicle()
      
      if (!vehicle) return
      
      setVehicles(state => [ ...state, { ...vehicle }])    
  
      setIsAdding(true)
      setTimeout(() => {
        setIsAdding(false)
      }, 1000);
      
    } catch(error) {
      alert(`An error has ocurred on get new vehicle => ${error}`)
    }

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

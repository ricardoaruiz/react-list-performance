import styled from 'styled-components'

export const Container = styled.div`
  max-width: 80rem;
  margin: 2rem auto 0 auto;
  padding: 2rem;
  background-color: #deeaee;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 4px rgba(0,0,0,0.5);

  @media(max-width: 1300px) {
    margin: 2rem 1rem 0 1rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 3rem 0;
  color: #80ced6;
  font-weight: 600;
`
import React from 'react';
import { GlobalStyles } from 'commons/styles/GlobalStyles'
import { Vehicles } from 'components/Vehicles'

import "animate.css/animate.min.css";
import * as S from './AppStyles'

function App() {
  return (
    <S.Container>
      <GlobalStyles />
      <S.Title className="animate__animated animate__jackInTheBox">Vehicles</S.Title>
      <Vehicles />
    </S.Container>
  );
}

export default App;

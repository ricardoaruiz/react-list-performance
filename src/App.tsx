import React from 'react';
import { GlobalStyles } from 'commons/styles/GlobalStyles'
import { Vehicles } from 'components/Vehicles'

import "animate.css/animate.min.css";
import * as S from './AppStyles'

function App() {
  return (
    <S.Container>
      <GlobalStyles />
      <S.Title>Vehicle list</S.Title>
      <Vehicles />
    </S.Container>
  );
}

export default App;

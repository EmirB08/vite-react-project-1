import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import FixedContainer from './components/LayoutContainer/FixedContainer.jsx'
import FullWidthGrid from './components/LayoutGrid/FullWidthGrid.jsx'

function App() {
  return (
      <FixedContainer>
      <FullWidthGrid>
      </FullWidthGrid>
      </FixedContainer>
  );
}

export default App;

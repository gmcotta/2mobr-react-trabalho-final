import React from 'react'
import ReactDOM from 'react-dom/client'

import { StyledComponentsWrapper } from './components'
import { Router } from "./routes/index.routes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledComponentsWrapper>
      <Router />
    </StyledComponentsWrapper>
  </React.StrictMode>,
)

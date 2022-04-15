import * as React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './Error/ErrorFallback'
import ErrorProvider from './Error/ErrorProvider'
import App from './App'
import './App.css'

ReactDom.render(
  <ErrorProvider>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </ErrorProvider>,
  document.getElementById('app')
)

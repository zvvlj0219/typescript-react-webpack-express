import * as React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './Error/ErrorBoundary'
import ErrorProvider from './Error/ErrorProvider'
import App from './App'
import './scss/index.scss'

ReactDom.render(
    <ErrorProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </ErrorProvider>,
    document.getElementById('app')
)

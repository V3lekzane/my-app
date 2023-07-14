import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
import { BrowserRouter } from 'react-router-dom'

import StoreProvider from 'context/Provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
)

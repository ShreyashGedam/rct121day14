import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { store } from './redux/store'

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.headers.post["Content-Type"] = "application/json"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <BrowserRouter>
        <Provider store = {store}>
          <App />
        </Provider>
       
     </BrowserRouter>
    </ChakraProvider>
  
    
  
)

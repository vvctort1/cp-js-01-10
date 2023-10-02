import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Aparelhos from './routes/Aparelhos.jsx';
import VizualizarAparelho from './routes/VizualizarAparelho.jsx';
import Erro404 from './routes/Erro404.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import GlobalStyle from './estiloGlobal.js';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Erro404/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/vizualizar/aparelhos/:id',
        element: <VizualizarAparelho/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    <GlobalStyle/>
  </React.StrictMode>,
)

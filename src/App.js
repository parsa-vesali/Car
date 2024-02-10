import React from 'react'
import routes from './routes'
import { useRoutes } from "react-router-dom";
import NavBar from './Components/common/NavBar/NavBar';
import './App.css'
export default function App() {

  let router = useRoutes(routes)

  return (
    <>
    {router}
    </>
  )
}

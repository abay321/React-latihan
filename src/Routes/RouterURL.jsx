import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeData from '../pages/Employee-data'

const RouterURL = () => {
  return (
    <Routes>
        <Route path='/' element={EmployeeData} />
    </Routes>
  )
}

export default RouterURL

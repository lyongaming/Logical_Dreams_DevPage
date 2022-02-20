import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoutes } from './AdminRoutes';

export const PrivateRouter = () => {
  return (
      <Routes>

        <Route path="admin/*" element={ <AdminRoutes /> } />

      </Routes>
  )
}

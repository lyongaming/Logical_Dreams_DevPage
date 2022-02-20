import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { HexagonGrid } from '../components/ui/HexagonGrid';
import { Sidebar } from '../components/ui/Sidebar';
import { NakamasAdminScreen } from '../components/admin/NakamasAdminScreen';

export const AdminRoutes = () => {
  return (

    <div className="admin__pages">
      <HexagonGrid />

      <Sidebar />

      <main className="admin__main">
          <Routes>
              <Route path="nakamas" element={ <NakamasAdminScreen /> } />
          </Routes>
      </main>

    </div>

  );
}

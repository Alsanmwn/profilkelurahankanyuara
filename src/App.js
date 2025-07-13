import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/user/Beranda';
import ProfileDesa from './pages/user/ProfileDesa';
import InfoGrafis from './pages/user/InfoGrafis.jsx';
import PotensiDesa from './pages/user/PotensiDesa';
import KontakLokasi from './pages/user/KontakLokasi';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk halaman admin */}
        
        {/* Route untuk halaman user */}
        <Route path="/" element={<Beranda />} />
        <Route path="/profiledesa" element={<ProfileDesa />} />
        <Route path="/infografis" element={<InfoGrafis />} />
        <Route path="/potensidesa" element={<PotensiDesa />} />
        <Route path="/kontaklokasi" element={<KontakLokasi />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Beranda from './pages/user/Beranda';
import ProfileKelurahan from './pages/user/ProfileKelurahan.jsx';
import InfoGrafis from './pages/user/InfoGrafis.jsx';
import PotensiKelurahan from './pages/user/PotensiKelurahan.jsx';
import KontakLokasi from './pages/user/KontakLokasi.jsx';
import KegiatanKkn from './pages/user/KegiatanKkn.jsx';
import ProkerKami from './pages/user/ProkerKami.jsx';
import Login from './pages/admin/Login.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import StrukturKelurahan from './pages/admin/StrukturKelurahan.jsx';
import JumlahPenduduk from './pages/admin/JumlahPenduduk.jsx';
import SambutanLurah from './pages/admin/SambutanLurah.jsx';
import SaranaPrasarana from './pages/admin/SaranaPrasarana.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Route untuk halaman admin */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/sambutanlurah" element={<PrivateRoute><SambutanLurah /></PrivateRoute>} />
          <Route path="/jumlahpenduduk" element={<PrivateRoute><JumlahPenduduk /></PrivateRoute>} />
          <Route path="/saranaprasarana" element={<PrivateRoute><SaranaPrasarana /></PrivateRoute>} />
          <Route path="/strukturkelurahan" element={<PrivateRoute><StrukturKelurahan /></PrivateRoute>} />

          {/* Route untuk halaman user */}
          <Route path="/" element={<Beranda />} />
          <Route path="/profilekelurahan" element={<ProfileKelurahan />} />
          <Route path="/infografis" element={<InfoGrafis />} />
          <Route path="/potensikelurahan" element={<PotensiKelurahan />} />
          <Route path="/kontaklokasi" element={<KontakLokasi />} />
          <Route path="/kegiatankkn" element={<KegiatanKkn />} />
          <Route path="/prokerkami" element={<ProkerKami />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
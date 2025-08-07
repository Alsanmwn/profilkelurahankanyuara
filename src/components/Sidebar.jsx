import React, { useState, useEffect, useContext } from 'react';
import {
  Menu,
  X,
  Home,
  FileText,
  Users,
  LogOut,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import logo from '../assets/logosidrap.png';

const Sidebar = () => {
  /* ---------- STATE ---------- */
  const [openSide, setOpenSide] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const { logout } = useContext(AuthContext);

  const dataPaths = ['/sambutanlurah', '/jumlahpenduduk', '/saranaprasarana'];
  const isDataActive = dataPaths.some((p) => pathname.startsWith(p));

  const [drop, setDrop] = useState(isDataActive); 
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (isDataActive) setDrop(true);
  }, [isDataActive]);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
    setOpenSide(false);
    navigate('/login'); 
  };

  const itemBase =
    'flex items-center gap-3 px-4 py-2 rounded-lg transition';

  return (
    <>
      <button
        onClick={() => setOpenSide(!openSide)}
        className="md:hidden fixed top-4 left-4 z-[60] bg-white p-2 rounded-lg shadow-lg"
      >
        {openSide ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-lg flex flex-col
                    z-50 transform transition-transform duration-300
                    ${openSide ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0`}
      >
        <div className="flex items-center gap-3 h-20 border-b px-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <div className="leading-tight">
            <h1 className="text-sm font-semibold text-[#FFD700]">
              Kelurahan Kanyuara
            </h1>
            <p className="text-xs text-green-700">Kabupaten Sidenreng Rappang</p>
          </div>
        </div>

        <nav className="flex flex-col flex-grow p-6 space-y-2 overflow-y-auto">
          <NavLink
            to="/dashboard"
            onClick={() => setOpenSide(false)}
            className={({ isActive }) =>
              `${itemBase} ${
                isActive
                  ? 'bg-[#056805] text-white font-semibold'
                  : 'text-gray-700 hover:bg-[#e4f0e6] hover:text-[#056805]'
              }`
            }
          >
            <Home size={20} />
            <span>Dashboard</span>
          </NavLink>

          <button
            onClick={() => setDrop(!drop)}
            className={`${itemBase} justify-between ${
              isDataActive
                ? 'bg-[#056805] text-white font-semibold'
                : 'text-gray-700 hover:bg-[#e4f0e6] hover:text-[#056805]'
            }`}
          >
            <span className="flex items-center gap-3">
              <FileText size={20} />
              Data Kelurahan
            </span>
            {drop ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {drop && (
            <div className="ml-9 mt-1 flex flex-col space-y-1">
              {[
                { label: 'Sambutan Lurah', path: '/sambutanlurah' },
                { label: 'Jumlah Penduduk', path: '/jumlahpenduduk' },
                { label: 'Sarana & Prasarana', path: '/saranaprasarana' },
              ].map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpenSide(false)}
                  className={({ isActive }) =>
                    `${itemBase} text-sm pl-2 ${
                      isActive
                        ? 'bg-[#d1e7d6] text-[#056805] font-medium'
                        : 'text-gray-600 hover:bg-[#f1f5f3]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink
            to="/strukturkelurahan"
            onClick={() => setOpenSide(false)}
            className={({ isActive }) =>
              `${itemBase} ${
                isActive
                  ? 'bg-[#056805] text-white font-semibold'
                  : 'text-gray-700 hover:bg-[#e4f0e6] hover:text-[#056805]'
              }`
            }
          >
            <Users size={20} />
            <span>Struktur Kelurahan</span>
          </NavLink>
        </nav>

        <button
          onClick={() => setShowConfirm(true)}
          className="mb-2 w-full flex justify-center items-center gap-3 px-4 py-2 rounded-lg
                     text-gray-700 hover:bg-[#e4f0e6] hover:text-[#056805] transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>

        <div className="p-4 border-t text-center">
          <p className="text-xs text-gray-500">© 2024 Admin Panel</p>
        </div>
      </aside>

      {openSide && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpenSide(false)}
        />
      )}

      {showConfirm && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">Konfirmasi Logout</h2>
            <p className="mb-6 text-sm text-gray-600">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Ya, Keluar
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
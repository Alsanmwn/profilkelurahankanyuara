import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logosidrap.png';

const links = [
  { to: '/',            label: 'Beranda' },
  { to: '/profilekelurahan',     label: 'Profile Kelurahan' },
  { to: '/infografis',  label: 'Infografis' },
  { to: '/potensikelurahan',     label: 'Potensi Kelurahan' },
  { to: '/prokerkami',      label: 'Proker Kami' },
  { to: '/kontaklokasi',      label: 'Kontak & Lokasi' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const linkClasses =
    'px-3 py-2 rounded-md text-base transition-colors duration-200';

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#056805] shadow-lg rounded-b-[35px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-[#FFD700]">
                Kelurahan Kanyuara
              </h1>
              <p className="text-sm md:text-base text-white">
                Kabupaten Sidenreng Rappang
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${linkClasses} ${
                    isActive
                      ? 'font-bold text-white'
                      : 'text-white hover:text-white'
                  }`
                }
                end   
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-green-100 hover:text-white hover:bg-green-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-green-800">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block w-full text-left ${linkClasses} text-base ${
                  isActive
                    ? 'font-bold text-white'
                    : 'text-green-100 hover:text-white'
                }`
              }
              end
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
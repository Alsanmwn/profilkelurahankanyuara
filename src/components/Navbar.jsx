import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logosidrap.png'; // Pastikan path benar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', href: '#', active: false },
    { name: 'Profile Desa', href: '#', active: false },
    { name: 'Infografis', href: '#', active: true },
    { name: 'Potensi Desa', href: '#', active: false },
    { name: 'Kontak & Lokasi', href: '#', active: false },
  ];

  return (
    <nav className="bg-[#056805] shadow-lg rounded-b-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Kiri: Logo dan Judul */}
          <div className="flex items-center space-x-3">
            <img
                src={logo}
                alt="Logo Kelurahan Kanyuara"
                className="w-12 h-12 object-contain"
            />
            <div>
                {/* Ubah warna jadi #FFD700 */}
                <h1 className="text-lg font-semibold text-[#FFD700]">
                Kelurahan Kanyuara
                </h1>
                <p className="text-sm text-green-100">
                Kabupaten Sidenreng Rappang
                </p>
            </div>
            </div>

          {/* Kanan: Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? 'bg-green-600 text-white'
                    : 'text-green-100 hover:bg-green-600 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Tombol menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-100 hover:text-white hover:bg-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-800">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.active
                    ? 'bg-green-600 text-white'
                    : 'text-green-100 hover:bg-green-600 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

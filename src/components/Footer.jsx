import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#056805] text-white overflow-visible rounded-t-[35px]">
      {/* Kontainer penuh (tanpa max‑width) */}
      <div className="pt-10 pb-6 px-4 sm:px-6 lg:px-12 w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFD700] w-full">
            Kelurahan Kanyuara
          </h2>
          <p className="text-xs md:text-sm w-full">
            Kec. Watang Sidenreng Kab. Sidenreng Rappang, Sulawesi Selatan
          </p>
        </div>

        {/* Grid 3 Kolom – teks span full */}
        <div className="grid gap-6 md:grid-cols-3 text-xs md:text-sm leading-snug w-full">
          {/* Kolom 1 */}
          <div className="w-full text-center">
            <h3 className="text-base font-bold text-[#FFD700] mb-1 w-full">
              Website Profile Desa
            </h3>
            <p className="w-full">
              Website profil Desa merupakan situs web yang memuat informasi dasar mengenai desa, sejarah, visi dan misi desa, sampai dengan peta wilayah desa.
            </p>
          </div>

          {/* Kolom 2 */}
          <div className="w-full text-center">
            <h3 className="text-base font-bold text-[#FFD700] mb-1 w-full">
              Developer
            </h3>
            <p className="w-full">
              Website ini dibuat oleh Ayu Widya Ningrum, Mahasiswa KKN Teknik Informatika Universitas Hasanuddin Gelombang 114 Kelurahan Kanyuara pada Juli 2025.
            </p>
          </div>

          {/* Kolom 3 */}
          <div className="w-full text-center">
            <h3 className="text-base font-bold text-[#FFD700] mb-1 w-full">
              Harapan&nbsp;&amp;&nbsp;Tujuan
            </h3>
            <p className="w-full">
              Situs web profil ini dibuat untuk tujuan promosi dan publisitas Kelurahan Kanyuara agar lebih dikenal oleh khalayak ramai baik di dalam maupun di luar Kelurahan Kanyuara.
            </p>
          </div>
        </div>

        {/* Garis */}
        <hr className="border-t border-gray-300 w-full" />

        {/* Copyright */}
        <p className="text-center text-xs w-full">
          © 2025 Kelurahan Kanyuara – All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
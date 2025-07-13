import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import fotodesa from '../../assets/fotodesa.png';
import { Home, Users, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';  

const Beranda = () => {
  /* ---------- Scroll ke section profil ---------- */
  const goToProfile = () => {
    const el = document.getElementById('profile-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        {/* Gambar */}
        <img
          src={fotodesa}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#056805]/50 to-white/30" />

        {/* Konten */}
        <div className="relative z-10 max-w-3xl px-4 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow-lg">
            Selamat Datang di Website Kami
          </h1>
          <p className="text-white text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            onClick={goToProfile}
            className="bg-white text-gray-800 font-semibold px-10 py-2 rounded-full
                       border-2 border-[#FFD700] hover:shadow-lg transition-all"
          >
            Mulai
          </button>
        </div>
      </section>

      {/* ---------- PROFILE ---------- */}
      <section id="profile-section" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image + caption */}
          <div className="flex justify-center lg:justify-start">
            <div>
              <figure className="w-full max-w-[480px] rounded-lg shadow">
                <img
                  src={fotodesa}
                  alt="Kelurahan Kanyuara"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </figure>
              <p className="text-center text-sm mt-2 text-gray-700">
                Kelurahan Kanyuara, Kecamatan Watang Sidenreng,
              </p>
              <p className="text-center text-sm -mt-1 text-gray-700">
                Sidenreng Rappang
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="text-gray-700 space-y-4">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold text-right text-[#FFD700]
                         mb-6 relative pr-8
                         after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                         after:h-12 after:w-[3px] after:bg-[#DAA520]"
            >
              Profile Kelurahan Kanyuara
            </h2>
            <p className="text-justify leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-justify leading-relaxed text-sm md:text-base">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-justify leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Placeholder blok warna ---------- */}
      <section className="grid grid-cols-2 h-[300px]">
        <div className="bg-[#7e9861]" />
        <div className="bg-[#eacd4a]" />
      </section>

      {/* ---------- SEJARAH & MONOGRAFI ---------- */}
      <section className="bg-white px-4 py-12">
        {/* Sejarah */}
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2
            className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto">
            Sejarah Kelurahan Kanyuara
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </section>

      {/* ---------- Data Monografi - Full Width ---------- */}
      <section className="bg-[#7e9861] text-white">
        <div className="py-6 text-center">
          <h3 className="text-lg md:text-xl font-bold">Data Monografi</h3>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Lingkungan */}
          <div className="flex flex-col items-center space-y-2">
            <Home className="h-10 w-10" strokeWidth={1.5} />
            <p className="text-xl text-[#FFD700]">Lingkungan</p>
            <p className="text-xl font-extrabold text-[#FFD700]">2</p>
          </div>

          {/* Penduduk */}
          <div className="flex flex-col items-center space-y-2">
            <Users className="h-10 w-10" strokeWidth={1.5} />
            <p className="text-xl text-[#FFD700]">Jumlah Penduduk</p>
            <p className="text-xl font-extrabold text-[#FFD700]">3.780</p>
          </div>

          {/* Luas */}
          <div className="flex flex-col items-center space-y-2">
            <Ruler className="h-10 w-10" strokeWidth={1.5} />
            <p className="text-xl text-[#FFD700]">Luas Kelurahan</p>
            <p className="text-xl font-extrabold text-[#FFD700]">
              12,54&nbsp;<span className="text-base">Km²</span>
            </p>
          </div>
        </div>

        <div className="text-center pb-8">
          <Link
            to="/infografis"
            className="inline-block bg-white text-gray-800 font-semibold px-8 py-2 rounded-full
                      border-2 border-[#FFD700] hover:shadow-lg transition-all"
          >
            Selengkapnya
          </Link>
        </div>
      </section>

      {/* ---------- KEGIATAN KKN ---------- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto">
              Kegiatan KKN Gel. 114 Yang Telah Kami Laksanakan
            </h2>
          </div>

          {/* Grid Kegiatan - Layout Custom sesuai gambar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Baris Atas - 2 Card */}
            {/* Card 1 - Kiri Atas */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72">
              <img
                src={fotodesa}
                alt="Bimbingan Teknis Pemanfaatan TIK"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm md:text-base font-bold text-center mb-3 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Bimbingan Teknis Pemanfaatan TIK Untuk Pembelajaran
                </h3>
              </div>
            </div>

            {/* Card 2 - Kanan Atas */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72">
              <img
                src={fotodesa}
                alt="Akselerasi Ekosistem Pendidikan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm md:text-base font-bold text-center mb-3 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Akselerasi Ekosistem Pendidikan Berbasis Digital Komputer
                </h3>
                <div className="flex justify-center">
                </div>
              </div>
            </div>

            {/* Card 3 - Tengah (Besar) - Spans 2 columns pada lg, row-span 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 lg:row-span-2 lg:h-auto lg:min-h-[600px]">
              <img
                src={fotodesa}
                alt="Sosialisasi Security Awareness"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg md:text-xl font-bold text-center mb-4 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Sosialisasi mengenai Peningkatan Security Awareness
                </h3>
                <div className="flex justify-center">
                </div>
              </div>
            </div>

            {/* Baris Bawah - 2 Card */}
            {/* Card 4 - Kiri Bawah */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72">
              <img
                src={fotodesa}
                alt="Kegiatan Fasilitas Google Sites SMK"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm md:text-base font-bold text-center mb-3 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Kegiatan Fasilitas Google Sites Bagi Guru SMK di Mataram
                </h3>
                <div className="flex justify-center">
                </div>
              </div>
            </div>

            {/* Card 5 - Kanan Bawah */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72">
              <img
                src={fotodesa}
                alt="Kegiatan Fasilitas Google Sites SMA"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm md:text-base font-bold text-center mb-3 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Kegiatan Fasilitas Google Sites Bagi Guru SMA Di Makassar
                </h3>
                <div className="flex justify-center">
                </div>
              </div>
            </div>
          </div>

          {/* Link "Lihat lebih banyak" di kanan */}
          <div className="flex justify-end mt-6">
            <a
              href="#"
              className="text-blue-600 hover:underline font-semibold text-sm md:text-base"
            >
              Lihat lebih banyak
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;
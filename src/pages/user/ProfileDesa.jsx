import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import kepalaImg from '../../assets/kepala.jpg';   // ganti dgn path foto kepala desa
import heroImg   from '../../assets/fotodesa.png'; // background hero

const ProfileDesa = () => {
  /* scroll ke Visi‑Misi jika mau (opsional) */
  const goToContent = () => {
    const el = document.getElementById('visi');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* data dummy */
  const visi = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ];
  const misi = [...visi]; // contoh sama

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#056805]/50 to-white/30" />

        <div className="relative z-10 max-w-3xl px-4 space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow-lg">
            Profile Kelurahan Kanyuara
          </h1>
          <p className="text-white text-sm md:text-base">
            Sekilas tentang kepemimpinan, visi, misi, dan struktur organisasi Kelurahan Kanyuara.
          </p>
          <button
            onClick={goToContent}
            className="bg-white text-gray-800 font-semibold px-10 py-2 rounded-full
                       border-2 border-[#FFD700] hover:shadow-lg transition-all"
          >
            Mulai
          </button>
        </div>
      </section>

      {/* ---------- FOTO KEPALA DESA ---------- */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <img
            src={kepalaImg}
            alt="Kepala Kelurahan"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto ring-4 ring-gray-200"
          />
          <h3 className="text-lg md:text-xl font-extrabold">Oleh La Ranru Akkas, S.IP</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Kepala Kelurahan Kanyuara
          </p>
        </div>
      </section>

      {/* ---------- VISI ---------- */}
      <section id="visi" className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-base md:text-lg flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Visi Kelurahan Kanyuara
          </h4>

          <ol className="list-decimal list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed text-gray-700">
            {visi.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- MISI ---------- */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-base md:text-lg flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Misi Kelurahan Kanyuara
          </h4>

          <ol className="list-decimal list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed text-gray-700">
            {misi.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- STRUKTUR ORGANISASI ---------- */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-base md:text-lg flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Struktur Organisasi Kelurahan Kanyuara
          </h4>

          {/* Placeholder: tambahkan bagan / gambar struktur di sini */}
          <div className="mt-6 h-48 md:h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">[Bagan Struktur Organisasi]</span>
          </div>
        </div>
      </section>

            {/* ---------- PETA ---------- */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-base md:text-lg flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Peta Infrakstruktur Kelurahan Kanyuara
          </h4>

          {/* Placeholder: tambahkan bagan / gambar struktur di sini */}
          <div className="mt-6 h-48 md:h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">[Peta Infrakstruktur Kelurahan Kanyuara]</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileDesa;

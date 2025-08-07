import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';         
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import heroImg from '../../assets/kantorlurah.jpg';  

const ProfileKelurahan = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'struktur_kelurahan', 'struktur'));
        if (snap.exists()) setData(snap.data());
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const goToContent = () => {
    const el = document.getElementById('visi');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500">Memuat data…</p>
      </div>
    );
  }

  const {
    nama_lurah = '—',
    foto_lurah,
    visi = [],
    misi = [],
    bagan,
    peta_kelurahan,
  } = data || {};

  const visiArray = Array.isArray(visi) ? visi : (visi ? [visi] : []);
  
  let misiArray = [];
  if (Array.isArray(misi)) {
    misiArray = misi;
  } else if (misi && typeof misi === 'string') {
    misiArray = misi
      .split(/;|\.(?=[A-Z])|\.(?=\s*[A-Z])/)
      .map(item => item.trim())
      .filter(item => item.length > 0)
      .map(item => item.endsWith('.') ? item : item + '.');
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

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
            Profil Kelurahan Kanyuara
          </h1>
          <p className="text-white text-sm md:text-base">
            Sekilas tentang kepemimpinan, visi, misi, dan struktur organisasi Kelurahan Kanyuara.
          </p>

          <button
            onClick={goToContent}
            className="mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#DAA520] transition-colors"
          >
            Lihat Profil
          </button>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <img
            src={foto_lurah || require('../../assets/paklurah.jpg')}
            alt="Kepala Kelurahan"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto ring-4 ring-gray-200"
          />
          <h3 className="text-lg md:text-xl font-extrabold">{nama_lurah}</h3>
          <p className="text-gray-600 text-sm md:text-base">Kepala Kelurahan Kanyuara</p>
        </div>
      </section>

      <section id="visi" className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Visi Kelurahan Kanyuara
          </h4>

          {visiArray.length > 0 ? (
            <div className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
              {visiArray.map((v, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>{v}</p>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-500">Belum ada visi.</p>
          )}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Misi Kelurahan Kanyuara
          </h4>

          {misiArray.length > 0 ? (
            <ol className="list-decimal list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed text-gray-700">
              {misiArray.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-gray-500">Belum ada misi.</p>
          )}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Struktur Organisasi Kelurahan Kanyuara
          </h4>

          <div className="mt-6 flex items-center justify-center">
            {bagan ? (
              <img
                src={bagan}
                alt="Bagan Struktur"
                className="max-h-96 w-auto object-contain rounded-lg shadow"
              />
            ) : (
              <div className="h-48 md:h-64 w-full bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">[Bagan Struktur Organisasi]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Peta Kelurahan Kanyuara
          </h4>

          <div className="mt-6 flex items-center justify-center">
            {peta_kelurahan ? (
              <img
                src={peta_kelurahan}
                alt="Peta Kelurahan"
                className="max-h-96 w-auto object-contain rounded-lg shadow"
              />
            ) : (
              <div className="h-48 md:h-64 w-full bg-gray-200 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">[Peta Kelurahan Kanyuara]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileKelurahan;
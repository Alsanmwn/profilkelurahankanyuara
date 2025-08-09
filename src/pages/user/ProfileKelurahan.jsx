import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';         
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import heroImg from '../../assets/kantorlurah.jpg';  

const ProfileKelurahan = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'struktur_kelurahan', 'struktur'));
        if (snap.exists()) setData(snap.data());
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
        // Trigger animations after data loads
        setTimeout(() => setIsVisible(true), 100);
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
        <div className="flex flex-col items-center space-y-4">
          {/* Loading spinner animation */}
          <div className="w-12 h-12 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 animate-pulse">Memuat data…</p>
        </div>
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

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#056805]/50 to-white/30" />

        <div className={`relative z-10 max-w-3xl px-4 space-y-4 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow-lg transform transition-all duration-1000 delay-200">
            Profil Kelurahan Kanyuara
          </h1>
          <p className={`text-white text-sm md:text-base transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Sekilas tentang kepemimpinan, visi, misi, dan struktur organisasi Kelurahan Kanyuara.
          </p>

          <button
            onClick={goToContent}
            className={`mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#DAA520] hover:scale-105 hover:shadow-lg transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            } delay-500`}
          >
            Lihat Profil
          </button>
        </div>
      </section>

      {/* Lurah Profile Section */}
      <section className={`py-12 px-4 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } delay-700`}>
        <div className="max-w-lg mx-auto text-center space-y-3">
          <div className="relative group">
            <img
              src={foto_lurah || require('../../assets/paklurah.jpg')}
              alt="Kepala Kelurahan"
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mx-auto ring-4 ring-gray-200 transition-all duration-500 hover:ring-[#FFD700] hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700]/0 to-[#DAA520]/0 group-hover:from-[#FFD700]/10 group-hover:to-[#DAA520]/10 transition-all duration-500"></div>
          </div>
          <h3 className="text-lg md:text-xl font-extrabold transition-colors duration-300 hover:text-[#056805]">{nama_lurah}</h3>
          <p className="text-gray-600 text-sm md:text-base">Kepala Kelurahan Kanyuara</p>
        </div>
      </section>

      {/* Visi Section */}
      <section id="visi" className={`px-4 py-8 transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      } delay-900`}>
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3 group">
            <span className="h-8 w-[3px] bg-[#DAA520] transition-all duration-500 group-hover:w-[5px] group-hover:bg-[#FFD700]" />
            Visi Kelurahan Kanyuara
          </h4>

          {visiArray.length > 0 ? (
            <div className="mt-4 text-sm md:text-base leading-relaxed text-gray-700">
              {visiArray.map((v, i) => (
                <p 
                  key={i} 
                  className={`${i > 0 ? "mt-3" : ""} transition-all duration-700 hover:text-[#056805] hover:pl-4 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1000 + (i * 100)}ms` }}
                >
                  {v}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-gray-500 animate-pulse">Belum ada visi.</p>
          )}
        </div>
      </section>

      {/* Misi Section */}
      <section className={`px-4 py-8 transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      } delay-1100`}>
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3 group">
            <span className="h-8 w-[3px] bg-[#DAA520] transition-all duration-500 group-hover:w-[5px] group-hover:bg-[#FFD700]" />
            Misi Kelurahan Kanyuara
          </h4>

          {misiArray.length > 0 ? (
            <ol className="list-decimal list-inside space-y-2 mt-4 text-sm md:text-base leading-relaxed text-gray-700">
              {misiArray.map((m, i) => (
                <li 
                  key={i}
                  className={`transition-all duration-700 hover:text-[#056805] hover:pl-4 hover:bg-gray-50 hover:rounded-lg hover:p-2 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1200 + (i * 100)}ms` }}
                >
                  {m}
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-4 text-gray-500 animate-pulse">Belum ada misi.</p>
          )}
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className={`px-4 py-8 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } delay-1300`}>
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3 group">
            <span className="h-8 w-[3px] bg-[#DAA520] transition-all duration-500 group-hover:w-[5px] group-hover:bg-[#FFD700]" />
            Struktur Organisasi Kelurahan Kanyuara
          </h4>

          <div className="mt-6 flex items-center justify-center">
            {bagan ? (
              <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={bagan}
                  alt="Bagan Struktur"
                  className="w-full max-w-[1000px] max-h-[80vh] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-48 md:h-64 w-full bg-gray-200 flex items-center justify-center rounded-lg transition-all duration-500 hover:bg-gray-300 hover:shadow-lg">
                <span className="text-gray-500 animate-pulse">[Bagan Struktur Organisasi]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Peta Kelurahan Section */}
      <section className={`px-4 py-8 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } delay-1500`}>
        <div className="max-w-4xl mx-auto">
          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3 group">
            <span className="h-8 w-[3px] bg-[#DAA520] transition-all duration-500 group-hover:w-[5px] group-hover:bg-[#FFD700]" />
            Peta Kelurahan Kanyuara
          </h4>

          <div className="mt-6 flex items-center justify-center">
            {peta_kelurahan ? (
              <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={peta_kelurahan}
                  alt="Peta Kelurahan"
                  className="w-full max-w-[1000px] max-h-[80vh] object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-48 md:h-64 w-full bg-gray-200 flex items-center justify-center rounded-lg transition-all duration-500 hover:bg-gray-300 hover:shadow-lg">
                <span className="text-gray-500 animate-pulse">[Peta Kelurahan Kanyuara]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* Add some custom styles for enhanced animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProfileKelurahan;
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import heroImg from '../../assets/pohon.jpg';
import padiImg from '../../assets/padi.jpg';
import sapiImg from '../../assets/sapi.jpg';
import ikanImg from '../../assets/ternakikan.png';
import bebekImg from '../../assets/bebek.jpg';
import sdn3Img from '../../assets/sdn3.jpg';
import sdn4Img from '../../assets/sdn4.jpg';

const PotensiKelurahan = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToContent = () => {
    const el = document.getElementById('potensi-content');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      
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
          <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow-lg transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Potensi Kelurahan
          </h1>
          <p className={`text-white text-sm md:text-base transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}>
            Mengenal Lebih Jauh Potensi Kelurahan Kanyuara.
          </p>
          <button
            onClick={goToContent}
            className={`mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#DAA520] hover:scale-105 hover:shadow-lg transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            } delay-500`}
          >
            Lihat Potensi
          </button>
        </div>
      </section>

      <section id="potensi-content" className="px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
        
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          } delay-700`}>
            <div className="flex items-center gap-4 group">
              <span className="h-8 w-[4px] bg-[#DAA520] transition-all duration-500 group-hover:w-[6px] group-hover:bg-[#FFD700]" />
              <h2 className="text-[#FFD700] font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-[#DAA520]">
                Sektor Pertanian
              </h2>
            </div>

            <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } delay-900`}>
              <div className="relative h-64 md:h-80 overflow-hidden group">
                <img
                  src={padiImg}
                  alt="Padi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 transition-all duration-300 group-hover:text-[#FFD700]">
                    Padi
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  Padi merupakan komoditas pertanian utama di Kelurahan Kanyuara. Mayoritas masyarakat bertani padi pada lahan sawah yang tersedia, baik melalui sistem tanam langsung maupun tanam pindah. Produksi padi tidak hanya untuk konsumsi lokal, tetapi juga dipasarkan ke wilayah lain di Kabupaten Sidenreng Rappang. Padi memiliki potensi sebagai sumber utama pangan dan pendapatan dan cocok dikembangkan lebih lanjut melalui makanisasi pertanian.
                </p>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          } delay-1100`}>
            <div className="flex items-center gap-4 group">
              <span className="h-8 w-[4px] bg-[#DAA520] transition-all duration-500 group-hover:w-[6px] group-hover:bg-[#FFD700]" />
              <h2 className="text-[#FFD700] font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-[#DAA520]">
                Sektor Peternakan
              </h2>
            </div>
            
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } delay-1300`}>
              <div className="relative h-64 md:h-80 overflow-hidden group">
                <img
                  src={sapiImg}
                  alt="Sapi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 transform transition-all duration-500 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-3 transition-all duration-300 group-hover:text-[#FFD700]">
                    Sapi
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                  Kelurahan Kanyuara memiliki potensi besar di sektor peternakan, khususnya sapi. Masyarakat setempat banyak memelihara sapi sebagai sumber penghasilan tambahan. Kondisi lahan yang luas dan ketersediaan pakan alami mendukung berkembangnya usaha ini. Jenis sapi yang dibudidayakan umumnya sapi Bali dan PO, dengan sistem pemeliharaan tradisional yang terintegrasi dengan pertanian.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } delay-1500`}>
                <div className="relative h-48 md:h-56 overflow-hidden group">
                  <img
                    src={bebekImg}
                    alt="Bebek Petelur"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 transition-all duration-300 group-hover:text-[#FFD700]">
                      Bebek Petelur
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    Bebek petelur juga mulai dikembangkan melalui bantuan modal dan pelatihan dari pemerintah. Telur bebek berpotensi dijadikan olahan seperti telur asin atau produk UMKM lainnya. Bebek petelur memiliki potensi nilai jual yang tinggi. Bebek relatif mudah dipelihara dan adaptif terhadap lingkungan serta dapat dikembangkan sebagai usaha keluarga yang dapat berkelanjutan.
                  </p>
                </div>
              </div>

              <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } delay-1600`}>
                <div className="relative h-48 md:h-56 overflow-hidden group">
                  <img
                    src={ikanImg}
                    alt="Ikan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 transition-all duration-300 group-hover:text-[#FFD700]">
                      Ternak Ikan
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    Kelurahan Kanyuara juga memiliki potensi dalam budidaya ikan air tawar. Warga memanfaatkan kolam-kolam sederhana untuk membudidayakan ikan seperti lele dan nila. Ketersediaan air yang cukup dan lingkungan yang mendukung menjadikan budidaya ikan sebagai alternatif usaha yang menjanjikan bagi masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-1700`}>
            <div className="flex items-center gap-4 group">
              <span className="h-8 w-[4px] bg-[#DAA520] transition-all duration-500 group-hover:w-[6px] group-hover:bg-[#FFD700]" />
              <h2 className="text-[#FFD700] font-bold text-lg md:text-2xl transition-colors duration-300 hover:text-[#DAA520]">
                Sektor Pendidikan
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              } delay-1900`}>
                <div className="relative h-48 md:h-56 overflow-hidden group">
                  <img
                    src={sdn3Img}
                    alt="sdn3"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 transition-all duration-300 group-hover:text-[#FFD700]">
                      SDN 3 Watang Sidenreng
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    Sekolah ini melayani pendidikan dasar untuk anak-anak dari beberapa lingkungan di Kelurahan Kanyuara. Dengan fasilitas yang cukup memadai dan tenaga pendidik yang profesional, sekolah ini mendukung peningkatan kualitas SDM masyarakat.
                  </p>
                </div>
              </div>

              <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              } delay-2000`}>
                <div className="relative h-48 md:h-56 overflow-hidden group">
                  <img
                    src={sdn4Img}
                    alt="sdn4"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-0">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2 transition-all duration-300 group-hover:text-[#FFD700]">
                      SDN 4 Watang Sidenreng
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-300 hover:text-gray-800">
                    Sama seperti SDN 3, sekolah ini juga menjadi bagian dari upaya pemerataan akses pendidikan dasar. SDN 4 Watang Sidenreng membantu masyarakat sekitar agar anak-anak usia sekolah memperoleh pendidikan yang layak dan berkualitas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Hover glow effect for cards */
        .hover-glow:hover {
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.2);
        }

        /* Image overlay animation */
        .image-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          transition: left 0.8s ease-in-out;
        }

        .group:hover .image-overlay {
          left: 100%;
        }
      `}</style>
    </div>
  );
};

export default PotensiKelurahan;
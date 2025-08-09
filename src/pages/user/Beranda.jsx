import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import kantorlurah from '../../assets/kantorlurah.jpg';
import foto11 from '../../assets/foto11.jpg';
import foto22 from '../../assets/foto22.jpg';
import foto33 from '../../assets/foto33.jpg';
import foto44 from '../../assets/foto44.jpg';
import foto55 from '../../assets/foto55.jpg';
import { Home, Users, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';  

const Beranda = () => {
  const [mono, setMono]       = useState(null);  
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);

    (async () => {
      try {
        const snap = await getDoc(doc(db, 'data_kelurahan', 'jumlah_penduduk'));
        if (snap.exists()) setMono(snap.data());
      } catch (err) {
        console.error('Gagal mengambil data monografi:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const goToProfile = () => {
    document.getElementById('profile-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [sambutanLurah, setSambutanLurah] = useState(null);
  useEffect(() => {
  (async () => {
    try {
      const snap = await getDoc(doc(db, 'data_kelurahan', 'sambutan_lurah'));
      if (snap.exists()) setSambutanLurah(snap.data());
    } catch (err) {
      console.error('Gagal mengambil sambutan lurah:', err);
    }
  })();
}, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      {/* Hero Section dengan animasi fade in dan slide up */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">

        <img
          src={kantorlurah}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#056805]/50 to-white/30" />

        <div className={`relative z-10 max-w-3xl px-4 space-y-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD700] drop-shadow-lg animate-pulse">
            Selamat Datang di Website Kami
          </h1>
          <p className="text-white text-sm md:text-base">
            Selamat datang di website resmi Kelurahan Kanyuara, Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang.
          </p>
          <button
            onClick={goToProfile}
            className="mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#DAA520] hover:scale-105 transition-all duration-300 transform hover:shadow-lg"
          >
            Mulai
          </button>
        </div>
      </section>

      {/* Profile Section dengan stagger animation */}
      <section id="profile-section" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`flex justify-center lg:justify-start transform transition-all duration-800 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div>
              <figure className="w-full max-w-[480px] rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
                <img
                  src={kantorlurah}
                  alt="Kelurahan Kanyuara"
                  className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
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

          <div className={`text-gray-700 space-y-4 transform transition-all duration-800 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold text-right text-[#FFD700]
                         mb-6 relative pr-8
                         after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
                         after:h-12 after:w-[3px] after:bg-[#DAA520] after:transition-all after:duration-500"
            >
              Profile Kelurahan Kanyuara
            </h2>
            <p className="text-justify leading-relaxed text-sm md:text-base hover:text-gray-900 transition-colors duration-300">
              Kelurahan Kanyuara merupakan salah satu kelurahan yang terletak di Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang, Provinsi Sulawesi Selatan. Wilayah ini dikenal dengan lingkungan masyarakatnya yang rukun serta menjunjung tinggi nilai-nilai kearifan lokal dan budaya Bugis. 
            </p>
            <p className="text-justify leading-relaxed text-sm md:text-base hover:text-gray-900 transition-colors duration-300">
              Masyarakat Kelurahan Kanyuara memiliki keunikan dibandingkan dengan daerah-daerah lain yang ada di Kabupaten Sidenreng Rappang. Hal ini karena masyarakat Kelurahan Kanyuara mayoritas penganut kepercayaan Hindu Madzab Tolotang, Kanyuara memiliki adat  istiadat yang khusus atau memiliki kearifan lokal yang hanya dimiliki diderah yang mayoritas penganut Hindu Madzab Tolotang. 
            </p>
          </div>
        </div>
      </section>

      {/* Sambutan Section dengan slide in animation */}
      <section className={`bg-[#f7f4e8] py-12 px-4 transform transition-all duration-1000 delay-600 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={sambutanLurah?.gambar || 'https://via.placeholder.com/300'}
              alt={sambutanLurah?.nama || 'Foto Lurah'}
              className="w-[220px] h-[300px] object-cover rounded-[150px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFD700] mb-2 animate-fadeInUp">
              Sambutan Kepala Kelurahan
            </h3>
            <p className="text-gray-800 italic mb-4 hover:text-gray-900 transition-colors duration-300">
              "{sambutanLurah?.sambutan || 'Belum ada sambutan.'}"
            </p>
            <p className="text-gray-700 font-semibold hover:text-[#FFD700] transition-colors duration-300">
              — {sambutanLurah?.nama || 'Nama Lurah'}
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Section dengan fade in animation */}
      <section className={`bg-white px-4 py-12 transform transition-all duration-1000 delay-800 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2
            className="text-xl md:text-2xl font-bold text-[#FFD700] relative inline-block after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto after:transition-all after:duration-500 hover:after:w-20">
            Sejarah Kelurahan Kanyuara
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center hover:text-gray-900 transition-colors duration-300">
              Pada zaman dahulu kalah diperkirakan pada tahun 1648, datanglah sekelompok orang dari Toani Wajo yang singgah pada suatu daerah yang tak berpenghuni dan belum pernah dijamah oleh manusia. Merekapun akhinya memutuskan untuk tinggal dan menetap di sana. Konon, pada waktu itu daerah tak berpenghuni itu dikuasai oleh seorang Datu, dialah Datu Suppa. Merekapun akhirnya menghadap Datu meminta agar mereka dapat diizinkan tinggal dan menetap disana. Datupun memberi izin dan mereka akhirnya membuka lahan dan pemukiman.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center hover:text-gray-900 transition-colors duration-300">
              Diperkirakan 3 (tiga) tahun setelah mereka menetap, daerah itupun diberi nama Kanyuara. Nama Kanyuara sendiri diambil dari nama sebuah pohon raksasa yang sudah sangat tua dan sudah tumbuh dan hidup ribuan tahun silam, jauh sebelum daerah tersebut dihuni oleh manusia. Sebuah pohon kayu yang bernama <bold>Anyuara</bold> yang tumbuh sangat besar dan tinggi menjulang, saking besar dan tingginya pohon tersebut bisa terlihat dari kejauhan (bisa dilihat dari jarak ±30 Km). Pohon Anyuara biasa dan sering juga sebut <bold>Erre'e (Makerre')</bold> oleh penduduk setempat. <bold>Erre'e</bold> (keramat) Pohon Keramat. Begitulah sekiranya pohon kayu <bold>Anyuara</bold> disingkat menjadi K-Anyuara atau Kelurahan Kanyuara.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-center hover:text-gray-900 transition-colors duration-300">
              Pada waktu Kecamatan Watang Sidenreng masih berada dalam wilayah Kecamatan Maritengngae, Kanyuara merupakan salah satu lingkungan yang masuk dalam wilayah Kelurahan Watang Sidenreng, setelah Kecamatan Maritengngae di mekarkan menjadi   2 (dua) kecamatan yakni : Kecamatan Maritengngae dan Kecamatan Watang Sidenreng. Pada awalnya Kanyuara bergabung dalam wilayah kelurahan Sidenreng, namun setelah tanggal 14 November 1994 Kelurahan Kanyuara resmi menjadi sebuah kelurahan yang dikepala oleh seorang lurah yang bernama H. Wellang, dan hingga saat ini Kanyuara merupakan salah satu kelurahan yang berada di wilayah Kecamatan Watang Sidenreng.
            </p>
          </div>
        </div>
      </section>

      {/* Data Monografi Section dengan counter animation */}
      <section className="bg-[#7e9861] text-white">
        <div className={`py-6 text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-lg md:text-xl font-bold">Data Monografi</h3>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className={`flex flex-col items-center space-y-2 transform transition-all duration-800 delay-1200 hover:scale-110 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Home className="h-10 w-10 animate-bounce" strokeWidth={1.5} />
            <p className="text-xl text-[#FFD700]">Lingkungan</p>
            <p className="text-xl font-extrabold text-[#FFD700]">
              {loading ? '…' : mono?.jumlah_lingkungan ?? '—'}
            </p>
          </div>

          <div className={`flex flex-col items-center space-y-2 transform transition-all duration-800 delay-1400 hover:scale-110 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Users className="h-10 w-10 animate-bounce" strokeWidth={1.5} style={{animationDelay: '0.2s'}} />
            <p className="text-xl text-[#FFD700]">Jumlah Penduduk</p>
            <p className="text-xl font-extrabold text-[#FFD700]">
              {loading
                ? '…'
                : mono?.total_penduduk?.toLocaleString('id-ID') ?? '—'}
            </p>
          </div>

          <div className={`flex flex-col items-center space-y-2 transform transition-all duration-800 delay-1600 hover:scale-110 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Ruler className="h-10 w-10 animate-bounce" strokeWidth={1.5} style={{animationDelay: '0.4s'}} />
            <p className="text-xl text-[#FFD700]">Luas Kelurahan</p>
            <p className="text-xl font-extrabold text-[#FFD700]">
              {loading ? '…' : mono?.luas_kelurahan ?? '—'}&nbsp;
              <span className="text-base">Km²</span>
            </p>
          </div>
        </div>

        <div className="text-center pb-8">
          <Link
            to="/infografis"
            className="mt-4 px-6 py-2 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#DAA520] hover:scale-105 transition-all duration-300 transform hover:shadow-lg">
            Selengkapnya
          </Link>
        </div>
      </section>

      {/* Kegiatan KKN Section dengan stagger grid animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-1800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-xl md:text-2xl font-bold text-[#FFD700] relative inline-block after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto after:transition-all after:duration-500 hover:after:w-20">
              Kegiatan KKN UNHAS Gel. 114 Yang Telah Kami Laksanakan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 transform transition-all duration-800 delay-2000 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img
                src={foto11}
                alt="Bimbingan Teknis Pemanfaatan TIK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 transform transition-all duration-800 delay-2200 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img
                src={foto22}
                alt="Akselerasi Ekosistem Pendidikan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 lg:row-span-2 lg:h-auto lg:min-h-[600px] transform transition-all duration-800 delay-2400 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img
                src={foto33}
                alt="Sosialisasi Security Awareness"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 transform transition-all duration-800 delay-2600 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img
                src={foto44}
                alt="Kegiatan Fasilitas Google Sites SMK"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className={`relative group overflow-hidden rounded-lg shadow-lg bg-gray-800 h-64 md:h-72 transform transition-all duration-800 delay-2800 hover:shadow-2xl ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <img
                src={foto55}
                alt="Kegiatan Fasilitas Google Sites SMA"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className={`flex justify-end mt-6 transform transition-all duration-800 delay-3000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <Link
              to="/kegiatankkn"
              className="text-blue-600 hover:underline hover:text-blue-800 font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              Lihat lebih banyak
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;
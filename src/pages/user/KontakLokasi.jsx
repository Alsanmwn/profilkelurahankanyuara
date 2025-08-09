import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

const cards = [
  {
    id: 1,
    icon: Phone,
    title: '085331201123',
    desc: 'Hubungi kami untuk informasi layanan kelurahan, pengaduan masyarakat, dan keperluan administrasi.',
    bg: 'bg-[#51684B]',        
  },
  {
    id: 2,
    icon: Mail,
    title: (
      <>
        kelurahankanyuara01<br />@gmail.com
      </>
    ),
    desc: 'Silakan kirim pertanyaan, saran, atau permohonan surat melalui email resmi Kelurahan Kanyuara.',
    bg: 'bg-[#6F8D60]',       
  },
  {
    id: 3,
    icon: MapPin,
    title: 'Sulawesi Selatan',
    desc: 'Kelurahan Kanyuara terletak di Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang, Sulawesi Selatan.',
    bg: 'bg-[#8EB17C]',      
  },
];

const KontakLokasi = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      <section className="bg-white px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block
                         after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto
                         animate-fade-in-up animation-delay-100">
            Kontak &amp; Lokasi
          </h2>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {cards.map(({ id, icon: Icon, title, desc, bg }) => (
            <div
              key={id}
              className={`${bg} text-white rounded-[2rem] shadow-lg px-8 py-6 flex flex-col space-y-4
                         animate-slide-in-up hover:animate-float hover:shadow-2xl hover:scale-105 
                         transition-all duration-300 ease-in-out cursor-pointer group`}
              style={{ animationDelay: `${id * 200}ms` }}
            >
              <div className="flex items-center space-x-4">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#FFD700] group-hover:animate-spin-slow 
                               transition-transform duration-300" strokeWidth={2} />
                <h3 className="font-bold text-base md:text-lg group-hover:animate-pulse">{title}</h3>
              </div>

              <p className="text-xs md:text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-6xl mx-auto space-y-4">
          <h3 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3
                         animate-slide-in-left animation-delay-600">
            <span className="h-8 w-[3px] bg-[#DAA520] animate-scale-y" />
            Peta Lokasi
          </h3>

          <div className="w-full rounded-xl overflow-hidden border border-gray-300 shadow 
                          animate-zoom-in animation-delay-800 hover:shadow-xl transition-shadow duration-300">
            <iframe
              title="Lokasi Kelurahan Kanyuara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.693837898078!2d119.92810535!3d-3.7953388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefc30857a76ff%3A0x87a06bd3a75988f6!2sKelurahan%20Kanyuara%2C%20Watang%20Sidenreng%2C%20Kabupaten%20Sidenreng%20Rappang%2C%20Sulawesi%20Selatan!5e0!3m2!1sen!2sid!4v1720878912985!5m2!1sen!2sid"
              className="w-full h-64 md:h-96 hover:brightness-110 transition-all duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-sm text-gray-600 animate-fade-in animation-delay-1000">
            Lokasi Kelurahan Kanyuara, Kecamatan Watang Sidenreng, Kabupaten Sidenreng Rappang
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto bg-gray-50/90 border border-gray-200 rounded-[2rem] shadow-lg
                        animate-slide-in-up animation-delay-1200 hover:shadow-xl hover:bg-gray-50/95 
                        transition-all duration-500">
          <div className="px-8 pt-8">
            <h4 className="text-[#FFD700] font-bold text-lg md:text-xl animate-fade-in-right animation-delay-1400">
              Kelurahan Kanyuara
            </h4>
            <div className="mt-2 h-[4px] w-24 bg-[#DAA520] animate-expand-width animation-delay-1600" />
          </div>

          <div className="px-8 pb-10 pt-6">
            <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-gray-300 gap-10">
              <div className="flex-1 space-y-8 text-sm md:text-base animate-slide-in-left animation-delay-1800">
                <div className="space-y-3">
                  <p className="font-semibold">Batas Kelurahan</p>
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                  <div className="animate-fade-in animation-delay-2000 hover:animate-bounce-gentle">
                    <p className="font-semibold">Utara</p>
                    <p>Desa Kanie</p>
                    <p>Desa Aka - Akae</p>
                  </div>
                  <div className="animate-fade-in animation-delay-2200 hover:animate-bounce-gentle">
                    <p className="font-semibold">Timur</p>
                    <p>Kelurahan Sidenreng</p>
                  </div>
                  
                  <div className="animate-fade-in animation-delay-2400 hover:animate-bounce-gentle">
                    <p className="font-semibold">Selatan</p>
                    <p>Kelurahan Sidenreng</p>
                    <p>Kelurahan Lautan Benteng</p>
                  </div>
                  <div className="animate-fade-in animation-delay-2600 hover:animate-bounce-gentle">
                    <p className="font-semibold">Barat</p>
                    <p>Kelurahan Wala</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8 text-sm md:text-base pt-2 lg:pt-0 lg:pl-10 
                              animate-slide-in-right animation-delay-1800">
                <div className="space-y-3">
                  <p className="font-semibold">Informasi Wilayah</p>
                </div>

                <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                  <div className="animate-fade-in animation-delay-2000 hover:animate-bounce-gentle">
                    <p className="font-semibold">Garis Lintang Selatan</p>
                    <p>−3.9151889°</p>
                  </div>
                  <div className="animate-fade-in animation-delay-2200 hover:animate-bounce-gentle">
                    <p className="font-semibold">Garis Bujur Timur</p>
                    <p>119.8398194° E</p>
                  </div>
                  
                  <div className="animate-fade-in animation-delay-2400 hover:animate-bounce-gentle">
                    <p className="font-semibold">Luas Kelurahan</p>
                    <p>12,54 Km²</p>
                  </div>
                  <div className="animate-fade-in animation-delay-2600 hover:animate-bounce-gentle">
                    <p className="font-semibold">Jumlah Penduduk</p>
                    <p>3.780</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scaleY {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float:hover {
          animation: float 2s ease-in-out infinite;
        }

        .animate-spin-slow:hover {
          animation: spinSlow 2s linear infinite;
        }

        .animate-scale-y {
          animation: scaleY 0.8s ease-out forwards;
          transform-origin: bottom;
        }

        .animate-expand-width {
          animation: expandWidth 1s ease-out forwards;
        }

        .animate-bounce-gentle:hover {
          animation: bounceGentle 1s ease-in-out;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-1200 {
          animation-delay: 1200ms;
        }

        .animation-delay-1400 {
          animation-delay: 1400ms;
        }

        .animation-delay-1600 {
          animation-delay: 1600ms;
        }

        .animation-delay-1800 {
          animation-delay: 1800ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .animation-delay-2200 {
          animation-delay: 2200ms;
        }

        .animation-delay-2400 {
          animation-delay: 2400ms;
        }

        .animation-delay-2600 {
          animation-delay: 2600ms;
        }
      `}</style>
    </div>
  );
};

export default KontakLokasi;
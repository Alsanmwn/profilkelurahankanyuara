import React from 'react';
import { Star, Users, TrendingUp, Award } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Beranda = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Komunitas Aktif",
      description: "Bergabung dengan ribuan pengguna aktif yang saling berbagi pengalaman"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Berkembang Pesat",
      description: "Platform yang terus berkembang dengan fitur-fitur terbaru dan inovatif"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Kualitas Terbaik",
      description: "Komitmen kami untuk memberikan layanan dengan standar kualitas tertinggi"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengguna Premium",
      content: "Platform ini sangat membantu dalam meningkatkan produktivitas saya sehari-hari.",
      rating: 5
    },
    {
      name: "Sari Indah",
      role: "Entrepreneur",
      content: "Fitur-fitur yang disediakan sangat lengkap dan mudah digunakan.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Mahasiswa",
      content: "Interface yang user-friendly membuat saya betah berlama-lama di sini.",
      rating: 4
    }
  ];

  const stats = [
    { number: "10K+", label: "Pengguna Aktif" },
    { number: "500+", label: "Fitur Tersedia" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.8/5", label: "Rating Pengguna" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Selamat Datang di{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Platform Masa Depan
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Rasakan pengalaman baru dalam mengelola aktivitas digital Anda dengan platform yang inovatif, 
              aman, dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Mulai Sekarang
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;
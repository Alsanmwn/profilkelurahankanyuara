import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { Users, FileText, TrendingUp, MapPin, Calendar, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [dataPenduduk, setDataPenduduk] = useState({
    total_penduduk: 0,
    jumlah_kk: 0,
    jumlah_rt: 0,
    jumlah_rw: 0,
    jumlah_laki_laki: 0,
    jumlah_perempuan: 0,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'data_kelurahan', 'jumlah_penduduk');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDataPenduduk(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: 'Total Penduduk',
      value: dataPenduduk.total_penduduk.toLocaleString(),
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total KK',
      value: dataPenduduk.jumlah_kk.toLocaleString(),
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'RT/RW Aktif',
      value: `${dataPenduduk.jumlah_rt}/${dataPenduduk.jumlah_rw}`,
      icon: MapPin,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="lg:ml-64 transition-all duration-300">
        {/* Header with Mobile Menu Button */}
        <section className="bg-white px-4 sm:px-6 pt-4 lg:pt-8 pb-4 lg:pb-6 shadow-sm">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Menu Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFD700]">Dashboard Admin</h2>
              <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
                Selamat datang di sistem administrasi Kelurahan Kanyuara
              </p>
            </div>
          </div>
        </section>

        <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 text-xs sm:text-sm font-medium truncate">{stat.title}</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-lg ${stat.color} ml-2 flex-shrink-0`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {/* Population Statistics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                Statistik Penduduk
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Laki-laki</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 sm:w-24 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            dataPenduduk.total_penduduk
                              ? (dataPenduduk.jumlah_laki_laki / dataPenduduk.total_penduduk) * 100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">
                      {dataPenduduk.jumlah_laki_laki.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <span className="text-gray-600 text-sm sm:text-base">Perempuan</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 sm:w-24 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-pink-500 rounded-full transition-all duration-300"
                        style={{
                          width: `${
                            dataPenduduk.total_penduduk
                              ? (dataPenduduk.jumlah_perempuan / dataPenduduk.total_penduduk) * 100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium">
                      {dataPenduduk.jumlah_perempuan.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Menu */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Menu Cepat</h3>
              <div className="space-y-2 sm:space-y-3">
                <Link
                  to="/sambutanlurah"
                  className="w-full flex items-center space-x-3 p-2 sm:p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-100"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-blue-700 font-medium text-sm sm:text-base">Sambutan Lurah</span>
                </Link>

                <Link
                  to="/jumlahpenduduk"
                  className="w-full flex items-center space-x-3 p-2 sm:p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-100"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-green-700 font-medium text-sm sm:text-base">Input Data Penduduk</span>
                </Link>

                <Link
                  to="/saranaprasarana"
                  className="w-full flex items-center space-x-3 p-2 sm:p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border border-purple-100"
                >
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-purple-700 font-medium text-sm sm:text-base">Sarana & Prasarana</span>
                </Link>

                <Link
                  to="/strukturkelurahan"
                  className="w-full flex items-center space-x-3 p-2 sm:p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors border border-orange-100"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-orange-700 font-medium text-sm sm:text-base">Struktur Kelurahan</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#2D5016] to-[#4A7C23] rounded-xl p-4 sm:p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#FFD700]">Kelurahan Kanyuara</h3>
                <p className="text-green-100 text-xs sm:text-sm">Melayani dengan sepenuh hati untuk masyarakat</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Sabtu, 19 Juli 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Sidenreng Rappang</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
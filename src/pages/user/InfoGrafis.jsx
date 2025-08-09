import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';           
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Home,
  Users,
  Building,
  Layers,
  MapPin,
  Droplets,
  Heart,
  GraduationCap,
  School,
  Church,
  Factory,
  Wheat,
  Trophy,
  Zap,
  Waves,
  Bird,
  Fish,
  Beef,
  UserCheck,
  Users2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const box =
  'flex flex-col items-center justify-center text-center rounded-lg shadow ' +
  'border border-gray-200 bg-white px-4 py-5 space-y-1 ' +
  'hover:shadow-lg hover:scale-105 transition-transform duration-300';

const InfoGrafis = () => {
  const [penduduk, setPenduduk] = useState(null);      
  const [sarana, setSarana]     = useState(null);        
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [snapPend, snapSar] = await Promise.all([
          getDoc(doc(db, 'data_kelurahan', 'jumlah_penduduk')),
          getDoc(doc(db, 'data_kelurahan', 'sarana_prasarana')),
        ]);

        if (snapPend.exists()) setPenduduk(snapPend.data());
        if (snapSar.exists())  setSarana(snapSar.data());
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white animate-pulse">
        <p className="text-gray-500">Memuat data…</p>
      </div>
    );
  }

  // Data sarana prasarana dengan ikon yang berbeda
  const saranaPrasaranaData = [
    { label: 'Mandi Cuci Kakus', field: 'mandi_cuci_kakus', icon: <Droplets className="text-blue-600 h-6 w-6" /> },
    { label: 'Posyandu', field: 'posyandu', icon: <Heart className="text-red-500 h-6 w-6" /> },
    { label: 'Paud', field: 'paud', icon: <GraduationCap className="text-purple-600 h-6 w-6" /> },
    { label: 'SD', field: 'sd', icon: <School className="text-green-600 h-6 w-6" /> },
    { label: 'Masjid', field: 'masjid', icon: <Church className="text-emerald-700 h-6 w-6" /> },
    { label: 'Pabrik Karung', field: 'pabrik_karung', icon: <Factory className="text-gray-600 h-6 w-6" /> },
    { label: 'Pabrik Beras', field: 'pabrik_beras', icon: <Wheat className="text-amber-600 h-6 w-6" /> },
    { label: 'Lapangan Olahraga', field: 'lapangan_olahraga', icon: <Trophy className="text-orange-500 h-6 w-6" /> },
    { label: 'Bulu Tangkis', field: 'bulu_tangkis', icon: <Zap className="text-yellow-500 h-6 w-6" /> },
    { label: 'Tambak/Empang', field: 'tambak_empang', icon: <Waves className="text-blue-500 h-6 w-6" /> },
    { label: 'Ternak Bebek', field: 'ternak_bebek', icon: <Bird className="text-yellow-600 h-6 w-6" /> },
    { label: 'Ternak Ikan', field: 'ternak_ikan', icon: <Fish className="text-cyan-500 h-6 w-6" /> },
    { label: 'Ternak Sapi', field: 'ternaik_sapi', icon: <Beef className="text-brown-600 h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      <motion.section 
        className="bg-white px-4 pt-24 md:pt-28 pb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block
                         after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto">
            Info Grafis
          </h2>
        </div>
      </motion.section>

      <section className="px-4 py-2 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">

          <motion.h4 
            className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Data Umum Kelurahan Kanyuara
          </motion.h4>

          <motion.div 
            className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="text-lg md:text-xl text-[#FFD700] font-bold mb-2">Jumlah Penduduk</h5>
            <div className="mt-2 h-[4px] w-24 bg-[#DAA520]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              {[
                { icon: <Users className="text-blue-600 h-6 w-6" />, label: 'Total Penduduk', value: penduduk?.total_penduduk },
                { icon: <MapPin className="text-green-600 h-6 w-6" />, label: 'Jumlah Lingkungan', value: penduduk?.jumlah_lingkungan },
                { icon: <Users2 className="text-purple-600 h-6 w-6" />, label: 'Jumlah KK', value: penduduk?.jumlah_kk },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${box} w-full`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {item.icon}
                  <p className="text-sm md:text-base font-regular">{item.label}</p>
                  <span className="text-[#FFD700] font-semibold text-xl">{item.value ?? '—'}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
                {[
                  { icon: <Building className="text-orange-600 h-6 w-6" />, label: 'Jumlah RT', value: penduduk?.jumlah_rt },
                  { icon: <Layers className="text-teal-600 h-6 w-6" />, label: 'Jumlah RW', value: penduduk?.jumlah_rw },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`${box} w-full`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    {item.icon}
                    <p className="text-sm md:text-base font-regular">{item.label}</p>
                    <span className="text-[#FFD700] font-semibold text-xl">{item.value ?? '—'}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="text-lg md:text-xl text-[#FFD700] font-bold mb-2">Sarana &amp; Prasarana</h5>
            <div className="mt-2 h-[4px] w-24 bg-[#DAA520]" />

            <motion.div
              className="mx-auto w-full md:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={`${box} w-full`}>
                <Building className="text-slate-700 h-6 w-6" />
                <p className="text-sm md:text-base font-regular">Kantor Kelurahan</p>
                <span className="text-[#FFD700] font-semibold text-xl">1</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {saranaPrasaranaData.map(({ label, field, icon }, i) => (
                <motion.div
                  key={field}
                  className={`${box} w-full`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                >
                  {icon}
                  <p className="text-sm md:text-base font-regular">{label}</p>
                  <span className="text-[#FFD700] font-semibold text-xl">
                    {sarana?.[field] ?? '—'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoGrafis;
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
} from 'lucide-react';

const box =
  'flex flex-col items-center justify-center text-center rounded-lg shadow ' +
  'border border-gray-200 bg-white px-4 py-5 space-y-1 ' +
  'hover:shadow-md transition';

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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500">Memuat data…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      <section className="bg-white px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block
                         after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto">
            Info Grafis
          </h2>
        </div>
      </section>

      <section className="px-4 py-2 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">

          <h4 className="text-[#FFD700] font-bold text-lg md:text-2xl flex items-center gap-3">
            <span className="h-8 w-[3px] bg-[#DAA520]" />
            Data Umum Kelurahan Kanyuara
          </h4>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-6">
            <h5 className="text-lg md:text-xl text-[#FFD700] font-bold mb-2">Jumlah Penduduk</h5>
            <div className="mt-2 h-[4px] w-24 bg-[#DAA520]" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <div className={`${box} w-full`}>
                <Users className="text-black h-6 w-6" />
                <p className="text-sm md:text-base font-regular">Total Penduduk</p>
                <span className="text-[#FFD700] font-semibold text-xl">
                  {penduduk?.total_penduduk ?? '—'}
                </span>
              </div>
              <div className={`${box} w-full`}>
                <Home className="text-black h-6 w-6" />
                <p className="text-sm md:text-base font-regular">Jumlah Lingkungan</p>
                <span className="text-[#FFD700] font-semibold text-xl">
                  {penduduk?.jumlah_lingkungan ?? '—'}
                </span>
              </div>
              <div className={`${box} w-full`}>
                <Home className="text-black h-6 w-6" />
                <p className="text-sm md:text-base font-regular">Jumlah KK</p>
                <span className="text-[#FFD700] font-semibold text-xl">
                  {penduduk?.jumlah_kk ?? '—'}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
                <div className={`${box} w-full`}>
                  <Layers className="text-black h-6 w-6" />
                  <p className="text-sm md:text-base font-regular">Jumlah RT</p>
                  <span className="text-[#FFD700] font-semibold text-xl">
                    {penduduk?.jumlah_rt ?? '—'}
                  </span>
                </div>
                <div className={`${box} w-full`}>
                  <Layers className="text-black h-6 w-6" />
                  <p className="text-sm md:text-base font-regular">Jumlah RW</p>
                  <span className="text-[#FFD700] font-semibold text-xl">
                    {penduduk?.jumlah_rw ?? '—'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-6">
            <h5 className="text-lg md:text-xl text-[#FFD700] font-bold mb-2">Sarana &amp; Prasarana</h5>
            <div className="mt-2 h-[4px] w-24 bg-[#DAA520]" />

            <div className="mx-auto w-full md:w-2/3">
              <div className={`${box} w-full`}>
                <Building className="text-black h-6 w-6" />
                <p className="text-sm md:text-base font-regular">Kantor Kelurahan</p>
                <span className="text-[#FFD700] font-semibold text-xl">1</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {[
                { label: 'Mandi Cuci Kakus', field: 'mandi_cuci_kakus' },
                { label: 'Posyandu',            field: 'posyandu' },
                { label: 'Paud',                  field: 'paud' },
                { label: 'SD',                  field: 'sd' },
                { label: 'Masjid',              field: 'masjid' },
                { label: 'Pabrik Karung',           field: 'pabrik_karung' },
                { label: 'Pabrik Beras',           field: 'pabrik_beras' },
                { label: 'Lapangan Olahraga',           field: 'lapangan_olahraga' },
                { label: 'Bulu Tangkis',        field: 'bulu_tangkis' },
                { label: 'Tambak/Empang',        field: 'tambak_empang' },
                { label: 'Ternak Bebek',        field: 'ternak_bebek' },
                { label: 'Ternak Ikan',        field: 'ternak_ikan' },
                { label: 'Ternak Sapi',        field: 'ternaik_sapi' },
              ].map(({ label, field }) => (
                <div key={field} className={`${box} w-full`}>
                  <MapPin className="text-black h-6 w-6" />
                  <p className="text-sm md:text-base font-regular">{label}</p>
                  <span className="text-[#FFD700] font-semibold text-xl">
                    {sarana?.[field] ?? '—'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoGrafis;

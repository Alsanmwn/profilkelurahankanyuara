import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Sidebar from '../../components/Sidebar';

const SaranaPrasarana = () => {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'data_kelurahan', 'sarana_prasarana'));
        if (snap.exists()) {
          setData(snap.data());
          setEditedData(snap.data());
        } else {
          console.log('Dokumen tidak ditemukan');
        }
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (field, value) =>
    setEditedData((prev) => ({ ...prev, [field]: parseInt(value) || 0 }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateDoc(doc(db, 'data_kelurahan', 'sarana_prasarana'), editedData);
      setData(editedData);
      setEditMode(false);
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setSaving(false);
    }
  };

  const fields = [
    { field: 'lapangan_olahraga', label: 'Lapangan Olahraga' },
    { field: 'bulu_tangkis', label: 'Lapangan Bulu Tangkis' },
    { field: 'pemakaman', label: 'Pemakaman' },
    { label: 'Tambak/Empang',        field: 'tambak_empang' },
    { label: 'Ternak Bebek',        field: 'ternak_bebek' },
    { label: 'Ternak Ikan',        field: 'ternak_ikan' },
    { label: 'Ternak Sapi',        field: 'ternaik_sapi' },
    { field: 'masjid', label: 'Masjid' },
    { field: 'pabrik_karung', label: 'Pabrik Karung' },
    { field: 'pabrik_beras', label: 'Pabrik Beras' },
    { field: 'posyandu', label: 'Posyandu' },
    { field: 'mandi_cuci_kakus', label: 'Mandi Cuci Kakus' },
    { field: 'sd', label: 'Sekolah Dasar (SD)' },
    { field: 'paud', label: 'Paud' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="md:ml-64 px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] text-center">
            Sarana & Prasarana
          </h2>

          {loading ? (
            <p className="mt-8 text-center text-gray-500">Memuat data...</p>
          ) : data ? (
            <div className="mt-8 overflow-x-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                <thead className="bg-[#056805] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Kategori</th>
                    <th className="px-6 py-3 text-left font-semibold">Jumlah</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {fields.map(({ field, label }) => (
                    <tr key={field} className="hover:bg-gray-50">
                      <td className="px-6 py-3">{label}</td>
                      <td className="px-6 py-3">
                        {editMode ? (
                          <input
                            type="number"
                            value={editedData[field]}
                            onChange={(e) => handleChange(field, e.target.value)}
                            className="border rounded px-2 py-1 w-full"
                          />
                        ) : (
                          data[field]
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center gap-4 mt-6">
                {editMode ? (
                  <>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-5"
                    >
                      {saving ? 'Menyimpan…' : 'Simpan'}
                    </button>
                    <button
                      onClick={() => {
                        setEditMode(false);
                        setEditedData(data);
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mb-5"
                    >
                      Batal
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mb-5"
                  >
                    Edit Data
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500 mt-8">Data tidak ditemukan.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default SaranaPrasarana;

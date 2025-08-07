import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Sidebar from '../../components/Sidebar';

const SambutanLurah = () => {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null); 

  const CLOUD_NAME = 'dnqelrnof';       
  const UPLOAD_PRESET = 'kknt114kanyuara'; 

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'data_kelurahan', 'sambutan_lurah'));
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
    setEditedData((prev) => ({ ...prev, [field]: value }));

  const handleSave = async () => {
    setSaving(true);
    try {
      let imageUrl = editedData.gambar;

      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        const data = await res.json();
        imageUrl = data.secure_url;
      }

      await updateDoc(doc(db, 'data_kelurahan', 'sambutan_lurah'), {
        ...editedData,
        gambar: imageUrl,
      });

      setData({ ...editedData, gambar: imageUrl });
      setEditMode(false);
      setImageFile(null);
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-64 px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] text-center">
            Sambutan Lurah
          </h2>

          {loading ? (
            <p className="mt-8 text-center text-gray-500">Memuat data...</p>
          ) : data ? (
            <div className="mt-8 overflow-x-auto rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                <thead className="bg-[#056805] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Kategori</th>
                    <th className="px-6 py-3 text-left font-semibold">Detail</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Foto Lurah</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                            className="mb-2"
                          />
                          {editedData.gambar && (
                            <img
                              src={
                                imageFile
                                  ? URL.createObjectURL(imageFile)
                                  : editedData.gambar
                              }
                              alt="Preview"
                              className="w-28 h-28 object-cover rounded-lg mt-2"
                            />
                          )}
                        </>
                      ) : editedData.gambar ? (
                        <img
                          src={editedData.gambar}
                          alt={editedData.nama}
                          className="w-28 h-28 object-cover rounded-lg"
                        />
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Nama Lurah</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <input
                          type="text"
                          value={editedData.nama}
                          onChange={(e) => handleChange('nama', e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        data.nama
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Teks Sambutan</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <textarea
                          value={editedData.sambutan}
                          onChange={(e) =>
                            handleChange('sambutan', e.target.value)
                          }
                          rows={6}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        <span className="whitespace-pre-line">{data.sambutan}</span>
                      )}
                    </td>
                  </tr>
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
                        setImageFile(null);
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

export default SambutanLurah;

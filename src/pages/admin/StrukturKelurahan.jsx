import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Sidebar from '../../components/Sidebar';

const StrukturKelurahan = () => {
  const [data, setData] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const CLOUD_NAME = 'dnqelrnof';
  const UPLOAD_PRESET = 'kknt114kanyuara';

  const docRef = doc(db, 'struktur_kelurahan', 'struktur');

useEffect(() => {
  const fetchData = async () => {
    const docRef = doc(db, 'struktur_kelurahan', 'struktur');
    try {
      const snap = await getDoc(docRef);
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
  };

  fetchData();
}, []);

  const handleChange = (field, value) =>
    setEditedData((prev) => ({ ...prev, [field]: value }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateDoc(docRef, editedData);
      setData(editedData);
      setEditMode(false);
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setSaving(false);
    }
  };

  const uploadToCloudinary = async (file, fieldName) => {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await res.json();
      handleChange(fieldName, data.secure_url);
    } catch (err) {
      console.error('Upload gagal:', err);
      alert('Upload gagal. Coba lagi.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-64 px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] text-center">
            Struktur Kelurahan
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
                    <td className="px-6 py-3">Bagan Struktur</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              uploadToCloudinary(e.target.files[0], 'bagan')
                            }
                            className="mb-2"
                          />
                          {editedData.bagan && (
                            <img
                              src={editedData.bagan}
                              alt="Bagan"
                              className="w-40 h-40 object-contain rounded"
                            />
                          )}
                        </>
                      ) : editedData.bagan ? (
                        <img
                          src={editedData.bagan}
                          alt="Bagan"
                          className="w-40 h-40 object-contain rounded"
                        />
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Peta Kelurahan Kanyuara</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              uploadToCloudinary(e.target.files[0], 'peta_kelurahan')
                            }
                            className="mb-2"
                          />
                          {editedData.peta_kelurahan && (
                            <img
                              src={editedData.peta_kelurahan}
                              alt="Peta Kelurahan"
                              className="w-40 h-40 object-cover rounded"
                            />
                          )}
                        </>
                      ) : editedData.peta_kelurahan ? (
                        <img
                          src={editedData.peta_kelurahan}
                          alt="Peta Kelurahan"
                          className="w-40 h-40 object-cover rounded"
                        />
                      ) : (
                        '—'
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Foto Lurah</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              uploadToCloudinary(e.target.files[0], 'foto_lurah')
                            }
                            className="mb-2"
                          />
                          {editedData.foto_lurah && (
                            <img
                              src={editedData.foto_lurah}
                              alt="Lurah"
                              className="w-40 h-40 object-cover rounded"
                            />
                          )}
                        </>
                      ) : editedData.foto_lurah ? (
                        <img
                          src={editedData.foto_lurah}
                          alt="Lurah"
                          className="w-40 h-40 object-cover rounded"
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
                          value={editedData.nama_lurah || ''}
                          onChange={(e) =>
                            handleChange('nama_lurah', e.target.value)
                          }
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        data.nama_lurah || '—'
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Visi</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <textarea
                          rows={4}
                          value={editedData.visi || ''}
                          onChange={(e) => handleChange('visi', e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        <span className="whitespace-pre-line">
                          {data.visi || '—'}
                        </span>
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-3">Misi</td>
                    <td className="px-6 py-3">
                      {editMode ? (
                        <textarea
                          rows={4}
                          value={editedData.misi || ''}
                          onChange={(e) => handleChange('misi', e.target.value)}
                          className="border rounded px-2 py-1 w-full"
                        />
                      ) : (
                        <span className="whitespace-pre-line">
                          {data.misi || '—'}
                        </span>
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
                      disabled={saving || uploading}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mb-5"
                    >
                      {saving || uploading ? 'Menyimpan…' : 'Simpan'}
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

export default StrukturKelurahan;

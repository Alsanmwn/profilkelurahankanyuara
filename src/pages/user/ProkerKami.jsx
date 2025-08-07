import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import zacky from '../../assets/zacky.png';
import lisa from '../../assets/lisa.png';
import ayuu from '../../assets/ayuu.png';
import ulfa from '../../assets/ulfa.png';
import nurul from '../../assets/nurul.png';
import kakbudi from '../../assets/kakbudi.png';
import foto13 from '../../assets/foto13.jpg';

const ProkerKami = () => {
  const prokerData = [
    {
      id: 1,
      name: "Muhammad Zacky Ananta T.",
      major: "Administrasi Publik",
      image: zacky,
      description: (
        <>
            <strong>Optimalisasi Pelayanan Administrasi Kelurahan melalui Digitalisasi dan Edukasi Publik</strong> yang berfokus pada penyederhanaan pelayanan surat-menyurat melalui penyediaan template surat, QR Code akses dokumen, dan poster visual alur layanan. Tujuan utamanya adalah meningkatkan efisiensi dan pemahaman masyarakat terhadap proses administrasi kelurahan.
        </>
      )
    },
    {
      id: 2,
      name: "Nur Halisa Hamka",
      major: "Manajeman",
      image: lisa,
      description:  (
        <>
            <strong>Workshop Pembuatan Motif Totebag dengan Eco-Print</strong> yang dilaksanakan bersama siswa SD 4 Watang Sidenreng. Tujuannya adalah mengenalkan teknik pencetakan motif alami menggunakan daun dan bahan ramah lingkungan, sekaligus menumbuhkan kreativitas, kepedulian terhadap alam, dan semangat kewirausahaan sejak dini. Kegiatan ini menghasilkan produk handmade yang memiliki nilai jual dan diharapkan dapat menjadi bekal keterampilan siswa.
        </>
      )
    },
    {
      id: 3,
      name: "Ayu Widya Ningrum",
      major: "Teknik Informatika",
      image: ayuu,
      description: (
        <>
            <strong>Pembuatan Website Profil Kelurahan</strong> yang bertujuan menyediakan informasi kelurahan yang mudah diakses, terstruktur, dan menarik melalui platform digital. Website ini dirancang dengan tampilan yang modern dan user-friendly untuk mendukung transparansi dan promosi potensi kelurahan kepada masyarakat luas.
        </>
      )
    },
    {
      id: 4,
      name: "Maria Ulfa",
      major: "Biologi",
      image: ulfa,
      description: (
        <>
            <strong>Workshop Pembuatan Eco-Enzyme</strong> yang bertujuan untuk meningkatkan pengetahuan serta keterampilan masyarakat dalam mengolah limbah organik rumah tangga menjadi produk ramah lingkungan seperti pupuk cair, pembersih alami, dan pengusir hama. Kegiatan ini menyasar ibu rumah tangga, pemuda, dan kader PKK, dengan harapan peserta mampu memahami manfaat eco-enzyme serta mempraktikkan pembuatannya secara mandiri.
        </>
      )
    },
    {
      id: 5,
      name: "Nurul Hidayah",
      major: "Teknik Perencanaan Wilayah & Kota",
      image: nurul,
      description: (
        <>
            <strong>Pemetaan Kelurahan Kanyuara</strong> yang dilakukan untuk mendokumentasikan kondisi penggunaan lahan secara aktual dan menyusun peta tematik yang bermanfaat dalam perencanaan pembangunan. Peta disusun dalam format digital dan cetak agar mudah diakses serta dipahami oleh aparat kelurahan dan masyarakat.
        </>
      )
    },
    {
      id: 6,
      name: "Budi Santoso",
      major: "Kesehatan Masyarakat",
      image: kakbudi,
      description: (
        <>
            <strong>Pencegahan Demam Berdarah Dengue (DBD)</strong> yang menyasar siswa SDN 3 Watang Sidenreng kelas V dan VI serta masyarakat sekitar. Dalam program ini, siswa dilatih menjadi "Jumantik Cilik" yang bertugas memantau dan mencegah perkembangan nyamuk Aedes aegypti. Mereka diberikan edukasi tentang 3M plus, siklus hidup nyamuk, serta pentingnya menjaga kebersihan lingkungan, agar dapat menjadi agen perubahan di lingkungannya masing-masing.
        </>
      )
    },
    {
      id: 7,
      name: "Tim KKNT-114 Kelurahan Kanyuara",
      major: "Universitas Hasanuddin",
      image: foto13, 
      description: (
        <>
            Sebagai program kerja kelompok, dilaksanakan <strong>Pembuatan Buku Financial Planning untuk Petani</strong> yang bertujuan untuk meningkatkan literasi keuangan para petani kecil dan menengah. Buku ini disusun secara praktis dan disesuaikan dengan kebutuhan petani agar dapat membantu mereka dalam merencanakan pengelolaan hasil pertanian secara efisien dan berkelanjutan. Buku tersebut kemudian dicetak dan didistribusikan kepada kelompok tani sebagai bentuk kontribusi nyata dalam meningkatkan ketahanan ekonomi rumah tangga petani.
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      
      <section className="bg-white px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block
                         after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#056805] after:mx-auto">
            Proker Kami
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Berbagai program kerja yang telah kami jalankan untuk kemajuan dan kesejahteraan masyarakat
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {prokerData.slice(0, 6).map((proker) => (
              <div 
                key={proker.id}
                className="group h-80 md:h-96 [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-transform duration-700 
                              [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] 
                                rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="h-4/5 overflow-hidden">
                        <img 
                          src={proker.image} 
                          alt={proker.name}
                          className="w-full h-full object-cover transition-transform duration-300 
                                   group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="bg-white p-4 text-center h-1/5 flex flex-col justify-center">
                        <p className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                          {proker.name}
                        </p>
                        <p className="text-gray-500 text-xs md:text-sm italic">
                          {proker.major}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] 
                                 [transform:rotateY(180deg)] rounded-lg shadow-md border border-gray-200 
                                 bg-[#f7f4e8] overflow-hidden">
                    <div className="h-full flex flex-col p-6 text-white">
                      <div className="text-center mb-4">
                        <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                          Program Kerja
                        </h3>
                        <div className="w-12 h-1 bg-[#056805] mx-auto rounded"></div>
                      </div>

                      <div className="text-center mb-4">
                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                          {proker.name}
                        </p>
                        <p className="text-gray-700 text-xs md:text-sm italic">
                          {proker.major}
                        </p>
                      </div>
                      
                      <div className="flex-1 flex items-center">
                        <p className="text-gray-800 text-xs md:text-sm leading-relaxed text-center">
                          {proker.description}
                        </p>
                      </div>
                      
                      <div className="text-center mt-4">
                        <p className="text-[10px] md:text-xs font-semibold text-[#056805] italic tracking-wide">
                            "Keep On Fighting Till The End"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {prokerData.length > 6 && (
            <div className="flex justify-center">
              <div className="w-full max-w-sm lg:max-w-md">
                {prokerData.slice(6).map((proker) => (
                  <div 
                    key={proker.id}
                    className="group h-80 md:h-96 [perspective:1000px]"
                  >
                    <div className="relative h-full w-full transition-transform duration-700 
                                  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] 
                                    rounded-lg shadow-md border border-gray-200 overflow-hidden">
                        <div className="h-full flex flex-col">
                          <div className="h-4/5 overflow-hidden">
                            <img 
                              src={proker.image} 
                              alt={proker.name}
                              className="w-full h-full object-cover transition-transform duration-300 
                                       group-hover:scale-110"
                            />
                          </div>
                          
                          <div className="bg-white p-4 text-center h-1/5 flex flex-col justify-center">
                            <p className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                              {proker.name}
                            </p>
                            <p className="text-gray-500 text-xs md:text-sm italic">
                              {proker.major}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] 
                                     [transform:rotateY(180deg)] rounded-lg shadow-md border border-gray-200 
                                     bg-[#f7f4e8] overflow-hidden">
                        <div className="h-full flex flex-col p-6 text-white">
                          <div className="text-center mb-4">
                            <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                              Program Kerja
                            </h3>
                            <div className="w-12 h-1 bg-[#056805] mx-auto rounded"></div>
                          </div>
                          
                          <div className="text-center mb-4">
                            <p className="font-semibold text-gray-800 text-sm md:text-base">
                              {proker.name}
                            </p>
                            <p className="text-gray-700 text-xs md:text-sm italic">
                              {proker.major}
                            </p>
                          </div>
                          
                          <div className="flex-1 flex items-center">
                            <p className="text-gray-800 text-xs md:text-sm leading-relaxed text-center">
                              {proker.description}
                            </p>
                          </div>
                          
                          <div className="text-center mt-4">
                            <p className="text-[10px] md:text-xs font-semibold text-[#056805] italic tracking-wide">
                                "Keep On Fighting Till The End"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProkerKami;
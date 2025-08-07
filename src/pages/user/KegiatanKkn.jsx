import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import sampul   from '../../assets/foto11.jpg';
import sampul2  from '../../assets/foto22.jpg';
import sampul3  from '../../assets/foto33.jpg';
import sampul4  from '../../assets/foto44.jpg';
import sampul5  from '../../assets/foto55.jpg';
import sampul6  from '../../assets/foto66.jpg';
import sampul7  from '../../assets/foto77.jpg';
import sampul8  from '../../assets/foto88.jpg';
import sampul9  from '../../assets/foto99.jpg';
import sampul10 from '../../assets/foto10.jpg';
import sampul11 from '../../assets/foto111.jpg';
import sampul12 from '../../assets/foto12.jpg';
import sampul13 from '../../assets/foto13.jpg';
import sampul14 from '../../assets/foto14.jpg';
import sampul15 from '../../assets/foto15.jpg';
import sampul16 from '../../assets/foto16.jpg';
import sampul17 from '../../assets/foto17.jpg';
import sampul18 from '../../assets/foto18.jpg';
import sampul19 from '../../assets/foto19.jpg';
import sampul20 from '../../assets/foto20.jpg';
import sampul21 from '../../assets/foto21.jpg';
import sampul222 from '../../assets/foto222.jpg';
import sampul23 from '../../assets/foto23.jpg';
import sampul24 from '../../assets/foto24.jpg';
import sampul25 from '../../assets/foto25.jpg';

const items = [
  { id: 1,  img: sampul },
  { id: 2,  img: sampul2 },
  { id: 3,  img: sampul3, tall: true },
  { id: 4,  img: sampul4 },
  { id: 5,  img: sampul5 },
  { id: 6,  img: sampul6, tall: true },
  { id: 7,  img: sampul7 },
  { id: 8,  img: sampul8 },
  { id: 9,  img: sampul9 },
  { id:10,  img: sampul10 },
  { id:11,  img: sampul11 },
  { id:12,  img: sampul12 },
  { id:13,  img: sampul13, tall: true },
  { id:14,  img: sampul14 },
  { id:15,  img: sampul15 },
  { id:16,  img: sampul16, tall: true },
  { id:17,  img: sampul17 },
  { id:18,  img: sampul18 },
  { id:19,  img: sampul19 },
  { id:20,  img: sampul20 },
  { id:21,  img: sampul21 },
  { id:22,  img: sampul222 },
  { id:23,  img: sampul23, tall: true },
  { id:24,  img: sampul24 },
  { id:25,  img: sampul25 },
];

const Card = ({ img, title, tall, onOpen }) => (
  <button
    onClick={() => onOpen(img, title)}
    className={`relative group overflow-hidden rounded-xl shadow-lg w-full
                ${tall ? 'lg:row-span-2 lg:min-h-[600px]' : 'h-64 md:h-72'}`}
  >
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300" />
    <h3 className="absolute bottom-4 left-0 right-0 px-4 text-center text-white
                   font-extrabold text-lg leading-tight drop-shadow-md">
      {title}
    </h3>
  </button>
);

const KegiatanKkn = () => {
  const [open, setOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleOpen = (img, title) => {
    setModalImg(img);
    setModalTitle(title);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      <section className="bg-white px-4 pt-24 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#FFD700] relative inline-block
                         after:block after:mt-2 after:h-[3px] after:w-14 after:bg-[#DAA520] after:mx-auto">
            Kegiatan KKN UNHAS Gel. 114 Yang Telah Kami Laksanakan
          </h2>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((it) => (
            <Card key={it.id} {...it} onOpen={handleOpen} />
          ))}
        </div>
      </section>

      <Footer />

      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >
            <button
              onClick={handleClose}
              className="absolute -right-4 -top-4 bg-white text-gray-800 rounded-full p-1 shadow
                         hover:bg-gray-100 transition"
            >
              ✕
            </button>

            <img
              src={modalImg}
              alt={modalTitle}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
            />
            <p className="mt-4 text-center text-white text-lg font-semibold drop-shadow-md">
              {modalTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KegiatanKkn;

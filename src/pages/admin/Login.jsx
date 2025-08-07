import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/fotodesa.png';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { CheckCircle, XCircle } from 'lucide-react'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 
  const [showErrorPopup, setShowErrorPopup] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, 'user', 'login');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const savedUsername = data.username.trim();
        const savedPassword = data.password.trim();

        if (username === savedUsername && password === savedPassword) {
          login();
          
          setShowSuccessPopup(true);
          
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        } else {
          setErrorMessage('Username atau password salah');
          setShowErrorPopup(true);
          
          setTimeout(() => {
            setShowErrorPopup(false);
          }, 3000);
        }
      } else {
        setErrorMessage('Data login tidak ditemukan');
        setShowErrorPopup(true);
        
        setTimeout(() => {
          setShowErrorPopup(false);
        }, 3000);
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Terjadi kesalahan saat login');
      setShowErrorPopup(true);
      
      setTimeout(() => {
        setShowErrorPopup(false);
      }, 3000);
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative" 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    > 
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0" /> 
 
      <div className="z-10 w-full max-w-md px-6 md:px-8 py-10 bg-white/5 rounded-xl backdrop-blur-md"> 
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8"> 
          Login Admin 
        </h1> 
 
        <form onSubmit={handleLogin} className="space-y-6"> 
          <div> 
            <label className="block text-white font-semibold mb-1" htmlFor="username"> 
              Username 
            </label> 
            <input 
              id="username" 
              type="text" 
              placeholder="Masukkan Nama Pengguna" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200" 
            /> 
          </div> 
 
          <div> 
            <label className="block text-white font-semibold mb-1" htmlFor="password"> 
              Password 
            </label> 
            <input 
              id="password" 
              type="password" 
              placeholder="Masukkan Kata Sandi" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200" 
            /> 
          </div> 
 
          <div className="pt-2"> 
            <button 
              type="submit" 
              className="w-full bg-[#056805] hover:bg-[#045004] text-white font-semibold py-2 rounded-md transition" 
            > 
              Login 
            </button> 
          </div> 
        </form> 
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm text-center transform animate-pulse">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="text-green-600 w-12 h-12" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Login Berhasil!
            </h2>
            <p className="text-gray-600 mb-4">
              Selamat datang, Admin
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
            
            <p className="text-sm text-gray-500 mt-3">
              Mengarahkan ke dashboard...
            </p>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-sm text-center transform animate-bounce">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 rounded-full p-3">
                <XCircle className="text-red-600 w-12 h-12" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Login Gagal!
            </h2>
            <p className="text-gray-600 mb-4">
              {errorMessage}
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
            
            <p className="text-sm text-gray-500 mt-3">
              Silakan coba lagi...
            </p>

            <button
              onClick={() => setShowErrorPopup(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div> 
  ); 
}; 

export default Login;
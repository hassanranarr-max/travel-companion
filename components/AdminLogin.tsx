
import React, { useState } from 'react';
import { X, Lock, Mail, LogIn, AlertCircle } from 'lucide-react';
import { signInAdmin } from '../lib/auth';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signInAdmin(email, password);
      
      if (result.success) {
        setEmail('');
        setPassword('');
        onLogin();
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md mx-4 relative overflow-hidden border border-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-[#0F0F0F] transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-[#0F0F0F] p-8 pb-12 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Lock className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white text-center mb-2">Admin Login</h2>
          <p className="text-slate-400 text-center text-sm">Enter your credentials to access the admin panel</p>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="email"
                required
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="password"
                required
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
                disabled={loading}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3">
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-red-700 font-semibold">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-extrabold py-5 rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center group text-lg transform hover:scale-[1.02] active:scale-100 disabled:transform-none"
          >
            {loading ? 'Logging in...' : 'Login'}
            {!loading && <LogIn size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

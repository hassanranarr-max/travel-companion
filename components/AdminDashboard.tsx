
import React, { useState, useRef } from 'react';
import { X, Plus, Edit2, Trash2, LogOut, Package, Search, Filter, Upload, Image as ImageIcon, AlertCircle, Loader2 } from 'lucide-react';
import { Tour } from '../types';
import { createTour, updateTour, deleteTour } from '../lib/tours';

interface AdminDashboardProps {
  tours: {
    international: Tour[];
    domestic: Tour[];
    umrah: Tour[];
  };
  onUpdateTours: () => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ tours, onUpdateTours, onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState<'International' | 'Domestic' | 'Umrah'>('International');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getCurrentTours = () => {
    switch (selectedCategory) {
      case 'International':
        return tours.international;
      case 'Domestic':
        return tours.domestic;
      case 'Umrah':
        return tours.umrah;
      default:
        return [];
    }
  };

  const filteredTours = getCurrentTours().filter(tour =>
    tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this package?')) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      await deleteTour(id);
      onUpdateTours();
    } catch (err: any) {
      setError(err.message || 'Failed to delete package');
      console.error('Error deleting tour:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (tour: Tour) => {
    setEditingTour(tour);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingTour(null);
    setIsModalOpen(true);
  };

  const handleSave = async (tourData: Omit<Tour, 'id'>) => {
    setLoading(true);
    setError('');

    try {
      if (editingTour) {
        // Update existing tour
        await updateTour(editingTour.id, tourData);
      } else {
        // Create new tour
        await createTour(tourData);
      }

      setIsModalOpen(false);
      setEditingTour(null);
      onUpdateTours();
    } catch (err: any) {
      setError(err.message || 'Failed to save package');
      console.error('Error saving tour:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#0F0F0F] text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Package className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-slate-400 text-sm">Manage Tour Packages</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-white/10 hover:bg-orange-500 px-6 py-3 rounded-xl transition-all"
            >
              <LogOut size={20} />
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-start space-x-3">
            <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm text-red-700 font-semibold">{error}</p>
              <button
                onClick={() => setError('')}
                className="text-xs text-red-600 hover:text-red-800 mt-1 underline"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Category Filter & Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-slate-400" size={20} />
              <div className="flex space-x-2">
                {(['International', 'Domestic', 'Umrah'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchTerm('');
                    }}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20"
            >
              <Plus size={20} />
              <span>Add Package</span>
            </button>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0F0F0F] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {tour.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F0F0F] mb-2">{tour.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{tour.location}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Price</p>
                    <p className="text-2xl font-extrabold text-[#0F0F0F]">${tour.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase font-bold mb-1">Duration</p>
                    <p className="text-lg font-bold text-[#0F0F0F]">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(tour)}
                    disabled={loading}
                    className="flex-1 flex items-center justify-center space-x-2 bg-orange-50 hover:bg-orange-100 disabled:bg-orange-50 disabled:opacity-50 text-orange-600 py-2 rounded-xl font-semibold transition-all"
                  >
                    <Edit2 size={16} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(tour.id)}
                    disabled={loading}
                    className="flex-1 flex items-center justify-center space-x-2 bg-red-50 hover:bg-red-100 disabled:bg-red-50 disabled:opacity-50 text-red-600 py-2 rounded-xl font-semibold transition-all"
                  >
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
            <Package className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-400 font-semibold text-lg">
              {searchTerm ? 'No packages found matching your search' : 'No packages in this category'}
            </p>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <TourModal
          tour={editingTour}
          category={selectedCategory}
          loading={loading}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTour(null);
            setError('');
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

interface TourModalProps {
  tour: Tour | null;
  category: 'International' | 'Domestic' | 'Umrah';
  loading?: boolean;
  onClose: () => void;
  onSave: (tourData: Omit<Tour, 'id'>) => void;
}

const TourModal: React.FC<TourModalProps> = ({ tour, category, loading = false, onClose, onSave }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: tour?.title || '',
    location: tour?.location || '',
    price: tour?.price || 0,
    duration: tour?.duration || '',
    image: tour?.image || '',
    category: category,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 10 MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Image size should be less than 10MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData({ ...formData, image: base64String });
      };
      reader.onerror = () => {
        alert('Error reading image file');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.location && formData.price > 0 && formData.duration && formData.image) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg mx-4 relative overflow-hidden border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-[#0F0F0F] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="bg-[#0F0F0F] p-8 pb-12 relative">
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            {tour ? 'Edit Package' : 'Add New Package'}
          </h2>
          <p className="text-slate-400 text-center text-sm">Category: {category}</p>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
              Package Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Premium Umrah Package"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
              Location
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Makkah & Madinah"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
              Package Image
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl px-6 py-8 cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all group"
            >
              {formData.image ? (
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-orange-600 group-hover:text-orange-700">
                    <Upload size={18} />
                    <span className="text-sm font-semibold">Click to change image</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <ImageIcon className="text-orange-600" size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-[#0F0F0F] font-semibold mb-1">Click to upload image</p>
                    <p className="text-slate-400 text-xs">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              )}
            </div>
            {!formData.image && (
              <p className="text-red-500 text-xs ml-1">Image is required</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
                Price ($)
              </label>
              <input
                type="number"
                required
                min="0"
                placeholder="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[#0F0F0F] text-sm font-bold uppercase tracking-widest block ml-1">
                Duration (Days)
              </label>
              <input
                type="text"
                required
                placeholder="e.g., 14 Days"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-orange-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 bg-slate-100 hover:bg-slate-200 disabled:bg-slate-50 disabled:cursor-not-allowed text-[#0F0F0F] font-bold py-4 rounded-2xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  {tour ? 'Updating...' : 'Adding...'}
                </>
              ) : (
                tour ? 'Update Package' : 'Add Package'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

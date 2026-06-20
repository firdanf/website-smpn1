import React, { useState, useEffect } from 'react';
import { Settings, Plus, Edit2, Trash2, X, Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { NewsItem, SiteSettings } from '../types';
import { getNews, addNewsItem, updateNewsItem, deleteNewsItem, getSiteSettings, saveSiteSettings } from '../lib/storage';

interface AdminDashboardProps {
  onClose: () => void;
}

const CATEGORIES = [
  { value: 'news', label: 'Berita' },
  { value: 'announcement', label: 'Pengumuman' },
  { value: 'achievement', label: 'Prestasi' },
] as const;

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [editingItem, setEditingItem] = useState<Partial<NewsItem> | null>(null);
  const [activeTab, setActiveTab] = useState<'news' | 'settings'>('news');
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings());

  useEffect(() => {
    setNewsList(getNews());
  }, []);

  const handleAddNew = () => {
    setEditingItem({
      titleId: '',
      titleEn: '',
      contentId: '',
      contentEn: '',
      category: 'news',
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
      readTimeId: '3',
      readTimeEn: '3',
    });
  };

  const handleEdit = (item: NewsItem) => {
    setEditingItem(item);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus postingan ini?')) {
      deleteNewsItem(id);
      setNewsList(getNews());
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    if (editingItem.id) {
      updateNewsItem(editingItem.id, editingItem);
    } else {
      addNewsItem(editingItem as Omit<NewsItem, 'id'>);
    }
    
    setEditingItem(null);
    setNewsList(getNews());
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteSettings(settings);
    alert('Pengaturan situs berhasil disimpan!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative z-50">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>
            <div>
              <h1 className="text-2xl font-bold font-sans text-white tracking-tight flex items-center gap-2">
                <Settings className="w-6 h-6 text-teal-400" />
                Admin Dashboard
              </h1>
              <p className="text-sm text-slate-400">Kelola konten portal sekolah SMPN 1 Bantarkalong</p>
            </div>
          </div>
          
          {!editingItem && activeTab === 'news' && (
            <button
              onClick={handleAddNew}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm tracking-wide rounded-lg transition-colors shadow-lg shadow-teal-500/20"
            >
              <Plus className="w-4 h-4" />
              Tambah Postingan
            </button>
          )}
        </div>

        {/* Tabs */}
        {!editingItem && (
          <div className="flex items-center gap-4 border-b border-slate-800 pb-px">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'news' ? 'border-teal-400 text-white' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Kelola Berita
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'settings' ? 'border-teal-400 text-white' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Pengaturan Situs
            </button>
          </div>
        )}

        {/* Editor Form */}
        {activeTab === 'settings' ? (
          <form onSubmit={handleSaveSettings} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-xl font-bold text-white mb-6">Pengaturan Situs</h2>
             
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">URL Gambar Hero/Dashboard</label>
                <div className="flex gap-4 items-start">
                  {settings.heroImageUrl && (
                    <img src={settings.heroImageUrl} className="w-32 h-20 object-cover rounded-lg border border-slate-700" alt="Hero Preview" />
                  )}
                  <input required type="text" value={settings.heroImageUrl} onChange={e => setSettings({...settings, heroImageUrl: e.target.value})} className="flex-1 bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none" placeholder="Contoh: /src/assets/images/foto.jpg atau https://..." />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">Email Kontak</label>
                <input required type="email" value={settings.contactEmail} onChange={e => setSettings({...settings, contactEmail: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">Nomor Telepon</label>
                <input required type="text" value={settings.contactPhone} onChange={e => setSettings({...settings, contactPhone: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">Teks Alamat Lokasi</label>
                <input required type="text" value={settings.locationText} onChange={e => setSettings({...settings, locationText: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">URL Embed Google Maps</label>
                <input required type="url" value={settings.mapEmbedUrl} onChange={e => setSettings({...settings, mapEmbedUrl: e.target.value})} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none" />
                <p className="text-xs text-slate-500 mt-1">Gunakan link src dari &lt;iframe&gt; (contoh: https://www.google.com/maps/embed?...)</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm rounded-lg transition-colors">
                <Save className="w-4 h-4" /> Simpan Pengaturan
              </button>
            </div>
          </form>
        ) : editingItem ? (
          <form onSubmit={handleSave} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">
                {editingItem.id ? 'Edit Postingan' : 'Buat Postingan Baru'}
              </h2>
              <button 
                type="button"
                onClick={() => setEditingItem(null)}
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bahasa Indonesia Info */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-teal-400 tracking-wider uppercase flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-teal-500/10 rounded-md">ID</span>
                    Bahasa Indonesia
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Judul</label>
                    <input 
                      required
                      type="text"
                      value={editingItem.titleId || ''}
                      onChange={e => setEditingItem({...editingItem, titleId: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Konten Text</label>
                    <textarea 
                      required
                      rows={5}
                      value={editingItem.contentId || ''}
                      onChange={e => setEditingItem({...editingItem, contentId: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* English Info */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-indigo-400 tracking-wider uppercase flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-indigo-500/10 rounded-md">EN</span>
                    English Version
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Title</label>
                    <input 
                      required
                      type="text"
                      value={editingItem.titleEn || ''}
                      onChange={e => setEditingItem({...editingItem, titleEn: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-indigo-500/50 outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase">Content</label>
                    <textarea 
                      required
                      rows={5}
                      value={editingItem.contentEn || ''}
                      onChange={e => setEditingItem({...editingItem, contentEn: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-indigo-500/50 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata Settings */}
            <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">Kategori</label>
                <select 
                  value={editingItem.category}
                  onChange={e => setEditingItem({...editingItem, category: e.target.value as any})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none appearance-none cursor-pointer"
                >
                  {CATEGORIES.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">Tanggal</label>
                <input 
                  required
                  type="date"
                  value={editingItem.date || ''}
                  onChange={e => setEditingItem({...editingItem, date: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-4 text-sm text-white focus:border-teal-500/50 outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase">URL Gambar</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ImageIcon className="w-4 h-4 text-slate-500" />
                  </div>
                  <input 
                    required
                    type="url"
                    value={editingItem.image || ''}
                    onChange={e => setEditingItem({...editingItem, image: e.target.value})}
                    placeholder="https://..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-teal-500/50 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold text-sm rounded-lg transition-colors"
              >
                <Save className="w-4 h-4" />
                Simpan Postingan
              </button>
            </div>
          </form>
        ) : (
          /* List View */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl animate-in fade-in">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950/50 text-xs uppercase font-mono tracking-wider text-slate-500 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Postingan</th>
                    <th className="px-6 py-4 font-semibold">Kategori</th>
                    <th className="px-6 py-4 font-semibold">Tanggal</th>
                    <th className="px-6 py-4 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {newsList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-white line-clamp-1">{item.titleId}</span>
                          <span className="text-xs text-slate-500 line-clamp-1">{item.titleEn}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-semibold ${
                          item.category === 'news' ? 'bg-blue-500/10 text-blue-400' :
                          item.category === 'achievement' ? 'bg-emerald-500/10 text-emerald-400' :
                          'bg-amber-500/10 text-amber-400'
                        }`}>
                          {CATEGORIES.find(c => c.value === item.category)?.label || item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400 font-mono text-xs">
                        {item.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleEdit(item)}
                            className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                            title="Edit Post"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 text-slate-400 hover:text-red-400 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                            title="Hapus Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {newsList.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                        Belum ada postingan berita.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

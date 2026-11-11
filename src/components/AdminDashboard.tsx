import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, Calendar, Download, RefreshCw, CheckCircle2, Clock, Filter, Eye, AlertCircle, X } from 'lucide-react';
import { InquiryData } from '../types';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'services' | 'content'>('inquiries');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'reviewed' | 'scheduled' | 'completed'>('all');

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) =>
          prev.map((item) => (item.id === id ? { ...item, status: newStatus as any } : item))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleExportCsv = () => {
    if (!inquiries.length) return;
    const headers = ['ID', 'Type', 'Name', 'Email', 'Company', 'Service', 'Budget', 'Timeline', 'Status', 'Date'];
    const rows = inquiries.map((i) => [
      i.id,
      i.type,
      `"${i.name}"`,
      i.email,
      `"${i.company || ''}"`,
      `"${i.service || ''}"`,
      `"${i.budget || ''}"`,
      `"${i.timeline || ''}"`,
      i.status,
      i.createdAt,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `innovationlab-inquiries-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredInquiries = statusFilter === 'all'
    ? inquiries
    : inquiries.filter((i) => i.status === statusFilter);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">InnovationLab Enterprise Admin Console</h3>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  SUPER ADMIN
                </span>
              </div>
              <p className="text-xs text-slate-400">Manage client inquiries, consultation requests, proposal leads, and content</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`py-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'inquiries' ? 'border-orange-600 text-orange-600' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Client Inquiries & Consultations ({inquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`py-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'services' ? 'border-orange-600 text-orange-600' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Service Catalog Management
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`py-3 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'content' ? 'border-orange-600 text-orange-600' : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Case Studies & Research
            </button>
          </div>

          {activeTab === 'inquiries' && (
            <div className="flex items-center gap-2">
              <button
                onClick={fetchInquiries}
                className="px-2.5 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleExportCsv}
                className="px-3 py-1 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3 h-3" />
                <span>Export CSV</span>
              </button>
            </div>
          )}
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              
              {/* Quick Stat Ribbon */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Total Inquiries</span>
                  <div className="text-xl font-bold text-slate-900 mt-0.5">{inquiries.length}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Scheduled Calls</span>
                  <div className="text-xl font-bold text-orange-600 mt-0.5">
                    {inquiries.filter((i) => i.status === 'scheduled').length}
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">New Unreviewed</span>
                  <div className="text-xl font-bold text-amber-600 mt-0.5">
                    {inquiries.filter((i) => i.status === 'new').length}
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium">Est. Pipeline Value</span>
                  <div className="text-xl font-bold text-emerald-600 mt-0.5">$380,000+</div>
                </div>
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Filter by Status:
                </span>
                {(['all', 'new', 'reviewed', 'scheduled', 'completed'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-md capitalize transition-colors cursor-pointer ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Client / Organization</th>
                      <th className="p-3">Type & Service</th>
                      <th className="p-3">Budget & Schedule</th>
                      <th className="p-3">Notes</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-3">
                          <span className="font-bold text-slate-900 block">{inq.name}</span>
                          <span className="text-slate-500 text-[11px] block">{inq.email}</span>
                          {inq.company && <span className="text-slate-400 text-[10px]">{inq.company}</span>}
                        </td>
                        <td className="p-3">
                          <span className="font-medium text-slate-900 capitalize block">{inq.type}</span>
                          <span className="text-slate-500 text-[11px]">{inq.service || 'N/A'}</span>
                        </td>
                        <td className="p-3">
                          <span className="text-slate-900 font-mono block">{inq.budget || 'TBD'}</span>
                          {inq.date && (
                            <span className="text-orange-600 font-medium text-[11px]">
                              {inq.date} ({inq.timeSlot})
                            </span>
                          )}
                        </td>
                        <td className="p-3 max-w-xs truncate text-slate-600 text-[11px]">
                          {inq.notes || 'No extra notes provided.'}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full font-semibold text-[10px] capitalize ${
                              inq.status === 'scheduled'
                                ? 'bg-orange-100 text-orange-800'
                                : inq.status === 'new'
                                ? 'bg-amber-100 text-amber-800'
                                : inq.status === 'completed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <select
                            value={inq.status}
                            onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                            className="text-xs px-2 py-1 bg-white border border-slate-300 rounded cursor-pointer text-slate-700"
                          >
                            <option value="new">New</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                    {filteredInquiries.length === 0 && (
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-slate-400">
                          No inquiries found matching current filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Active AI Services (8 Configured)</h4>
                <p className="text-slate-600 text-xs">All services are currently published with real-time request hooks.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'AI Agents & Intelligent Assistants',
                  'Enterprise AI Chatbots',
                  'Business Process Automation',
                  'Generative AI Solutions',
                  'Machine Learning & Predictive Modeling',
                  'Natural Language Processing',
                  'Computer Vision & Automated Inspection',
                  'Custom Enterprise AI Development',
                ].map((s, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                    <span className="font-semibold text-slate-800">{s}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[10px]">
                      LIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1">Case Studies & Whitepapers</h4>
                <p className="text-slate-600 text-xs">Verified client case studies with measurable ROI proof.</p>
              </div>
              <div className="space-y-2">
                <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">FinScale Global: AML Compliance Agent</span>
                    <span className="text-slate-500 text-xs">74% Turnaround Reduction · $420,000 Annual Savings</span>
                  </div>
                  <span className="text-emerald-600 font-semibold text-xs">Verified Client SOW</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">OmniLogistics: Demurrage Prevention Agent</span>
                    <span className="text-slate-500 text-xs">82% Detention Fines Cut · $697,000 Saved</span>
                  </div>
                  <span className="text-emerald-600 font-semibold text-xs">Verified Client SOW</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">NovaCare Health: Prior-Authorization NLP Bot</span>
                    <span className="text-slate-500 text-xs">68% Turnaround Acceleration · 99.4% Medical Precision</span>
                  </div>
                  <span className="text-emerald-600 font-semibold text-xs">Verified Client SOW</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

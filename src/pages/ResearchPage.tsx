import React, { useState } from 'react';
import { RESEARCH_ARTICLES } from '../data/mockData';
import { Search, BookOpen, Clock, ArrowRight, User, Calendar } from 'lucide-react';
import { ResearchArticle } from '../types';

export const ResearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);

  const categories = ['All', 'Autonomous Agents', 'LLM Architecture', 'Enterprise Guardrails'];

  const filtered = RESEARCH_ARTICLES.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          Engineering Papers & Architecture Guides
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Research & Enterprise AI Insights
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Technical blueprints, empirical benchmarks, and architectural strategies written by InnovationLab systems engineers for enterprise decision-makers.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-4 border-b border-slate-200">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles, guardrails, RAG..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article Modal / Detail View if selected */}
      {selectedArticle ? (
        <div className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-10 shadow-lg space-y-6 animate-in fade-in-50">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
          >
            ← Back to all articles
          </button>

          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
              <span>·</span>
              <span>{selectedArticle.publishedDate}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">{selectedArticle.title}</h2>
            <div className="text-xs text-slate-500 mt-1">Author: {selectedArticle.author}</div>
          </div>

          <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong>Executive Takeaway:</strong> {selectedArticle.summary}
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedArticle.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Key Engineering Conclusions</h4>
            <div className="space-y-2">
              {selectedArticle.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Article Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between card-hover-elevate group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-semibold text-orange-600 bg-orange-50 group-hover:bg-orange-100 px-2 py-0.5 rounded transition-colors">{art.category}</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mt-2 leading-snug group-hover:text-orange-600 transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">{art.publishedDate}</span>
                <span className="font-semibold text-orange-600 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-12 text-slate-400 text-sm">
              No articles found matching "{searchTerm}".
            </div>
          )}
        </div>
      )}

    </div>
  );
};

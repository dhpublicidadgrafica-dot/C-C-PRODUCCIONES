import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, User, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-24 bg-zinc-950 text-white relative" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog Técnico & SEO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-poppins tracking-tight">
            Noticias & Artículos de Producción
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Consejos de ingeniería, tendencias escenográficas y guías para organizadores de eventos.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 text-[10px] font-mono font-bold uppercase border border-amber-400/30">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-amber-400" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-400" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-poppins group-hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-amber-400 text-zinc-200 hover:text-zinc-950 text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    Leer Artículo Completo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-950/80 text-white hover:text-amber-400 border border-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64">
              <img 
                src={selectedPost.coverImage} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                <span>{selectedPost.category} • {selectedPost.readTime}</span>
                <span>{selectedPost.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-poppins">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
                <User className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="font-bold text-white block">{selectedPost.author}</span>
                  <span className="text-[10px] text-zinc-400">{selectedPost.authorRole}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-xs text-zinc-400 hover:text-white"
                >
                  Cerrar
                </button>

                <div className="flex gap-2">
                  {selectedPost.keywords.map((kw, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

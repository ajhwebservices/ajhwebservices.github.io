import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Code, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaunchPad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const dynamicWords = ['Revolutionary', 'Stunning', 'Lightning-Fast', 'Conversion-Focused', 'Award-Winning'];

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const floatingElements = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 bg-orange-400/30 rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    />
  ));

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-hidden flex items-center pt-20 pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            {/* Brand Identity - Mobile Optimized */}
            <div className="flex items-center justify-center space-x-3 mb-6 sm:mb-8">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-blue-900 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full animate-ping" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">AJH Web Services</h3>
                <p className="text-orange-400 text-xs sm:text-sm">Digital Innovation Lab</p>
              </div>
            </div>

            {/* Multi-line Headline with Fixed Layout */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                <div className="mb-2 sm:mb-4">Crafting</div>
                <div className="relative mb-2 sm:mb-4" style={{ minHeight: '1.2em' }}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500">
                    {dynamicWords[currentWord]}
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-lg animate-pulse" />
                </div>
                <div>Digital Experiences</div>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
                I don't just build websites—I architect digital ecosystems that transform businesses. 
                Based in Randolph, NJ, I'm pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Fixed-height Value Props Container */}
            <div className="min-h-[120px] sm:min-h-[80px] flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto w-full px-4">
                {[
                  { icon: Zap, text: '48hr Turnaround', color: 'from-blue-500 to-blue-700' },
                  { icon: Globe, text: 'Global Standards', color: 'from-blue-400 to-cyan-500' },
                  { icon: Sparkles, text: 'AI-Enhanced', color: 'from-blue-600 to-blue-800' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 pt-4">
              <Link 
                to="/connect"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center space-x-2">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Launch My Project</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link 
                to="/showcase"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-400 font-bold rounded-xl hover:bg-blue-500/10 transition-all duration-300 text-sm sm:text-base"
              >
                View My Universe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPad;
import React, { useState } from 'react';
import { Send, Zap, Calendar, MessageCircle, Phone, Mail, MapPin, Rocket } from 'lucide-react';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  return (
    <section id="connect" className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto mobile-padding relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              Launch?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's turn your vision into digital reality. Every great project starts with a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
              <Rocket className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-400" />
              Launch Your Project
            </h3>
            
            {isSubmitted ? (
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-6 sm:p-8 text-center">
                <Zap className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Mission Received!</h4>
                <p className="text-gray-300 text-sm sm:text-base">Your project brief has been transmitted. Expect contact within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select type...</option>
                      <option value="new-website">New Website</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="web-app">Web Application</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select budget...</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-blue-400 font-semibold mb-2 text-sm sm:text-base">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Tell me about your vision, goals, and what makes your project unique..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-xl hover:from-blue-800 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 group text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  <span>Launch Mission</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6 sm:space-y-8">
            {/* Direct Contact */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Direct Line</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Emergency Hotline</h4>
                    <p className="text-gray-300 text-sm">(973) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Mission Control</h4>
                    <p className="text-gray-300 text-sm">hello@ajhweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Base of Operations</h4>
                    <p className="text-gray-300 text-sm">Randolph, NJ & Beyond</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-600/30 rounded-xl hover:from-blue-600/30 hover:to-blue-800/30 transition-all duration-300">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  <span className="text-white font-semibold text-sm sm:text-base">Schedule Strategy Call</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl hover:from-green-500/30 hover:to-teal-500/30 transition-all duration-300">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                  <span className="text-white font-semibold text-sm sm:text-base">Start Live Chat</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-700/20 to-blue-900/20 border border-blue-700/30 rounded-xl hover:from-blue-700/30 hover:to-blue-900/30 transition-all duration-300">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300" />
                  <span className="text-white font-semibold text-sm sm:text-base">Emergency Support</span>
                </button>
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-gradient-to-r from-blue-600/10 to-blue-800/10 border border-blue-600/30 rounded-3xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">The AJH Promise</h3>
              <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>&lt; 2 hour response time</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <span>Free consultation & project audit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-200 rounded-full" />
                  <span>Transparent pricing, no surprises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
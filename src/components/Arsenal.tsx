import React, { useState } from 'react';
import { Code2, Palette, Zap, Shield, Rocket, Globe, Database, Smartphone } from 'lucide-react';

const Arsenal = () => {
  const [activeWeapon, setActiveWeapon] = useState(0);

  const weapons = [
    {
      icon: Code2,
      name: 'Code Mastery',
      description: 'Full-stack development with cutting-edge technologies',
      tools: ['React/Next.js', 'TypeScript', 'Node.js', 'Python'],
      color: 'from-blue-600 to-blue-900',
      price: 'From $2,500'
    },
    {
      icon: Palette,
      name: 'Design Alchemy',
      description: 'UI/UX that converts visitors into loyal customers',
      tools: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-blue-700',
      price: 'From $1,800'
    },
    {
      icon: Zap,
      name: 'Performance Wizardry',
      description: 'Lightning-fast sites that rank #1 on Google',
      tools: ['Core Web Vitals', 'SEO Optimization', 'CDN Setup', 'Caching'],
      color: 'from-blue-400 to-blue-600',
      price: 'From $800'
    },
    {
      icon: Shield,
      name: 'Security Fortress',
      description: 'Bank-level security for your digital assets',
      tools: ['SSL Certificates', 'Firewall Setup', 'Backup Systems', 'Monitoring'],
      color: 'from-blue-600 to-blue-900',
      price: 'From $500'
    },
    {
      icon: Database,
      name: 'Data Architecture',
      description: 'Scalable databases that grow with your business',
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      color: 'from-blue-700 to-blue-900',
      price: 'From $1,200'
    },
    {
      icon: Smartphone,
      name: 'Mobile Domination',
      description: 'Apps that feel native on every device',
      tools: ['React Native', 'PWA', 'Responsive Design', 'Touch Optimization'],
      color: 'from-blue-500 to-blue-800',
      price: 'From $3,000'
    }
  ];

  return (
    <section id="arsenal" className="py-12 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto mobile-padding relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 sm:mb-6">
            My Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Arsenal
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Each project is a mission. Here are the weapons I use to dominate the digital battlefield 
            and deliver results that exceed expectations.
          </p>
        </div>

        {/* Interactive Weapon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {weapons.map((weapon, index) => (
            <div
              key={index}
              onClick={() => setActiveWeapon(index)}
              className={`relative group cursor-pointer transition-all duration-500 ${
                activeWeapon === index ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${weapon.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              
              <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${weapon.color} rounded-xl flex items-center justify-center`}>
                    <weapon.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{weapon.name}</h3>
                    <p className="text-blue-400 font-semibold text-sm sm:text-base">{weapon.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{weapon.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {weapon.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {activeWeapon === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-2xl animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Battle Stats */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-700/50">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Battle-Tested Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: 'Projects Deployed', value: '50+', icon: Rocket },
              { label: 'Average Speed Boost', value: '300%', icon: Zap },
              { label: 'Client Satisfaction', value: '100%', icon: Shield },
              { label: 'Global Reach', value: '15+', icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
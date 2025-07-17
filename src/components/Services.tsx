import React from 'react';
import { Monitor, Smartphone, Search, Globe, Wrench, Zap, Shield, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Website Design & Redesign',
      description: 'Modern, professional websites that reflect your brand and convert visitors into customers.',
      features: ['Custom Design', 'Brand Integration', 'User Experience Focus', 'Content Management'],
      price: 'Starting at $1,500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Ensure your website looks perfect and functions flawlessly on all devices.',
      features: ['Responsive Design', 'Touch-Friendly Interface', 'Fast Loading', 'App-Like Experience'],
      price: 'Starting at $500'
    },
    {
      icon: Search,
      title: 'SEO & Speed Optimization',
      description: 'Improve your search rankings and site performance to attract more customers.',
      features: ['Keyword Research', 'On-Page SEO', 'Speed Optimization', 'Technical SEO'],
      price: 'Starting at $800'
    },
    {
      icon: Globe,
      title: 'Google Business Integration',
      description: 'Connect your website with Google My Business for better local visibility.',
      features: ['Google My Business Setup', 'Local SEO', 'Reviews Management', 'Map Integration'],
      price: 'Starting at $300'
    },
    {
      icon: Wrench,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting and ongoing maintenance to keep your website running smoothly.',
      features: ['Secure Hosting', 'Regular Updates', 'Backup & Recovery', '24/7 Monitoring'],
      price: 'Starting at $50/month'
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      description: 'Online stores that are easy to manage and help you sell more products.',
      features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Customer Accounts'],
      price: 'Starting at $2,500'
    }
  ];

  const trustSignals = [
    {
      icon: HeartHandshake,
      title: 'Locally Owned',
      description: 'Based in Randolph, NJ, supporting local businesses'
    },
    {
      icon: Shield,
      title: 'Free Estimates',
      description: 'No obligation consultations and transparent pricing'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Most projects completed within 2-3 weeks'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, I provide comprehensive web services 
            that help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-blue-600 font-medium">{service.price}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">What's included:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose AJH Web Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{signal.title}</h4>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
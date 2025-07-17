import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AJH Web Services</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional web design and development services for businesses in Randolph, NJ and beyond. 
              Creating modern, responsive websites that drive results.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Website Design</li>
              <li className="hover:text-white cursor-pointer transition-colors">Website Redesign</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobile Optimization</li>
              <li className="hover:text-white cursor-pointer transition-colors">SEO Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Web Hosting</li>
              <li className="hover:text-white cursor-pointer transition-colors">Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>(973) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>hello@ajhweb.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5" />
                <span>Randolph, NJ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} AJH Web Services LLC. All rights reserved. | 
            Proudly serving Randolph, NJ and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Code, Smartphone, Search, Globe, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Responsive Web Design',
      description: 'Modern HTML5, CSS3, and JavaScript frameworks'
    },
    {
      icon: Search,
      title: 'SEO & Analytics',
      description: 'Search optimization and performance tracking'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Perfect experience across all devices'
    },
    {
      icon: Globe,
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting and ongoing support'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Started AJH Web Services',
      description: 'Began helping local businesses in Randolph, NJ establish their online presence'
    },
    {
      year: '2021',
      title: 'Expanded Service Offerings',
      description: 'Added SEO optimization and Google Business integration services'
    },
    {
      year: '2022',
      title: 'Hosting Solutions',
      description: 'Launched comprehensive hosting and maintenance packages'
    },
    {
      year: '2023',
      title: 'Growing Regional Presence',
      description: 'Serving clients across Morris County and beyond'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hi, I'm Andrew - Your Local Web Designer
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                I'm a passionate web designer and developer based in Randolph, New Jersey, 
                dedicated to helping local businesses succeed online. With years of experience 
                in modern web technologies, I specialize in creating beautiful, functional 
                websites that drive real results.
              </p>
              <p>
                My design philosophy centers on clean, user-friendly experiences that convert 
                visitors into customers. I believe every business deserves a professional online 
                presence that reflects their unique value proposition and connects with their 
                target audience.
              </p>
              <p>
                When I'm not coding, you can find me exploring local coffee shops around Morris 
                County, networking with other small business owners, and staying up-to-date with 
                the latest web design trends and technologies.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Coffee className="h-5 w-5 text-brown-600" />
                <span className="text-gray-700">Fueled by coffee from Corner Stone Café</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">Passionate about small business success</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">AJH</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Andrew J. Harrison</h3>
                  <p className="text-gray-600">Web Designer & Developer</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Projects Completed</span>
                    <span className="font-semibold text-gray-900">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Happy Clients</span>
                    <span className="font-semibold text-gray-900">45+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Years Experience</span>
                    <span className="font-semibold text-gray-900">4+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Response Time</span>
                    <span className="font-semibold text-gray-900">&lt; 2 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            My Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                  {item.year}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
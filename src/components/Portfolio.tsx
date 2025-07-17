import React from 'react';
import { ExternalLink, Star, Quote } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Randolph Family Restaurant',
      category: 'Local Restaurant',
      image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern website redesign for a family-owned Italian restaurant, featuring online ordering and reservation system.',
      problem: 'Outdated website with poor mobile experience and no online ordering',
      solution: 'Responsive design with integrated ordering system and table reservations',
      tools: ['React', 'Tailwind CSS', 'Stripe API', 'Google Maps'],
      testimonial: 'Our online orders increased by 300% after the new website launch!',
      client: 'Maria Romano, Owner'
    },
    {
      title: 'Morris County Dental',
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional healthcare website with appointment booking and patient portal integration.',
      problem: 'Manual appointment scheduling and lack of online presence',
      solution: 'Automated booking system with patient portal and service showcase',
      tools: ['WordPress', 'Custom PHP', 'HIPAA Compliance', 'SSL Security'],
      testimonial: 'The appointment booking system has saved us countless hours of phone calls.',
      client: 'Dr. James Chen, DDS'
    },
    {
      title: 'Garden State Landscaping',
      category: 'Home Services',
      image: 'https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lead-generating website for local landscaping company with project gallery and quote request system.',
      problem: 'Difficulty showcasing work and generating qualified leads',
      solution: 'Visual portfolio with before/after galleries and lead capture forms',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'PHP Forms', 'Google Analytics'],
      testimonial: 'We get 5-10 new project inquiries per week through our website now.',
      client: 'Mike Rodriguez, Owner'
    },
    {
      title: 'Randolph Auto Repair',
      category: 'Automotive',
      image: 'https://images.pexels.com/photos/13065/pexels-photo-13065.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Service-focused website for auto repair shop with appointment scheduling and service tracking.',
      problem: 'Customers couldn\'t easily book appointments or track service status',
      solution: 'Online booking system with SMS notifications and service progress tracking',
      tools: ['Vue.js', 'Firebase', 'Twilio API', 'Google Calendar'],
      testimonial: 'Customer satisfaction improved significantly with the new booking system.',
      client: 'Tony Castellano, Manager'
    }
  ];

  const testimonials = [
    {
      text: 'Working with AJH Web Services was a game-changer for our business. The new website not only looks amazing but has tripled our online inquiries.',
      author: 'Sarah Johnson',
      business: 'Johnson Real Estate'
    },
    {
      text: 'Professional, responsive, and delivered exactly what we needed. The website perfectly captures our brand and converts visitors into customers.',
      author: 'Michael Chen',
      business: 'Chen\'s Asian Cuisine'
    },
    {
      text: 'Outstanding service from start to finish. The website is fast, mobile-friendly, and easy for us to update. Highly recommended!',
      author: 'Lisa Martinez',
      business: 'Martinez Law Firm'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses. Here's how I've helped local companies 
            grow their online presence and drive more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-blue-600 font-medium">{project.category}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Problem: </span>
                    <span className="text-sm text-gray-600">{project.problem}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-900">Solution: </span>
                    <span className="text-sm text-gray-600">{project.solution}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <div className="flex items-start space-x-3">
                    <Quote className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-sm text-gray-700 italic mb-2">"{project.testimonial}"</p>
                      <p className="text-sm font-medium text-gray-900">- {project.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
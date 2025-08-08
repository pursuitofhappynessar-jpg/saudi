import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderPageEnProps {
  title: string;
  description?: string;
}

const PlaceholderPageEn: React.FC<PlaceholderPageEnProps> = ({ title, description }) => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Medical Tourism Association" 
              className="h-24 w-auto mx-auto mb-6 opacity-60 logo-glow"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {description || 'This page is under development. Content will be added soon.'}
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto border-t-4 border-teal-500">
            <Construction className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-6">Coming Soon</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are currently working on developing this page to provide the best user experience. 
              Please visit the page again soon to see the new content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPageEn;
import React from 'react';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="جمعية السياحة العلاجية" 
              className="h-24 w-auto mx-auto mb-6 opacity-60"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-darkBlue-800 mb-8">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {description || 'هذه الصفحة قيد التطوير. سيتم إضافة المحتوى قريباً.'}
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-3xl mx-auto border-t-4 border-teal-500">
            <Construction className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-darkBlue-800 mb-6">قريباً</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              نعمل حالياً على تطوير هذه الصفحة لتقديم أفضل تجربة للمستخدمين. 
              يرجى زيارة الصفحة مرة أخرى قريباً للاطلاع على المحتوى الجديد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
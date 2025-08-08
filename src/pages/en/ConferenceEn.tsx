import React from 'react';
import { Calendar, Users, Award, Clock, MapPin, Stethoscope } from 'lucide-react';

const ConferenceEn = () => {
  const speakers = [
    {
      name: 'Dr. Ahmed Al-Omari',
      title: 'International Medical Tourism Expert',
      topic: 'The Future of Medical Tourism in the Kingdom'
    },
    {
      name: 'Ms. Fatima Al-Zahrani',
      title: 'Institutional Development Manager',
      topic: 'Innovation in Medical Tourism Services'
    },
    {
      name: 'Dr. Mohammed Al-Qahtani',
      title: 'Professor of Medical Tourism',
      topic: 'Sustainable Development in the Health Sector'
    }
  ];

  const schedule = [
    {
      time: '09:00 - 10:00',
      title: 'Registration and Welcome',
      speaker: 'Organizing Team'
    },
    {
      time: '10:00 - 11:30',
      title: 'Opening Session',
      speaker: 'Dr. Ahmed Al-Omari'
    },
    {
      time: '11:30 - 12:00',
      title: 'Break',
      speaker: ''
    },
    {
      time: '12:00 - 13:30',
      title: 'Workshop: Innovation in Medical Tourism',
      speaker: 'Ms. Fatima Al-Zahrani'
    }
  ];

  return (
    <div className="py-20 bg-white" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Annual Medical Tourism Conference
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Join us in this exceptional event to exchange experiences and knowledge in the field of medical tourism
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-teal-600" />
              <span className="text-lg font-medium">July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-teal-600" />
              <span className="text-lg font-medium">Taif, Kingdom of Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-teal-600" />
              <span className="text-lg font-medium">Over 500 Participants</span>
            </div>
          </div>
        </div>

        {/* Conference Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <Calendar className="w-12 h-12" />, number: '3', label: 'Days', color: 'teal' },
            { icon: <Users className="w-12 h-12" />, number: '500+', label: 'Participants', color: 'purple' },
            { icon: <Award className="w-12 h-12" />, number: '25', label: 'Speakers', color: 'orange' },
            { icon: <Clock className="w-12 h-12" />, number: '15', label: 'Sessions', color: 'pink' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-lg animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-${stat.color}-600 mx-auto mb-3`}>{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Speakers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Distinguished Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt={speaker.name}
                    className="h-24 w-auto object-contain opacity-60 logo-glow"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h4>
                  <p className="text-teal-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-600">{speaker.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Preview */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Day One Program</h3>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-teal-600 font-bold text-lg">{item.time}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    {item.speaker && <p className="text-gray-600">{item.speaker}</p>}
                  </div>
                </div>
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceEn;
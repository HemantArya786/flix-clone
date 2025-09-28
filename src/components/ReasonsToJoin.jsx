import React from 'react';

export default function ReasonsToJoin() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      bgColor: "from-purple-900 to-purple-700",
      iconBg: "bg-purple-400",
      icon: <div className="w-8 h-6 bg-purple-200 rounded"></div>
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      bgColor: "from-blue-900 to-blue-700",
      iconBg: "bg-blue-400",
      icon: (
        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-blue-600 border-t-transparent border-b-transparent"></div>
        </div>
      )
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      bgColor: "from-red-900 to-red-700",
      iconBg: "bg-red-400",
      icon: (
        <div className="grid grid-cols-2 gap-1">
          <div className="w-3 h-2 bg-red-200 rounded"></div>
          <div className="w-3 h-2 bg-red-200 rounded"></div>
          <div className="w-3 h-2 bg-red-200 rounded"></div>
          <div className="w-3 h-2 bg-red-200 rounded"></div>
        </div>
      )
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      bgColor: "from-yellow-900 to-yellow-700",
      iconBg: "bg-yellow-400",
      icon: (
        <div className="flex space-x-1">
          <div className="w-3 h-6 bg-yellow-200 rounded"></div>
          <div className="w-3 h-6 bg-yellow-200 rounded"></div>
        </div>
      )
    }
  ];

  return (
    <div
      className="py-16 px-4"

    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">More reasons to join</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className={`p-6 rounded-lg`} style={{
                background: 'linear-gradient(149deg, #192247 0%, #210e17 99.08%)'
            }}>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {reason.description}
              </p>
              <div className="flex justify-center">
                <div className={`w-16 h-12 ${reason.iconBg} rounded flex items-center justify-center`}>
                  {reason.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

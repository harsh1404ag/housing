import React, { useState } from 'react';
import { AlertCircle, Home, Search, User, MessageCircle } from 'lucide-react';

const StudentHousingMVP = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Cozy Studio near NYU',
      type: 'Studio',
      price: 1200,
      location: 'Greenwich Village',
      distance: '0.2 miles from NYU',
      amenities: ['Wifi', 'Furnished', 'Utilities included'],
      images: ['/api/placeholder/400/300']
    },
    {
      id: 2,
      title: 'Shared Room in Modern Apartment',
      type: 'Shared Room',
      price: 800,
      location: 'East Village',
      distance: '0.5 miles from NYU',
      amenities: ['Wifi', 'Laundry', 'Kitchen'],
      images: ['/api/placeholder/400/300']
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">StudentStay NYU</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              List Your Property
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search location..."
              className="flex-1 min-w-[200px] p-2 border rounded"
            />
            <select className="p-2 border rounded">
              <option>Any Type</option>
              <option>Private Room</option>
              <option>Shared Room</option>
              <option>Studio</option>
              <option>Apartment</option>
            </select>
            <select className="p-2 border rounded">
              <option>Price Range</option>
              <option>$0 - $1000</option>
              <option>$1000 - $2000</option>
              <option>$2000+</option>
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(listing => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
                <p className="text-gray-600 mb-2">{listing.location}</p>
                <p className="text-sm text-gray-500 mb-2">{listing.distance}</p>
                <div className="flex gap-2 mb-3">
                  {listing.amenities.map((amenity, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>
                <p className="font-bold text-lg">${listing.price}/month</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                  Contact Host
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t">
        <div className="flex justify-around py-2">
          <button onClick={() => setActiveTab('search')} className="flex flex-col items-center">
            <Search className={activeTab === 'search' ? 'text-blue-600' : 'text-gray-500'} />
            <span className="text-xs">Search</span>
          </button>
          <button onClick={() => setActiveTab('saved')} className="flex flex-col items-center">
            <Home className={activeTab === 'saved' ? 'text-blue-600' : 'text-gray-500'} />
            <span className="text-xs">Saved</span>
          </button>
          <button onClick={() => setActiveTab('messages')} className="flex flex-col items-center">
            <MessageCircle className={activeTab === 'messages' ? 'text-blue-600' : 'text-gray-500'} />
            <span className="text-xs">Messages</span>
          </button>
          <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center">
            <User className={activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default StudentHousingMVP;
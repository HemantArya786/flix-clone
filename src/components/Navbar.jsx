import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Edit, Monitor, User, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <nav className=" text-white px-4 py-3 flex items-center justify-between">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        {/* Netflix Logo */}
        <div className="text-red-600 font-bold text-2xl tracking-tight">
          NETFLIX
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to={"/"} className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            Shows
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            Movies
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            Games
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            New & Popular
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            My List
          </Link>
          <Link to={"/"} className="text-gray-300 hover:text-white transition-colors">
            Browse by Languages
          </Link>
        </div>
      </div>

      {/* Right side - Search, Children, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="flex items-center">
          {isSearchOpen ? (
            <div className="flex items-center border border-white bg-[#141415] bg-opacity-50">
              <Search 
                size={20} 
                className="ml-2 text-white cursor-pointer"
                onClick={() => setIsSearchOpen(false)}
              />
              <input
                type="text"
                placeholder="Titles, people, genres"
                className="bg-transparent text-white placeholder-gray-400 px-2 py-1 w-64 focus:outline-none text-sm"
                autoFocus
              />
            </div>
          ) : (
            <button 
              className="p-1 hover:text-gray-300 transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
          )}
        </div>

        {/* Children Link */}
        <Link to={"/"} className="text-gray-300 hover:text-white transition-colors text-sm hidden sm:block">
          Children
        </Link>

       {/* Notification Bell */}
        <div className="relative">
          <button 
            className="p-1 hover:text-gray-300 transition-colors"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <Bell size={20} />
          </button>

          {/* Notification Dropdown */}
          {isNotificationOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-opacity-75 backdrop-blur-sm border-t- rounded-sm shadow-lg z-50">
              {/* Arrow pointer */}
              <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
              
              <div className="p-6 text-center">
                <p className="text-gray-300 text-base">No recent notifications</p>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-medium">😊</span>
            </div>
            <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 w-64  bg-opacity-90 backdrop-blur-sm border border-gray-700 rounded-md shadow-lg z-50">
              {/* Children Profile */}
              <div className="flex items-center space-x-3 px-4 py-3  cursor-pointer border-b border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">kids</span>
                </div>
                <span className="text-white text-sm">Children</span>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <div className="flex items-center space-x-3 px-4 py-2 hover:underline
  cursor-pointer">
                  <Edit size={16} className="text-gray-400" />
                  <span className="text-white text-sm">Manage Profiles</span>
                </div>
                
                <div className="flex items-center space-x-3 px-4 py-2 hover:underline  cursor-pointer">
                  <Monitor size={16} className="text-gray-400" />
                  <span className="text-white text-sm">Transfer Profile</span>
                </div>
                
                <div className="flex items-center space-x-3 px-4 py-2 hover:underline cursor-pointer">
                  <User size={16} className="text-gray-400" />
                  <span className="text-white text-sm">Account</span>
                </div>
                
                <div className="flex items-center space-x-3 px-4 py-2 hover:underline  cursor-pointer">
                  <HelpCircle size={16} className="text-gray-400" />
                  <span className="text-white text-sm">Help Centre</span>
                </div>
              </div>

              {/* Sign Out */}
              <div className="border-t border-gray-700 py-2">
                <div className="px-4 py-2  cursor-pointer hover:underline">
                  <span className="text-white text-sm">Sign out of Netflix</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
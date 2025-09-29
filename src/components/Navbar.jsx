import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Edit,
  Monitor,
  User,
  HelpCircle,
  Globe,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NetflixProfileIcons from "../../public/NetflixProfileIcons.jpeg";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const languageDropdownRef = useRef(null);

  // Check if we're on landing page or signin page
  const isLandingPage =
    location.pathname === "/" || location.pathname === "/signin" || location.pathname === "/player" ; 
    

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll to change navbar background
  // useEffect(() => {
  //   function handleScroll() {
  //     const scrollPosition = window.scrollY;
  //     const halfPageHeight = window.innerHeight / 2;
  //     setIsScrolled(scrollPosition > halfPageHeight);
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10); // Change as soon as user scrolls a little
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <nav className={`fixed top-0 left-0 right-0 z-50 text-white px-20 py-6 flex items-center justify-between transition-colors duration-300 ${
    //   isScrolled ? 'bg-black/100' : 'bg-black/00'
    // }`}>

    <nav
      className={`${location.pathname === "/player" && "hidden " } fixed top-0  left-0 right-0 z-50 text-white px-20 py-5 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={
        isScrolled
          ? {
              background:
                "linear-gradient(to bottom, #070707, #0f0f0f, #121212)",
            }
          : {
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0))",
            }
      }
    >
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        {/* Netflix Logo */}
        <div className="flex items-center">
          {isLandingPage ? (
            <img
              src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg"
              alt="Netflix"
              className="h-6 cursor-default"
            />
          ) : (
            <Link to="/home">
              <img
                src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg"
                alt="Netflix"
                className="h-6 w-full"
              />
            </Link>
          )}
        </div>

        {/* Navigation Links - Hidden on landing pages */}
        {!isLandingPage && (
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={"/home"}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/shows"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Shows
            </Link>
            <Link
              to={"/movies"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Movies
            </Link>
            <Link
              to={"games"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Games
            </Link>
            <Link
              to={"/new-and-popular"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              New & Popular
            </Link>
            <Link
              to={"/my-list"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              My List
            </Link>
            <Link
              to={"/browse-by-language"}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Browse by Languages
            </Link>
          </div>
        )}
      </div>

      {/* Right side - Conditional content based on route */}
      <div className="flex items-center space-x-4">
        {isLandingPage ? (
          <>
            {/* Language Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                className="flex items-center space-x-1 px-4 py-2 border border-white/30 rounded hover:border-white transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe size={16} />
                <span className="text-sm">English</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-black bg-opacity-90  border border-gray-700 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    <div
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      <span className="text-white text-sm">English</span>
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      <span className="text-white text-sm">हिन्दी</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sign In Button */}
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition-colors font-medium"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center border-1 p-1 border-white bg-black bg-opacity-50">
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
                  <Search size={28} />
                </button>
              )}
            </div>

            {/* Children Link */}
            <Link
              to={"/"}
              className="text-[#f8f8f8] hover:text-white transition-colors text-md font-light hidden sm:block"
            >
              Children
            </Link>

            {/* Notification Bell */}
            <div className="relative">
              <button
                className="p-1 hover:text-gray-300 transition-colors"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell size={28} />
              </button>

              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-opacity-75 backdrop-blur-sm border-t- rounded-sm shadow-lg z-50">
                  {/* Arrow pointer */}
                  <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                  <div className="p-6 text-center">
                    <p className="text-gray-300 text-base">
                      No recent notifications
                    </p>
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
                <div className="w-10 h-10  rounded flex items-center justify-center overflow-hidden">
                  <img
                    src={NetflixProfileIcons}
                    alt="icon"
                    className="w-8 h-8 object-cover rounded"
                  />
                </div>

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-black/80  bg-opacity-10 backdrop-blur-sm border border-gray-700 rounded-md shadow-lg z-50">
                  {/* Children Profile */}
                  <div
                    className="flex items-center space-x-3 px-4 py-3  cursor-pointer "
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">kids</span>
                    </div>
                    <span className="text-white text-sm hover:underline">Children</span>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <div
                      className="flex items-center space-x-3 px-4 py-2 hover:underline
  cursor-pointer"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Edit size={24} className="text-gray-400" />
                      <span className="text-white text-sm">
                        Manage Profiles
                      </span>
                    </div>

                    <div
                      className="flex items-center space-x-3 px-4 py-2 hover:underline  cursor-pointer"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Monitor size={24} className="text-gray-400" />
                      <span className="text-white text-sm">
                        Transfer Profile
                      </span>
                    </div>

                    <div
                      className="flex items-center space-x-3 px-4 py-2 hover:underline cursor-pointer"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User size={24} className="text-gray-400" />
                      <span className="text-white text-sm">Account</span>
                    </div>

                    <div
                      className="flex items-center space-x-3 px-4 py-2 hover:underline  cursor-pointer"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <HelpCircle size={24} className="text-gray-400" />
                      <span className="text-white text-sm">Help Centre</span>
                    </div>
                  </div>

                  {/* Sign Out */}
                  <div
                    className="border-t border-gray-400 py-2"
                    onClick={() => {
                      navigate("/");
                      setIsProfileOpen(false);
                    }}
                  >
                    <div className="px-4 py-2 flex justify-center  cursor-pointer hover:underline">
                      <span className="text-white  text-sm">
                        Sign out of Netflix
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" text-gray-400 py-16 bg-[#141414] px-8">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8">
          <Facebook className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
          <Instagram className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
          <Twitter className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
          <Youtube className="w-6 h-6 hover:text-white transition-colors cursor-pointer" />
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Audio Description
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Investor Relations
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Legal Notices
            </Link>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Help Centre
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Jobs
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Cookie Preferences
            </Link>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Gift Cards
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Corporate Information
            </Link>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Media Centre
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to={"/"} className="block text-sm hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © 1997-2025 Netflix, Inc.
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import Navbar from '../components/Navbar';
import LandingHeroSection from '../components/LandingHeroSection';
import ReasonsToJoin from '../components/ReasonsToJoin';
import LandingFAQ from '../components/LandingFAQ';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingHeroSection />
      <ReasonsToJoin />
      <LandingFAQ />
    </div>
  );
}
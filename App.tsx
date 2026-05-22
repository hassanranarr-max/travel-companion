
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import TourGrid from './components/TourGrid';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { checkAdminAuth, signOutAdmin } from './lib/auth';
import { fetchTours } from './lib/tours';
import { Tour } from './types';

const App: React.FC = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState({
    international: [],
    domestic: [],
    umrah: [],
  } as { international: Tour[]; domestic: Tour[]; umrah: Tour[] });

  // Check auth state and load tours on mount
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check if user is authenticated as admin
        const isAdmin = await checkAdminAuth();
        setIsAdminLoggedIn(isAdmin);

        const fetchedTours = await fetchTours(isAdmin);
        setTours(fetchedTours);
      } catch (error) {
        console.error('Error initializing app:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const handleLogout = async () => {
    await signOutAdmin();
    setIsAdminLoggedIn(false);
    const fetchedTours = await fetchTours();
    setTours(fetchedTours);
  };

  const handleUpdateTours = async () => {
    const fetchedTours = await fetchTours(true);
    setTours(fetchedTours);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // If admin is logged in, show admin dashboard
  if (isAdminLoggedIn) {
    return (
      <AdminDashboard
        tours={tours}
        onUpdateTours={handleUpdateTours}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        <AboutUs />
        <TourGrid 
          internationalTours={tours.international}
          domesticTours={tours.domestic}
          umrahTours={tours.umrah}
        />
        <Stats />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
      
      {/* Quick Scroll to top (floating) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 bg-white text-slate-900 shadow-2xl p-4 rounded-2xl border border-slate-100 hover:bg-gold transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6 transition-transform group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;

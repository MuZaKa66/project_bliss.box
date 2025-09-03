// ===================== REACT & DEPENDENCY IMPORTS =====================
// Import React core functionality and hooks
import { StrictMode, useCallback } from 'react';
// Import DOM rendering functionality
import { createRoot } from 'react-dom/client';
import { useState } from "react"; // 👈 add this for mobile menue enable 




// Import icon components from Lucide React library
// import { Gift, Heart, Star, Sparkles, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
// ******* NEW CODE START (MOBILE NAV ICON IMPORTS ADDED: Menu, X) *******
// We’re keeping the original import above as a reference and adding Menu & X for the hamburger open/close icons.
import { Gift, Heart, Star, Sparkles, Phone, Mail, MapPin, Clock, Users, Award, Menu, X } from 'lucide-react';
// ******* NEW CODE END *******

// Import global CSS styles
import './index.css';
// Import local image asset for background
import backgroundImage from './assests/images/gallery/image1.jpg';
import LocalImage3 from './assests/images/gallery/image3.jpg';

import LocalImage4 from './assests/images/gallery/image4.jpg';
import LocalImage5 from './assests/images/gallery/image5.jpg';
import LocalImage6 from './assests/images/gallery/image6.jpg';
import LocalImage7 from './assests/images/gallery/image7.jpg';
import LocalImage8 from './assests/images/gallery/image8.jpg';
//import LocalImage20 from './assests/images/gallery/image20.jpg';
// ===================== MAIN APP COMPONENT =====================
/**
 * Main application component - serves as the root component for the gift wrapping service website
 * Features smooth scrolling navigation and multiple content sections
 */
export default function App() {
  // ===================== SMOOTH SCROLL HANDLERS =====================
  // These useCallback hooks ensure scroll functions are memoized and don't change on re-renders
  
  // Scroll to Services section when called
  const scrollToServices = useCallback(() => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Scroll to Gallery section when called
  const scrollToGallery = useCallback(() => {
    const section = document.getElementById("gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Scroll to About section when called
  const scrollToScrollToAbout = useCallback(() => {
    const section = document.getElementById("about");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Scroll to Contact section when called
  const scrollToContact = useCallback(() => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });

  }, []);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 add here

  // ===================== COMPONENT RENDER =====================
  return (
    // Main container with base styling for the entire application
    <div className="font-sans antialiased text-gray-900 scroll-smooth">

      {/* ================= HEADER / NAVIGATION BAR ================= */}
      {/* Sticky header that remains at top during scrolling */}
      <header className="bg-rose-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand section with gift icon and company name */}
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">BlissBox For You</span>
            </div>
            
            {/* Main navigation menu - hidden on mobile, visible on medium screens and up */}
            <nav className="hidden md:flex space-x-8">
              {/* Services navigation button with hover effect */}
              <button onClick={scrollToServices} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
              
              {/* Gallery navigation button with hover effect */}
              <button onClick={scrollToGallery} className="text-gray-700 hover:text-amber-600 transition-colors">Gallery</button>
              
              {/* About navigation button with hover effect */}
              <button onClick={scrollToScrollToAbout} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              
              {/* Contact navigation button with hover effect */}
              <button onClick={scrollToContact} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
            </nav>

            {/* ******* NEW CODE START (MOBILE NAV: HAMBURGER TOGGLER) *******
                - Shows only on small screens (md:hidden)
                - Toggles the mobile menu open/close state
                - Uses lucide-react Menu (open) and X (close) icons
                - Safe to reuse: copy this button and the mobile drawer below to any project
            */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
              aria-label="Open main menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            {/* ******* NEW CODE END ******* */}
          </div>
        </div>

        {/* ******* NEW CODE START (MOBILE NAV: SLIDE-DOWN MENU) *******
            - Renders only when `isMenuOpen` is true
            - Hidden on md and above (mobile-only)
            - Each item calls the same smooth-scroll handlers you already use
            - IMPORTANT: closes the drawer after navigating (setIsMenuOpen(false))
        */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-rose-200 bg-rose-50">
            <div className="px-4 py-3 space-y-2">
              <button
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-rose-100"
                onClick={() => { scrollToServices(); setIsMenuOpen(false); }}
              >
                Services
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-rose-100"
                onClick={() => { scrollToGallery(); setIsMenuOpen(false); }}
              >
                Gallery
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-rose-100"
                onClick={() => { scrollToScrollToAbout(); setIsMenuOpen(false); }}
              >
                About
              </button>
              <button
                className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 hover:bg-rose-100"
                onClick={() => { scrollToContact(); setIsMenuOpen(false); }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
        {/* ******* NEW CODE END ******* */}
      </header>

      {/* ================= HERO SECTION ================= */}
      {/* Full-screen hero section with background image and centered content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image container with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Background image with dark overlay gradient for text readability
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '200vh', 
            width: '100%' 
          }}
        ></div>
        
        {/* Content overlay positioned above background image */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* Main hero headline with emphasis on second line */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Beautifully Wrapped
            <span className="block text-amber-400">Every Time</span>
          </h1>
          
          {/* Supporting description text */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Transform your gifts into unforgettable moments with our tasteful wrapping services
          </p>
          
          {/* Call-to-action buttons container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA button - View Services */}
            <button onClick={scrollToServices} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              View Our Services
            </button>
            
            {/* Secondary CTA button - Contact Us */}
            <button onClick={scrollToContact} className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      {/* Services showcase section with light gray background */}
      <section id="services" className="py-20 bg-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with title and description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wrapping Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From special occasions to grand celebrations, we provide elegant wrapping for every important moment
            </p>
          </div>

          {/* Services grid - responsive 3-column layout on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* ========== SERVICE CARD: WEDDING & ROMANCE ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wedding & Romance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Exquisite wrapping for engagement rings, wedding gifts, and romantic surprises with delicate ribbons and elegant finishes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Silk ribbons & lace</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Pearl accents</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Custom love notes</li>
              </ul>
            </div>

            {/* ========== SERVICE CARD: BIRTHDAY CELEBRATIONS ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Birthday Celebrations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vibrant and joyful wrapping that captures the excitement of birthdays with personalized touches and festive designs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Age-appropriate themes</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Colorful ribbons</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Fun decorative elements</li>
              </ul>
            </div>

            {/* ========== SERVICE CARD: HOLIDAY SPECIALS ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Holiday Specials</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seasonal wrapping that brings holiday magic to life with themed papers, traditional colors, and festive accessories.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Seasonal themes</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Traditional patterns</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Holiday ornaments</li>
              </ul>
            </div>

            {/* ========== SERVICE CARD: CORPORATE GIFTS ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Gifts</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional and sophisticated wrapping for business gifts, client appreciation, and corporate events.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Premium materials</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Brand customization</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Bulk pricing</li>
              </ul>
            </div>

            {/* ========== SERVICE CARD: SPECIAL OCCASIONS ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Occasions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Graduations, baby showers, anniversaries – we create memorable presentations for all of life's milestones.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Custom designs</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Occasion-specific</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Memory keepsakes</li>
              </ul>
            </div>

            {/* ========== SERVICE CARD: LUXURY PREMIUM ========== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Premium</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The ultimate in gift presentation with premium papers, gold foiling, and luxury finishing touches.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Hand-crafted details</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Premium materials</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-amber-500 mr-2" />Exclusive designs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      {/* Portfolio showcase section with white background */}
      <section id="gallery" className="py-20 bg-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with title and description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform ordinary gifts into extraordinary presentations
            </p>
          </div>
          
          {/* Image gallery grid - responsive 3-column layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic image mapping - creates gallery items from URL array */}
            {[
              backgroundImage,
              //LocalImage1,
              //LocalImage2,
              LocalImage3,
              LocalImage4,
              LocalImage5,
              LocalImage6,
              LocalImage7,
              LocalImage8,




              //'https://images.pexels.com/photos/264986/pexels-photo-264986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303092/pexels-photo-1303092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
            ].map((image, index) => (
              // Individual gallery item with hover effects
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Gallery image with zoom effect on hover */}
                <img
                  src={image}
                  alt={`Gift wrapping example ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay with call-to-action text */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="text-lg font-semibold">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      {/* Company story section with amber background */}
      <section id="about" className="py-20 bg-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-column layout: text content and image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Text content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BlissBox For You?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We create gift presentations to make occasions memorable, we understand that the wrapping is often as important as the gift itself. Every package we create tells a story and creates anticipation.
              </p>
              
              {/* Feature highlights list */}
              <div className="space-y-6">
                {/* Feature 1: Attention to Detail */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Attention to Detail</h3>
                    <p className="text-gray-600">Every fold, ribbon, and finishing touch is carefully crafted to perfection.</p>
                  </div>
                </div>

                {/* Feature 2: Personal Touch */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h3>
                    <p className="text-gray-600">We customize each wrapping to match the occasion and recipient's style.</p>
                  </div>
                </div>

                {/* Feature 3: Quality Materials */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Materials</h3>
                    <p className="text-gray-600">Only the finest papers, ribbons, and accessories for lasting beauty.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column: Image with overlay badge */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1303087/pexels-photo-1303087.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" 
                alt="Gift wrapping process"
                className="rounded-2xl shadow-2xl"
              />
              {/* Decorative badge overlay on image */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-amber-600">We Endavour</p>
                <p className="text-dark gray-800 font-bold">your Happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      {/* Customer reviews section with white background */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What will our Customers Say!,Looking forward</h2>
          </div>
          
          {/* Testimonials grid - 3 columns on medium screens */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dynamic testimonial cards - currently placeholder content */}
            {[
              { name: " ", text: " !", rating: 5 },
              { name: " ", text:"!", rating: 5 },
              { name: "", text: "!", rating: 5 }
            ].map((testimonial, index) => (
              // Individual testimonial card
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                {/* Star rating display */}
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                {/* Testimonial quote text */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                {/* Customer name */}
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      {/* Contact information section with dark background */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to make your gifts unforgettable? Contact us today to discuss your wrapping needs
            </p>
          </div>
          
          {/* Contact methods grid - 4 columns on large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phone contact method */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">(+92) 0334-5092939</p>
            </div>

            {/* Email contact method */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">blissboxisb@gmail.com</p>
            </div>

            {/* Address/Location information */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">BlissBox<br />Lane no A1, Sector F <br />Bahria Town , Phase - 7, Rawalpindi</p>
            </div>  

            {/* Business hours information */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">Coming Soon</p>        
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      {/* Site footer with black background */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer content layout - brand and copyright info */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Company branding in footer */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gift className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">BlissBox For You</span>
            </div>
            
            {/* Copyright and tagline text */}
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; 2024 BlissBox For You. All rights reserved.</p>
              <p className="text-gray-400 mt-1">Making every gift a beautiful experience.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


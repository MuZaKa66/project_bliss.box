import { StrictMode, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { Gift, Heart, Star, Sparkles, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import './index.css';
import backgroundImage from './assests/images/gallery/image2.jpg';
export default function App() {
  // ===================== SCROLL HANDLERS =====================
  // Smooth scroll to Services section
  const scrollToServices = useCallback(() => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Smooth scroll to Gallery section
  const scrollToGallery = useCallback(() => {
    const section = document.getElementById("gallery");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Smooth scroll to About section
  const scrollToAbout = useCallback(() => {
    const section = document.getElementById("about");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Smooth scroll to Contact section
  const scrollToContact = useCallback(() => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // ===================== RENDER =====================
  return (
    <div className="font-sans antialiased text-gray-900 scroll-smooth">

      {/* ================= HEADER / NAVBAR ================= */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">BlissBox For You</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={scrollToServices} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
              <button onClick={scrollToGallery} className="text-gray-700 hover:text-amber-600 transition-colors">Gallery</button>
              <button onClick={scrollToAbout} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
              <button onClick={scrollToContact} className="text-gray-700 hover:text-amber-600 transition-colors">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
            //backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('$backgroundImage?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`, backgroundSize:'cover', backgroundPosition: 'center', height: '200vh', width: '100%' 


          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Beautifully Wrapped
            <span className="block text-amber-400">Every Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Transform your gifts into unforgettable moments with our tasteful wrapping services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToServices} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              View Our Services
            </button>
            <button onClick={scrollToContact} className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wrapping Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From special occasions to grand celebrations, we provide elegant wrapping for every important moment
            </p>l
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ===== SERVICE CARD EXAMPLES ===== */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              {/********************** */}
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

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              {/********************** */}
              
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

            {/* ===== ADD OTHER SERVICE CARDS SIMILARLY ===== */}
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
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform ordinary gifts into extraordinary presentations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.pexels.com/photos/264986/pexels-photo-264986.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1303092/pexels-photo-1303092.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image}
                  alt={`Gift wrapping example ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
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


     

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose BlissBox For You?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We create gift presentations to make  occasions memorable, we understand that the wrapping is often as important as the gift itself. Every package we create tells a story and creates anticipation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Attention to Detail</h3>
                    <p className="text-gray-600">Every fold, ribbon, and finishing touch is carefully crafted to perfection.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h3>
                    <p className="text-gray-600">We customize each wrapping to match the occasion and recipient's style.</p>
                  </div>
                </div>

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
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1303087/pexels-photo-1303087.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop" 
                alt="Gift wrapping process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-amber-600">We Endavour</p>
                <p className="text-dark gray-800 font-bold">your    Happiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What will our  Customers Say!,Looking forward  </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: " ", text: " !", rating: 5 },
              { name: " ", text:"!",rating: 5 },
              { name: "", text: "!", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to make your gifts unforgettable? Contact us today to discuss your wrapping needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">(+92) 0334-5092939</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">blissboxisb@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">BlissBox<br />Lane no A1, Sector F <br />Bahria Town , Phase - 7, Rawalpindi</p>
            </div>  

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

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gift className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold">BlissBox For You</span>
            </div>
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


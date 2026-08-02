import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import BikeCard from '../components/BikeCard'
import TestimonialCard from '../components/TestimonialCard'
import bikes from '../data/bikes'
import '../css/home.css'

// Testimonials are only used on the Home page so kept local instead of a separate data file
const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Bandra, Mumbai',
    message: 'Great experience buying my first bike here. Staff explained everything clearly.',
  },
  {
    id: 2,
    name: 'Sneha Patil',
    location: 'Andheri, Mumbai',
    message: 'Got my bike serviced within a day. Very professional and honest pricing.',
  },
  {
    id: 3,
    name: 'Arjun Mehta',
    location: 'Dadar, Mumbai',
    message: 'The test ride helped me choose the right bike for my daily commute.',
  },
]

function Home() {
  // showing only the first 3 bikes as "featured" on the home page
  const featuredBikes = bikes.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <section className="welcome-section container">
        <h2 className="section-title">Welcome to Speedster Bikes</h2>
        <p className="section-subtitle">
          We have been serving bike lovers in Mumbai for over 10 years with quality bikes,
          honest advice and reliable after-sales service.
        </p>
      </section>

      {/* Featured Bikes */}
      <section className="featured-section container">
        <h2 className="section-title">Featured Bikes</h2>
        <p className="section-subtitle">A few of our most popular models</p>

        <div className="bikes-grid">
          {featuredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        <div className="view-all-wrapper">
          <Link to="/bikes" className="btn">View All Bikes</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">What makes us different from other showrooms</p>

          <div className="why-us-grid">
            <div className="why-us-item">
              <h3>10+ Years Experience</h3>
              <p>Trusted by thousands of riders across Mumbai since 2014.</p>
            </div>
            <div className="why-us-item">
              <h3>Genuine Bikes Only</h3>
              <p>We deal only in genuine, brand-authorized two wheelers.</p>
            </div>
            <div className="why-us-item">
              <h3>Easy Financing</h3>
              <p>Multiple EMI options to fit every budget and need.</p>
            </div>
            <div className="why-us-item">
              <h3>Expert Servicing</h3>
              <p>Trained mechanics use genuine parts for every repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real feedback from real riders</p>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to find your next bike?</h2>
          <p>Visit our showroom or contact us today to book a free test ride.</p>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default Home

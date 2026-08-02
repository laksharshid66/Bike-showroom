import { Link } from 'react-router-dom'

// Hero section used at the top of the Home page
function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>Find Your Perfect Ride</h1>
          <p>Best deals on new bikes, genuine service and expert support - all under one roof.</p>
          <div className="hero-buttons">
            <Link to="/bikes" className="btn">Browse Bikes</Link>
            <Link to="/contact" className="btn btn-outline">Book Test Ride</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

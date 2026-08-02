import { Link } from 'react-router-dom'
import '../css/footer.css'

// Footer shown on every page - quick links, contact info, socials, copyright
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">
            Speedster<span>Bikes</span>
          </h3>
          <p>Your trusted local bike showroom for sales, service and support.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bikes">Bikes</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li>Bandra West, Mumbai, Maharashtra</li>
            <li>+91 98765 43210</li>
            <li>info@speedsterbikes.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Speedster Bikes. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

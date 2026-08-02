import { useState } from 'react'
import '../css/contact.css'

// Contact page - shows contact details, a map, and a contact form
function Contact() {
  // form field values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // validation error messages for each field
  const [errors, setErrors] = useState({})

  // flag to show the "thank you" message after successful submit
  const [submitted, setSubmitted] = useState(false)

  // updates formData whenever the user types in any input
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // checks all fields and returns an object with error messages (empty object = no errors)
  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (formData.phone.trim().length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    // no errors - "submit" the form (no backend, so just reset it)
    setErrors({})
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page container">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">We would love to hear from you</p>

      <div className="contact-wrapper">
        {/* Contact Details */}
        <div className="contact-details">
          <h3>Showroom Details</h3>
          <p><strong>Address:</strong> Linking Road, Bandra West, Mumbai, Maharashtra - 400050</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@speedsterbikes.com</p>
          <p><strong>Business Hours:</strong> Mon - Sat, 10:00 AM - 8:00 PM</p>

          <div className="map-wrapper">
            <iframe
              title="Speedster Bikes Showroom Location"
              src="https://www.google.com/maps?q=Bandra%20West%2C%20Mumbai&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <h3>Send us a Message</h3>

          {submitted && (
            <p className="success-message">Thank you! We'll contact you soon.</p>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit phone number"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

// Reusable card used to display a single customer testimonial on the Home page
function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{testimonial.message}"</p>
      <div className="testimonial-footer">
        <h4>{testimonial.name}</h4>
        <span>{testimonial.location}</span>
      </div>
    </div>
  )
}

export default TestimonialCard

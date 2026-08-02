import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import '../css/services.css'

// Services page - lists all the services offered by the showroom
function Services() {
  return (
    <div className="services-page container">
      <h1 className="section-title">Our Services</h1>
      <p className="section-subtitle">Everything you need, beyond just buying a bike</p>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services

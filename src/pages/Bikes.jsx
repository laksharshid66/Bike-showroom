import BikeCard from '../components/BikeCard'
import bikes from '../data/bikes'
import '../css/bikes.css'

// Bikes page - displays all bikes in a grid using the BikeCard component
function Bikes() {
  return (
    <div className="bikes-page container">
      <h1 className="section-title">Our Bikes</h1>
      <p className="section-subtitle">Browse our full collection of new bikes</p>

      <div className="bikes-page-grid">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  )
}

export default Bikes

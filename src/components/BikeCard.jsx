import '../css/bikes.css'

// Reusable card used to display a single bike
// Receives bike details as props from the parent (Home or Bikes page)
function BikeCard({ bike }) {
  return (
    <div className="bike-card">
      <img src={bike.image} alt={bike.name} className="bike-image" />
      <div className="bike-info">
        <h3>{bike.name}</h3>
        <p className="bike-brand">{bike.brand}</p>

        <div className="bike-specs">
          <span>⚙️ {bike.engine}</span>
          <span>⛽ {bike.fuel}</span>
          <span>📏 {bike.mileage}</span>
        </div>

        <p className="bike-description">{bike.description}</p>

        <div className="bike-footer">
          <span className="bike-price">{bike.price}</span>
          <button className="btn view-btn">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default BikeCard
